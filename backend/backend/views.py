# DUMMY VIEWS PAGE FOR MAIN APP
from rest_framework.response import Response
from django.shortcuts import render
from django.views import View
from api.models import ContactSubmission
from rest_framework.decorators import api_view, permission_classes


@api_view(['POST'])
def contact_us(request):
    data=request.data
    ContactSubmission.objects.create(
        email=data['email'],
        subject=data['subject'],
        message=data['message'],
    )
    return Response('Your Message has Been Sent! Someone will respond within 48 hours.')
    
