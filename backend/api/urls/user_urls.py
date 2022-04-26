from django.urls import path, include
from django.conf import settings
from api.views import user_views



urlpatterns = [
    path('register/', user_views.register, name='register'),
    path('profile/', user_views.user_profile, name='profile'),
    path('', user_views.get_users, name='all_users'),
]
