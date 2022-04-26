import email
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Product, Category, OrderedProducts
from .serializers import *
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from rest_framework import status, permissions




# Create your views here.

###### DUMMY/TESTING VIEWS ######
#  
# HOME PAGE VIEW
def home(request):
    return JsonResponse({'title': 'SneakerSource App',  'info': 'React Django'})

##### REGISTER USER #####
@api_view(['POST'])
def register(request):
    data = request.data
    user = User.objects.create(
        first_name=data['firstName'],
        last_name=data['lastName'],
        username=data['email'],
        email=data['email'],
        password=make_password(data['password']),
    )
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


##### USER PROFILE VIEW #####

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

##### ALL USERS VIEW #####
@api_view(['GET'])
@permission_classes([IsAdminUser])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)



# GET ALL CATEGORIES
@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)



# GET ALL PRODUCTS
class GetAllProducts(APIView):
    model = Product

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


# GET PRODUCT DETAILS
@api_view(['GET'])
def product_details(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


