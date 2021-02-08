from rest_framework import routers
from .api import CustomerViewSet, ItemViewSet, LineItemViewSet, BidViewSet

router = routers.DefaultRouter()
router.register('api/customer', CustomerViewSet, 'customer'),
router.register('api/item', ItemViewSet, 'item'),
router.register('api/lineitem', LineItemViewSet, 'lineitem'),
router.register('api/bid', BidViewSet, 'bid'),

urlpatterns = router.urls
