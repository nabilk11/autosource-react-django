from django.urls import path, include
from django.conf import settings
from api.views import product_views



urlpatterns = [
    
    path('', product_views.GetAllProducts.as_view(), name="products"),
    # this path must be string id
    path('<str:pk>/', product_views.product_details, name="product_details"),

]
