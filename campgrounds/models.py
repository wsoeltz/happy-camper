from django.db import models
from django.contrib.auth.models import User
from django.utils import formats

# Create your models here.

# Campground model defines a specific campground,
# its details and location
class Campground(models.Model):
    name = models.TextField()
    image_url = models.TextField()
    description = models.TextField()
    phone = models.CharField(max_length=12)
    lat = models.DecimalField(max_digits=9, decimal_places=6)
    lng = models.DecimalField(max_digits=9, decimal_places=6)
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='campgrounds'
    )

    def __str__(self):
        return self.name

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'image_url': self.image_url,
            'description': self.description,
            'phone': self.phone,
            'lat': self.lat,
            'lng': self.lng,
            'owner': self.owner.id,
            'campsites': [campsite.serialize() for campsite in self.campsites.all()],
        }


# Campsite model defines a specific campsite that
# belongs to a specific Campground. A Campground
# can have many Campsites
class Campsite(models.Model):
    name = models.TextField()
    campground = models.ForeignKey(
        Campground,
        on_delete=models.CASCADE,
        related_name='campsites'
    )

    def __str__(self):
        return f'{self.name}, {self.campground.name}'

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'campground': self.campground.id,
            'reservations': [reservation.serialize() for reservation in self.reservations.all()],
        }


# Reservation defines a date at which a specific
# campsite is booked by a specific user
class Reservation(models.Model):
    date = models.DateField()
    campsite = models.ForeignKey(
        Campsite,
        on_delete=models.CASCADE,
        related_name='reservations'
    )
    camper = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='reservations'
    )


    def __str__(self):
        formatted_date = formats.date_format(self.date, "DATE_FORMAT")
        return f'{formatted_date} for {self.campsite}'

    def serialize(self):
        formatted_date = formats.date_format(self.date, "DATE_FORMAT")
        return {
            'id': self.id,
            'title': f'{formatted_date} for {self.campsite}',
            'date': self.date,
            'campsite': self.campsite.id,
            'campground': self.campsite.campground.id,
            'camper': self.camper.id,
        }
