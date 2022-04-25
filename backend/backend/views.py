# DUMMY VIEWS PAGE FOR MAIN APP
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# # Dummy backend home route
# class Dummy(View):
#     def get(self, request):
#         return HttpResponse('<h1>Backend Home Page</h1>')

#######SIMPLE JWT TOKEN#######
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['name'] = user.name

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer