from dataclasses import fields
from os import access
from rest_framework import serializers
from .models import Category, Product
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken


#User Serializer
class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    superuser = serializers.SerializerMethodField(read_only=True)
     
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'name', 'superuser', 'isAdmin']

    def get_name(self, user):
        name = user.first_name
        return name

    def get_isAdmin(self, user):
        isAdmin = user.is_staff
        return isAdmin

    def superuser(self, user):
        superuser = user.is_superuser
        return superuser


# User Token Serializer
class CustomUserTokenSerializer(UserSerializer):
    access = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'name', 'superuser', 'isAdmin', 'access']


    def get_access(self, user):
        refresh = RefreshToken.for_user(user)

        return {
            'access': str(refresh.access_token),
        }


#Category Serializer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


#Product Serializer
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

