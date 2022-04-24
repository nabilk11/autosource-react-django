from django.db import models

# Create your models here.

# # Categories Model
# class Category(models.Model):
#     title = models.CharField(max_length=55)
#     description = models.CharField(max_length=255)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.title

# # Products Model
# class Product(models.Model):
#     name = models.CharField(max_length=155)
#     price = models.CharField(max_length=55)
#     description = models.CharField(max_length=155)
#     in_stock = models.BooleanField(default=True, blank=True)
#     images = models.ImageField(upload_to='images/', blank=True, null=True)
#     category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     # add additional fields later
#     def __str__(self):
#         return self.name