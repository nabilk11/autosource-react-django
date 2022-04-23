from rest_framework import viewsets
from .serializers import CategorySerializer, ProductSerializer
from .models import Category, Product

# Create your views here.

# Category View Set
class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('title')
    serializer_class = CategorySerializer

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('name')
    serializer_class = ProductSerializer