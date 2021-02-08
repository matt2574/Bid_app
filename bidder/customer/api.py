from customer.models import Customer
from rest_framework import viewsets, permissions
from .serializers import CustomerSerializer, ItemSerializer, LineItemSerializer, BidSerializer

# Customer Viewset


class CustomerViewSet(viewsets.ModelViewSet):
  # Queryset = Customer.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = CustomerSerializer

    # Gets only the Users customers, customers is related name
    def get_queryset(self):
        return self.request.user.customers.all()

    # Saves the customer User when the customer is created
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# Item Viewset
class ItemViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ItemSerializer

    # Gets only the Users item, relate_item is related name
    def get_queryset(self):
        return self.request.user.relate_item.all()

    # Saves the customer item when the item is created
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# LineItem Viewset
class LineItemViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = LineItemSerializer

    # Gets only the Users LineItem, relate_LineItem is related name
    def get_queryset(self):
        return self.request.user.relate_lineitem.all()

    # Saves the customer LineItem when the LineItem is created
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# Bid Viewset
class BidViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = BidSerializer

    # Gets only the Users bid, relate_bid is related name
    def get_queryset(self):
        return self.request.user.relate_bid.all()

    # Saves the customer bid when the bid is created
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
