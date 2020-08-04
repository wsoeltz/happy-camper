from django.contrib import admin

from .models import Campground, Campsite, Reservation


# Register your models here.
admin.site.register(Campground)
admin.site.register(Campsite)
admin.site.register(Reservation)
