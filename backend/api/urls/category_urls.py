from django.urls import path, include
from django.conf import settings
from api.views import category_views



urlpatterns = [
    path('', category_views.get_categories, name='categories'),
    path('<str:pk>/', category_views.get_category_prods, name='categories'),
    path('new/', category_views.create_category, name='create_category'),
]
