from django.urls import path, include
from django.conf import settings
from api.views import product_views



urlpatterns = [
    
    path('', product_views.GetAllProducts.as_view(), name="products"),
    path('user/', product_views.get_user_products, name="user_products"),
    # this path must be string id
    path('create/', product_views.product_create, name="product_create"),
    path('upload/', product_views.product_image, name="product_image"),
    path('<str:pk>/', product_views.product_details, name="product_details"),
    path('update/<str:pk>/', product_views.product_update, name="product_update"),
    path('delete/<str:pk>/', product_views.delete_product, name="product_delete"),

]
