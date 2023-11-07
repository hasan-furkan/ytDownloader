from django.urls import path, include
from .views import download
urlpatterns = [
    path('', download, name='download'),
]