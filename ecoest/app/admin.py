from django.contrib import admin

from .models import Forest, CommunityProject


# Register your models here.

@admin.register(Forest)
class ForestAdmin(admin.ModelAdmin):
    pass


@admin.register(CommunityProject)
class CommunityProject(admin.ModelAdmin):
    pass
