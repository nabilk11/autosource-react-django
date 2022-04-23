from rest_framework import viewsets
from .serializers import CategorySerializer
from .models import Category

# Create your views here.

# Category View Set
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('title')
    serializer_class = CategorySerializer

