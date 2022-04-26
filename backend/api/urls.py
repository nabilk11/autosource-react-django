from django.urls import path, include
from django.conf import settings
from . import views



urlpatterns = [
    path('', views.home, name='home'),
    path('user/register/', views.register, name='register'),
    path('user/profile/', views.user_profile, name='profile'),
    path('users/', views.get_users, name='all_users'),
    # path('category/', include('api.inventory.urls')),
    path('products/', views.GetAllProducts.as_view(), name="products"),
    # this path must be string for _id
    path('products/<str:pk>/', views.product_details, name="product_details"),

    path('categories/', views.get_categories, name='categories'),
    path('categories/new/', views.create_category, name='create_category'),
]
