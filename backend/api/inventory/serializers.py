from .models import Category
from rest_framework import serializers

class CategorySerializer(serializers.Serializer):
    class Meta:
        model = Category
        field = {
            'title', 'description'
        }