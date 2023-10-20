from django.urls import path
from app.views import index

app_name = 'api'

urlpatterns = [
    path("", index, name='index')
]