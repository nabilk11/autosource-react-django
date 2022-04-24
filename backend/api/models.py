from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# Products Model
class Product(models.Model):
    _id = models.AutoField(editable=False, primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    name = models.CharField(max_length=155, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    color = models.CharField(max_length=155, blank=True, null=True)
    category = models.CharField(max_length=155, null=True, blank=True)
    description = models.TextField(max_length=255, null=True, blank=True)
    count = models.IntegerField(default=0, blank=True, null=True)
    images = models.ImageField(upload_to='images/', blank=True, null=True)
    category = models.CharField(max_length=75, blank=True, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    
    # add additional fields later
    def __str__(self):
        return self.name