from django.contrib import admin

from .models import Customer, Item, Bid, LineItem

admin.site.register(Customer)
admin.site.register(Item)
admin.site.register(Bid)
admin.site.register(LineItem)
