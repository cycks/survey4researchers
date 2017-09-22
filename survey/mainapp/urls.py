from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.home),
    url(r'^login/$', views.login, name='login'),
    # url(r'^logout/$', views.logout_view, name='logout'),
    # url(r'^login/post_login/$', views.loggedin),
    # url(r'^signup/$', views.signup, name='signup'),
    url(r'^register_page/$', views.register_page, name='register_page'),
    url(r'^register_page/register_page/$', views.register_page, name='register_page'),
    # url(r'^signup/(?P<lang>[\w-]+)$', views.get_name, name='signup'),
    # url(r'^signup/your-name/$', views.register_page),
]
