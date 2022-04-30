from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from api.models import Product, Category, OrderedProducts, Order, ShippingInfo
from api.serializers import *
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from rest_framework import status, permissions



@api_view(['POST'])
@permission_classes(['IsAuthenticated'])
def add_order(request):
    user = request.user
    data = request.data
    orderProducts = data['products']
    if orderProducts and len(orderProducts) == 0:
        return Response({'err': 'Empty Cart'})
    else:
        order = Order.objects.create(
            user=user,
            paymentType=data['paymentType'],
            tax = data['tax'],
            shipping = data['shipping'],
            totalPrice = data['total'],
        )
        shipping = ShippingInfo.objects.create(
            order=order,
            address=data.shippingAddress.address,
            city=data.shippingAddress.city,
            state=data.shippingAddress.state,
            zipCode=data.shippingAddress.zipCode,
        )
        for i in orderProducts: 
            product = Product.objects.get(_id=i['product'])

            item = OrderedProducts.objects.create(
                product=product,
                order=order,
                qty=i['stock'],
                price=product.price,
                name=product.name,
            )
            product.count -= item.qty
            product.save()
    serializer = OrderSerializer(order, many=True)

    return Response(serializer.data)