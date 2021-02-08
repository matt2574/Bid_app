from django.db import models
from django.contrib.auth.models import User
from datetime import datetime


class Customer(models.Model):
    customer_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    company_name = models.CharField(max_length=100)
    phone_num = models.IntegerField()
    address = models.CharField(max_length=100)
    user = models.ForeignKey(
        User, related_name="customers", on_delete=models.CASCADE, null=True)


class Item(models.Model):
    item_name = models.CharField(max_length=100)
    item_price = models.DecimalField(max_digits=8, decimal_places=1)
    item_yield = models.DecimalField(max_digits=8, decimal_places=1)
    item_thickness = models.DecimalField(max_digits=8, decimal_places=1)
    labor_rate = models.DecimalField(max_digits=8, decimal_places=1)
    item_total = models.DecimalField(max_digits=8, decimal_places=1)

    user = models.ForeignKey(
        User, related_name="relate_item", on_delete=models.CASCADE, null=True)


class Bid(models.Model):
    customer = models.ForeignKey(
        Customer, on_delete=models.CASCADE, null=True, related_name="bids")

    line_item = models.ManyToManyField(
        Item, through="LineItem", through_fields=(
            'bid', 'item', 'line_sqft', 'line_thickness', 'line_pitch', 'line_volume', 'line_sets', 'line_item_price', 'line_material_cost', 'line_labor_cost'))

    bid_date = models.DateTimeField(default=datetime.now, blank=True)
    total_labor_cost = models.DecimalField(max_digits=8, decimal_places=1)
    total_material_cost = models.DecimalField(max_digits=8, decimal_places=1)
    total_item_price = models.DecimalField(max_digits=8, decimal_places=1)
    total_sets = models.DecimalField(max_digits=8, decimal_places=1)
    total_volume = models.IntegerField()
    total_sqft = models.IntegerField()
    tax = models.DecimalField(max_digits=8, decimal_places=1)
    bid_total = models.DecimalField(max_digits=8, decimal_places=1)
    options_total = models.DecimalField(max_digits=8, decimal_places=1)
    grand_total = models.DecimalField(max_digits=8, decimal_places=1)
    notes = models.CharField(max_length=100)
    terms = models.TextField()
    user = models.ForeignKey(
        User, related_name="relate_bid", on_delete=models.CASCADE, null=True)


class LineItem(models.Model):
    bid = models.ForeignKey(Bid, on_delete=models.CASCADE)
    item = models.ForeignKey(
        Item, on_delete=models.CASCADE, null=True, related_name='bid_items')
    line_sqft = models.IntegerField()
    line_thickness = models.DecimalField(max_digits=8, decimal_places=1)
    line_pitch = models.IntegerField()
    line_volume = models.IntegerField()
    line_sets = models.DecimalField(max_digits=8, decimal_places=1)
    line_item_price = models.DecimalField(max_digits=8, decimal_places=1)
    line_material_cost = models.DecimalField(max_digits=8, decimal_places=1)
    line_labor_cost = models.DecimalField(max_digits=8, decimal_places=1)
    user = models.ForeignKey(
        User, related_name="relate_lineitem", on_delete=models.CASCADE, null=True)
