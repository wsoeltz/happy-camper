from django.urls import path
from . import views

urlpatterns = [
    path('current_user/', views.current_user),
    path('register/', views.RegisterUser.as_view()),
    path('get_campgrounds/', views.get_campgrounds),
    path('get_campground/<int:campground_id>', views.get_campground),
    path('get_users_campgrounds/<int:user_id>', views.get_users_campgrounds),
    path('get_users_reservations/<int:user_id>', views.get_users_reservations),
    path('create_booking', views.create_booking),
    path('cancel_reservation', views.cancel_reservation),
    path('add_campground', views.add_campground),
    path('edit_campground', views.edit_campground),
    path('create_campsite', views.create_campsite),
    path('delete_campsite', views.delete_campsite),
]
