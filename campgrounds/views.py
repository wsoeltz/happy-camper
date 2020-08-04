import json
from django.http import HttpResponseRedirect, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.utils.dateparse import parse_date
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken

from .models import Campground, Campsite, Reservation

# Auth flow modified from
# //medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a
@api_view(['GET'])
def current_user(request):
    # Determine the current user by their token, and return their data
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class RegisterUser(APIView):
    # Create a new user
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Returns all Campgrounds
def get_campgrounds(request):
    all_campgrounds = Campground.objects.all().order_by("name")
    return JsonResponse({
        "campgrounds": [
            campground.serialize() for campground in all_campgrounds
        ],
    }, safe=False)


# Returns a specific Campgrounds
def get_campground(request, campground_id):
    campground = Campground.objects.get(pk=campground_id)
    if campground is not None:
        return JsonResponse({"campground": campground.serialize()}, safe=False)
    else:
        return JsonResponse({"campground": None}, status=201)


# Returns all Campgrounds owned by a specific user
def get_users_campgrounds(request, user_id):
    user = User.objects.get(pk=user_id)
    campgrounds = Campground.objects.filter(owner=user).order_by("name")
    if campgrounds is not None:
        return JsonResponse({
            "campgrounds": [
                campground.serialize() for campground in campgrounds
            ],
        }, safe=False)
    else:
        return JsonResponse({"campgrounds": None}, status=201)


# Returns all Reservations for a specific user
def get_users_reservations(request, user_id):
    user = User.objects.get(pk=user_id)
    reservations = Reservation.objects.filter(camper=user).order_by("-date")
    if reservations is not None:
        return JsonResponse({
            "reservations": [
                reservation.serialize() for reservation in reservations
            ],
        }, safe=False)
    else:
        return JsonResponse({"reservations": None}, status=201)


# Creates a Reservation for a specific user at
# a specific Campsite on a specified day
@csrf_exempt
def create_booking(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)

    data = json.loads(request.body)
    date = parse_date(data.get("date"))
    campsite_id = data.get("campsite_id")
    camper_id = data.get("camper_id")
    campsite = Campsite.objects.get(pk=campsite_id)
    camper = User.objects.get(pk=camper_id)

    if campsite is None:
        return JsonResponse({"error": "No campsite exists."}, status=400)

    if camper is None:
        return JsonResponse({"error": "No user exists."}, status=400)

    new_reservation = Reservation(
        date=date,
        campsite=campsite,
        camper=camper,
    )
    new_reservation.save()
    return JsonResponse({"reservation": new_reservation.serialize()}, safe=False)


# Cancels a specific reservation
@csrf_exempt
def cancel_reservation(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)

    data = json.loads(request.body)
    reservation_id = data.get("reservation_id")
    reservation = Reservation.objects.get(pk=reservation_id)

    if reservation is None:
        return JsonResponse({"error": "No reservation exists."}, status=400)

    reservation.delete()
    return JsonResponse({"message": "Reservation canceled"}, safe=False)


# Creates a new Campground
@csrf_exempt
def add_campground(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)

    data = json.loads(request.body)
    name = data.get("name")
    image_url = data.get("image_url")
    description = data.get("description")
    phone = data.get("phone")
    lat = data.get("lat")
    lng = data.get("lng")
    user_id = data.get("user_id")

    owner = User.objects.get(pk=user_id)

    if owner is None:
        return JsonResponse({"error": "No user exists."}, status=400)

    new_campground = Campground(
        name=name,
        image_url=image_url,
        description=description,
        phone=phone,
        lat=lat,
        lng=lng,
        owner=owner,
    )
    new_campground.save()
    return JsonResponse({"campground": new_campground.serialize()}, safe=False)


# Edits an existing Campground
@csrf_exempt
def edit_campground(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)

    # get updated the post information
    data = json.loads(request.body)
    campground_id = data.get("campground_id")
    campground = Campground.objects.get(pk=campground_id)

    if campground is None:
        return JsonResponse({"error": "No campground exists."}, status=400)

    name = data.get("name")
    image_url = data.get("image_url")
    description = data.get("description")
    phone = data.get("phone")
    lat = data.get("lat")
    lng = data.get("lng")
    user_id = data.get("user_id")

    owner = User.objects.get(pk=user_id)

    if owner is None:
        return JsonResponse({"error": "No user exists."}, status=400)

    campground.name = name
    campground.image_url = image_url
    campground.description = description
    campground.phone = phone
    campground.lat = lat
    campground.lng = lng
    campground.owner = owner

    campground.save()
    return JsonResponse({"campground": campground.serialize()}, safe=False)


# Creates and adds a campsite to an existing Campground
@csrf_exempt
def create_campsite(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)

    # get updated the post information
    data = json.loads(request.body)
    name = data.get("name")
    campground_id = data.get("campground_id")
    campground = Campground.objects.get(pk=campground_id)

    if campground is None:
        return JsonResponse({"error": "No campground exists."}, status=400)

    new_campsite = Campsite(
        name=name,
        campground=campground,
    )
    new_campsite.save()
    return JsonResponse({"campsite": new_campsite.serialize()}, safe=False)


# Removes a Campsite
@csrf_exempt
def delete_campsite(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)

    # get updated the post information
    data = json.loads(request.body)
    campsite_id = data.get("campsite_id")
    campsite = Campsite.objects.get(pk=campsite_id)

    if campsite is None:
        return JsonResponse({"error": "No campsite exists."}, status=400)

    campsite.delete()
    return JsonResponse({"message": "Campsite deleted"}, safe=False)
