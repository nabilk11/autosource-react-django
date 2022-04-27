from pyexpat import model
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
import datetime


####### SIMPLE JWT TOKEN SERIALIZER X VIEW #######
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, user):
        data = super().validate(user)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data.pop('refresh', None) # remove refresh from the payload
        data['access'] = str(refresh.access_token)
        data['user'] = self.user.username
        data['firstName'] = self.user.first_name
        data['lastName'] = self.user.last_name
        data['isAdmin'] = self.user.is_staff
        data['super'] = self.user.is_superuser
        data['id'] = self.user.id
        data['date'] = datetime.date.today()
        return data

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