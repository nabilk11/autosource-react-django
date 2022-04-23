from django.urls import path, include
from django.conf import settings
from . import views




urlpatterns = [
    path('', views.home, name='home'),
    path('category/', include('api.inventory.urls')),

]
