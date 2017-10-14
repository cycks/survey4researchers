from django.conf.urls import url, include
from . import views

urlpatterns = [
	url(r'^accounts/', include('allauth.urls')),
    url(r'^$', views.home),
    url(r'^view_dashboard/$', views.view_dashboard, name='view_dashboard'),
    url(r'^view_dashboard/create_survey/$', views.create_survey, name='create_survey'),
    url(r'^view_dashboard/display_survey/$', views.display_survey, name='display_survey'),
]