from django.urls import path

from .views import ForestList, ForestDetail, CommunityProjectList,CommunityProjectDetail, CommunityProjectCreate, load_data

app_name = 'api'

urlpatterns = [
    path("all_forests/", ForestList.as_view(), name='all_forests'),
    path("forest_detail/<int:pk>/", ForestDetail.as_view(), name='forest_detail'),
    path("all_projects/", CommunityProjectList.as_view(), name='all_projects'),
    path("project_detail/<int:pk>/", CommunityProjectDetail.as_view(), name='project_detail'),
    path("add_project/", CommunityProjectCreate.as_view(), name='add_project'),
    path("add_data/", load_data, name='add_data'),
]