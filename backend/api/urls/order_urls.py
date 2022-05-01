from django.urls import path, include
from django.conf import settings
from api.views import order_views



urlpatterns = [
    path('new/', order_views.add_order, name='order'),
    path('<str:pk>/', order_views.get_order, name='get_user_order'),
    path('<str:pk>/payment/', order_views.order_paid, name='order_payment_bool'),
    # path('<str:pk>/payment/', order_views.order_paid, name='order_payment_add'),
    path('shipping/<str:pk>/', order_views.get_shipping, name='get_order_shipping'),
    
]
