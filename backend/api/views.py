from django.http import JsonResponse
from .dummy_data import sneakers
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

# HOME PAGE VIEW
def home(request):
    return JsonResponse({'title': 'SneakerSource App',  'info': 'React Django'})

@api_view(['GET'])
def routes(request):
    routing = [
        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',

        '/api/products/jordan/',
        '/api/products/nikesb/',
        '/api/products/nike/',
        '/api/products/yeezy/',
        '/api/products/other/',

        '/api/products/delete/<id>/',
        '/api/products/update/<id>/',

    ]
    return Response(routing)

# Dummy Data View
@api_view(['GET'])
def products(request):
    return Response(sneakers)

# Dummy Data View
@api_view(['GET'])
def singleProduct(request, pk):
    product = {''}
    for i in sneakers:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)

