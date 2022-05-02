from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from api.models import Product, Category, OrderedProducts
from api.serializers import *
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from rest_framework import status, permissions



# GET ALL PRODUCTS
class GetAllProducts(APIView):
    model = Product

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

# Get All User Products
@api_view(['GET'])
def get_user_products(request):
    user = request.user
    products = Product.objects.get(user=user)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


# GET PRODUCT DETAILS
@api_view(['GET'])
def product_details(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

