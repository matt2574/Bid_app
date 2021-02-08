
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('customer.urls')),
    path('', include('accounts.urls')),
    path('api-auth/', include('rest_framework.urls')),
]
