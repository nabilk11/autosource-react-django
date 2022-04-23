from django.http import JsonResponse

# Create your views here.

# HOME PAGE VIEW
def home(request):
    return JsonResponse({'title': 'SneakerSource App',  'info': 'React Django'})