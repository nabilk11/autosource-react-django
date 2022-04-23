# DUMMY VIEWS PAGE FOR MAIN APP
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

# Dummy backend home route
class Dummy(View):
    def get(self, request):
        return HttpResponse('<h1>Backend Home Page</h1>')