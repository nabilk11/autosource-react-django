from unicodedata import name
from django.db import models
from django.contrib.auth.models import User
from django.forms import CharField

# Create your models here.

CAT_CHOICES = (
    ("Jordan","Jordan"),
    ("Yeezy","Yeezy"),
    ("NikeSB","NikeSB"),
    ("Nike","Nike"),
    ("Accessories","Accessories"),
    ("Other","Other"),
    ("Men's Apparel","Men's Apparel"),
    ("Women's Apparel","Women's Apparel"),
)

# Category Model
class Category(models.Model):
    title = models.CharField(max_length=55, choices = CAT_CHOICES)
    description = models.TextField(max_length=255, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

def __str__(self):
    return self.title

class Meta:
    ordering = ['title']


# Products Model
class Product(models.Model):
    _id = models.AutoField(editable=False, primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    name = models.CharField(max_length=155, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    color = models.CharField(max_length=155, blank=True, null=True)
    category = models.ForeignKey(Category, related_name="category", null=True, blank=True, on_delete=models.SET_NULL)
    description = models.TextField(max_length=255, null=True, blank=True)
    count = models.IntegerField(default=0, blank=True, null=True)
    images = models.ImageField(upload_to='images/', blank=True, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    
    # add additional fields later
    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']

# Order Model
class Order(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    paymentType = models.CharField(max_length=200, null=True, blank=True)
    tax = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    shipping = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    paymentCompleted = models.BooleanField(default=False)
    paymentTime = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    deliveryTime = models.BooleanField(default=False)
    delivered = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    

    def __str__(self):
        return 'Order # ' + str(self._id)

    class Meta:
        ordering = ['delivered']


class OrderedProducts(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)

    def __str__(self):
        return self.name


  



