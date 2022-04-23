from django.db import models

# Create your models here.

#Product Categories
class Category(models.Model):
    title = models.CharField(max_length=55)
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)