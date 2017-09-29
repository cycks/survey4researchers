from django.conf.urls import url, include
from . import views
from importlib import import_module

from allauth.socialaccount import providers

# from . import app_settings



urlpatterns = [
    url(r'^$', views.home),
    url(r'^accounts/signup/$', views.signup, name='signup'),
    url(r"^signup/$", views.signup, name="account_signup"),
    url(r"^accounts/login/$", views.login, name="account_login"),
    url(r"^logout/$", views.logout, name="account_logout"),

    
    # url(r"^password/change/$", views.password_change,
    #     name="account_change_password"),
    # url(r"^password/set/$", views.password_set, name="account_set_password"),

    # url(r"^inactive/$", views.account_inactive, name="account_inactive"),

    # # E-mail
    # url(r"^email/$", views.email, name="account_email"),
    # url(r"^confirm-email/$", views.email_verification_sent,
    #     name="account_email_verification_sent"),
    # url(r"^confirm-email/(?P<key>[-:\w]+)/$", views.confirm_email,
    #     name="account_confirm_email"),

    # # password reset
    # url(r"^password/reset/$", views.password_reset,
    #     name="account_reset_password"),
    # url(r"^password/reset/done/$", views.password_reset_done,
    #     name="account_reset_password_done"),
    # url(r"^password/reset/key/(?P<uidb36>[0-9A-Za-z]+)-(?P<key>.+)/$",
    #     views.password_reset_from_key,
    #     name="account_reset_password_from_key"),
    # url(r"^password/reset/key/done/$", views.password_reset_from_key_done,
    #     name="account_reset_password_from_key_done"),
    
    # url(r'^login/$', views.loggedin, name='loggedin'),
    # url(r'^signup/$', views.signup, name='signup'),
    # url(r'^signup/login/logout/$', views.logout_view, name='logout'),
    # url(r'^login/createsurvey/$', views.create_survey, name=' create_survey'),
    url(r'^accounts/', include('allauth.urls')),
]



# if app_settings.SOCIALACCOUNT_ENABLED:
#     urlpatterns += [url(r'^social/', include('allauth.socialaccount.urls'))]

# for provider in providers.registry.get_list():
#     try:
#         prov_mod = import_module(provider.get_package() + '.urls')
#     except ImportError:
#         continue
#     prov_urlpatterns = getattr(prov_mod, 'urlpatterns', None)
#     if prov_urlpatterns:
#         urlpatterns += prov_urlpatterns
# url(r'^logout/$', views.logout_view, name='logout'),
    # url(r'^login/post_login/$', views.loggedin),
    # url(r'^signup/$', views.signup, name='signup'),
    # url(r'^signup/signup/$', views.signup, name='signup'),
    # url(r'^signup/(?P<lang>[\w-]+)$', views.get_name, name='signup'),
    # url(r'^signup/your-name/$', views.signup),