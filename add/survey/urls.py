from django.conf.urls import url, include
from . import views

urlpatterns = [
	url(r'^accounts/', include('allauth.urls')),
    url(r'^$', views.home),
    url(r'^view_dashboard/$', views.view_dashboard, name='view_dashboard'),
    url(r'^view_dashboard/create_survey/$', views.create_survey, name='create_survey'),
    url(r'^view_dashboard/display_survey/$', views.display_survey, name='display_survey'),
    url(r'^view_dashboard/display_survey/save_question/$', views.save_question, name='save_question'),
    url(r'^view_dashboard/display_survey/delete_survey/$', views.delete_survey, name='delete_survey'),
    url(r'^view_dashboard/display_survey/delete_question/$', views.delete_question, name='delete_question'),
]