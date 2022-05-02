from rest_framework import serializers
from .models import Category, PaymentInfo, Product, ShippingInfo, Order, OrderedProducts
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

    def get_superuser(self, user):
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
        access = str(refresh.access_token)
        return access


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


#Shipping Serializer
class ShippingInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingInfo
        fields = '__all__'


#OrderedProduct Serializer
class OrderedProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderedProducts
        fields = '__all__'


#Order Serializer
class OrderSerializer(serializers.ModelSerializer):
    orderProducts = serializers.SerializerMethodField(read_only=True)
    shipping = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Order
        fields = '__all__'

    def get_orderProducts(self, order):
        items = order.orderedproducts_set.all()
        serializer = OrderedProductSerializer(items, many=True)
        return serializer.data

    def get_shipping(self, order):
        try:
            shipping = ShippingInfoSerializer(order['shipping'], many=False).data
        except: shipping = False
        return shipping

    def get_user(self, order):
        user = order.user
        serializer = UserSerializer(user, many=False)
        return serializer.data

#Payment Serializer
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentInfo
        fields = '__all__'