from django.urls import path, include
from django.conf import settings
from api.views import category_views



urlpatterns = [
    path('category/', category_views.get_categories, name='categories'),
    path('category/new/', category_views.create_category, name='create_category'),
]
