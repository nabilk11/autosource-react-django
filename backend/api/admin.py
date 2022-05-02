from django.contrib import admin
from .models import Category, Order, Product, OrderedProducts, ShippingInfo, PaymentInfo

# Register your models here.
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderedProducts)
admin.site.register(ShippingInfo)
admin.site.register(PaymentInfo)