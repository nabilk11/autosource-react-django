from django.http import JsonResponse
from .dummy_data import sneakers
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Category, OrderedProducts
from .serializers import *
from django.views.generic.detail import DetailView


# Create your views here.

###### DUMMY/TESTING VIEWS ######
#  
# HOME PAGE VIEW
def home(request):
    return JsonResponse({'title': 'SneakerSource App',  'info': 'React Django'})

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


