from rest_framework import serializers
from customer .models import Customer, Item, LineItem, Bid


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ['id', 'item_name', 'item_price', 'item_yield',
                  'item_thickness', 'labor_rate', 'item_total', 'user']


class LineItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = LineItem
        fields = ('item', 'line_sqft', 'line_thickness', 'line_pitch', 'line_volume',
                  'line_sets', 'line_item_price', 'line_material_cost', 'line_labor_cost')


class BidSerializer(serializers.ModelSerializer):

    line_item = LineItemSerializer(many=True)

    class Meta:
        model = Bid
        fields = ('customer', 'bid_date', 'line_item', 'total_labor_cost', 'total_material_cost', 'total_item_price',
                  'total_sets', 'total_volume', 'total_sqft', 'tax', 'bid_total', 'options_total', 'grand_total', 'notes', 'terms', 'user')
