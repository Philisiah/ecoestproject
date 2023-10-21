from rest_framework import serializers

from .models import Forest, CommunityProject


class ForestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forest
        fields = '__all__'


class CommunityProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = CommunityProject
        fields = '__all__'
