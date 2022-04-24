# Generated by Django 4.0.4 on 2022-04-24 18:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0003_orderedproducts'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='ShippingInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shippingCost', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('address', models.CharField(blank=True, max_length=155, null=True)),
                ('city', models.CharField(blank=True, max_length=155, null=True)),
                ('state', models.CharField(blank=True, max_length=155, null=True)),
                ('zipCode', models.CharField(blank=True, max_length=10, null=True)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('shippingDate', models.DateField()),
                ('order', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.order')),
            ],
            options={
                'ordering': ['shippingDate'],
            },
        ),
    ]