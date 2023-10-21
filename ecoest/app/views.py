from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.response import Response

from .models import Forest, CommunityProject
from .serializers import ForestSerializer, CommunityProjectSerializer


# Create your views here.
class ForestList(generics.ListAPIView):
    queryset = Forest.objects.all()
    serializer_class = ForestSerializer


class ForestDetail(generics.RetrieveUpdateAPIView):
    queryset = Forest.objects.all()
    serializer_class = ForestSerializer


class CommunityProjectList(generics.ListAPIView):
    queryset = CommunityProject.objects.all()
    serializer_class = CommunityProjectSerializer


class CommunityProjectDetail(generics.RetrieveUpdateAPIView):
    queryset = CommunityProject.objects.all()
    serializer_class = CommunityProjectSerializer


class CommunityProjectCreate(generics.CreateAPIView):
    queryset = CommunityProject.objects.all()
    serializer_class = CommunityProjectSerializer


@api_view(['GET'])
def load_data(request):
    import json
    f = open('../forests.json')
    data = json.load(f)
    for i in data['forests']:
        name = i['attributes']['FOREST']
        category = i['attributes']['GAZETTED']
        area = i['attributes']['area']
        coords = i['geometry']
        Forest.objects.create(name=name, category=category, area=area, coords=coords)
    return Response('OK')
