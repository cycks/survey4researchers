from django.db import models

# Create your models here.
class User(models.Model):
	first_name = models.CharField(max_length = 50)
	last_name = models.CharField(max_length = 100)
	username = models.CharField(max_length=30)
	email = models.EmailField(unique = True)
	password1 = models.CharField(max_length=30)
	password2 = models.CharField(max_length=30)
