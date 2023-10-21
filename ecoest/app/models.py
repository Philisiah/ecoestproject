from django.db import models


# Create your models here.

class Forest(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100, null=True, blank=True)
    area = models.CharField(max_length=100, null=True, blank=True)
    coords = models.JSONField(null=True, blank=True)
    device_name = models.CharField(max_length=100, null=True, blank=True)
    gas_reading = models.CharField(max_length=30, null=True, blank=True)
    temp_reading = models.CharField(max_length=30, null=True, blank=True)
    humidity_reading = models.CharField(max_length=30, null=True, blank=True)

    def __str__(self):
        return f"{self.name}: {self.category} : {self.area}"


class CommunityProject(models.Model):
    title = models.CharField(max_length=100)
    forest = models.ForeignKey(Forest, on_delete=models.CASCADE, null=True, blank=True)
    description = models.CharField(max_length=254, null=True, blank=True)
    goals = models.JSONField(max_length=100, null=True, blank=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.title}: {self.description}"
