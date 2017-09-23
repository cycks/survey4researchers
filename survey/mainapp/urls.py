from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.home),
    url(r'^login/$', views.login, name='login'),
    url(r'^signup/$', views.signup, name='signup'),

]


# url(r'^logout/$', views.logout_view, name='logout'),
    # url(r'^login/post_login/$', views.loggedin),
    # url(r'^signup/$', views.signup, name='signup'),
    # url(r'^signup/signup/$', views.signup, name='signup'),
    # url(r'^signup/(?P<lang>[\w-]+)$', views.get_name, name='signup'),
    # url(r'^signup/your-name/$', views.signup),