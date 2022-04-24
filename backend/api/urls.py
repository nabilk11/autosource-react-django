from django.urls import path, include
from django.conf import settings
from . import views




urlpatterns = [
    path('', views.home, name='home'),
    # path('category/', include('api.inventory.urls')),
    path('products/', views.products, name="products"),
    # this path must be string for dummy data
    path('products/<str:pk>/', views.singleProduct, name="product_details"),

]
