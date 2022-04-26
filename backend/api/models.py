from django.db import models
from django.contrib.auth.models import User
import datetime
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.


# Category Model
class Category(models.Model):
    title = models.CharField(max_length=55, null=False, blank=False)
    description = models.TextField(max_length=255, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']


# Products Model
def current_year():
    return datetime.date.today().year


def multi_year_value(year):
    return MaxValueValidator(current_year())(year)


class Product(models.Model):
    _id = models.AutoField(editable=False, primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    name = models.CharField(max_length=155, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    color = models.CharField(max_length=155, blank=True, null=True)
    category = models.ForeignKey(Category, related_name="category", null=False, blank=False, on_delete=models.CASCADE, default=1)
    description = models.TextField(max_length=255, null=True, blank=True)
    count = models.IntegerField(default=0, blank=True, null=True)
    images = models.ImageField(upload_to='images/', blank=True, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    year = models.PositiveIntegerField(default=current_year(), validators=[MinValueValidator(1984), multi_year_value])
    
    
    
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
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    

    def __str__(self):
        return 'Order # ' + str(self._id)

    class Meta:
        ordering = ['delivered']

# Ordered Products Model
class OrderedProducts(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)

    def __str__(self):
        return self.name


# Shipping Information
class ShippingInfo(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, blank=True, null=True)
    shippingCost = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    address = models.CharField(max_length=155, null=True, blank=True)
    city = models.CharField(max_length=155, null=True, blank=True)
    state = models.CharField(max_length=155, null=True, blank=True)
    zipCode = models.CharField(max_length=10, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    shippingDate = models.DateField()

    def __str__(self):
        return self.order

    class Meta:
        ordering = ['shippingDate']

# standard 3 days shipping
    def save(self, *args, **kwargs):
        if self.shippingDate is None:
            self.shippingDate = self.createdAt.date() + datetime.timedelta(days=3)
        super(ShippingInfo, self).save(*args, **kwargs)   


