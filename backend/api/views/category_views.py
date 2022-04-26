from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from api.models import Product, Category, OrderedProducts
from api.serializers import *
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from rest_framework import status, permissions



# GET ALL CATEGORIES
@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

# CREATE NEW CATEGORY
@api_view(['POST'])
@permission_classes([IsAdminUser])
def create_category(request):
    data = request.data
    new_cat = Category.objects.create(
        title=data['title'],
        description=data['description'],
    )
    serializer = CategorySerializer(new_cat, many=False)
    return Response(serializer.data)