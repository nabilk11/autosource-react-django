from rest_framework import serializers
from .models import Product
from django.contrib.auth.models import User


#User Serializer
class UserSerializer(serializers.ModelSerializer): 
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'is_superuser', 'is_staff']


#Product Serializer
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

