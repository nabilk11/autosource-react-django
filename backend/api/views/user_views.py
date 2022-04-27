from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from api.serializers import *
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from rest_framework import status, permissions
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


####### SIMPLE JWT TOKEN SERIALIZER X VIEW #######
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['name'] = user.name
        token['email'] = user.email
        token['firstName'] = user.first_name
        token['lastName'] = user.last_name

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    

##### REGISTER USER #####
@api_view(['POST'])
def register(request):
    data = request.data
    user = User.objects.create(
        first_name=data['first_name'],
        last_name=data['last_name'],
        username=data['email'],
        email=data['email'],
        password=make_password(data['password']),
    )
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


##### USER PROFILE VIEW #####
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

##### ALL USERS VIEW #####
@api_view(['GET'])
@permission_classes([IsAdminUser])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)