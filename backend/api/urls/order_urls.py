from django.urls import path, include
from django.conf import settings
from api.views import order_views



urlpatterns = [
    path('new/', order_views.add_order, name='order'),
    
]
