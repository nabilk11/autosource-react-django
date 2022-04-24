from django.http import JsonResponse
from .dummy_data import sneakers
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Category, OrderedProducts
from .serializers import *

# Create your views here.

###### DUMMY?TESTING 
# HOME PAGE VIEW
def home(request):
    return JsonResponse({'title': 'SneakerSource App',  'info': 'React Django'})
# Dummy Data View
@api_view(['GET'])
def products(request):
    return Response(sneakers)

# GET ALL PRODUCTS
class GetAllProducts(APIView):
    model = Product

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

# Dummy Data View
@api_view(['GET'])
def singleProduct(request, pk):
    product = {''}
    for i in sneakers:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)

