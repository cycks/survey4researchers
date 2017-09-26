from django.db import models


# Create your models here.
class User(models.Model):
	first_name = models.CharField(max_length = 50)
	last_name = models.CharField(max_length = 100)
	username = models.CharField(max_length=30)
	email = models.EmailField(unique = True, blank = False, null = False, default = None)
	password2 = models.CharField(max_length=255)
