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
@permission_classes([IsAuthenticated])
def get_user_products(request):
    user = request.user
    products = user.product_set.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


# GET PRODUCT DETAILS
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_product(request, pk):
    product = Product.objects.get(_id=pk)
    product.delete()
    return Response('Product Deleted!')


# GET PRODUCT DETAILS
@api_view(['GET'])
def product_details(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


# ADD PRODUCT
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def product_create(request):
    user=request.user
    product = Product.objects.create(
        user=user,
        name='New Product',
        price=0,
        color='Product Color',
        description='Description',
        count=1,
        year=2022,
        size='0',
        )
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


# UPDATE PRODUCT 
@api_view(['PUT'])
def product_update(request, pk):
    data=request.data
    product = Product.objects.get(_id=pk)


    product.name=data['name'],
    product.price=data['price'],
    product.color=data['color'],
    product.category=data['category'],
    product.description=data['description'],
    product.count=data['count'],
    product.images=data['images'],
    product.year=data['year'],
    product.size=data['size'],
    
    product.save()
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)



