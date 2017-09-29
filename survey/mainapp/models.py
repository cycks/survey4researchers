from django.db import models
from datetime import datetime 


# Create your models here.
class User(models.Model):
	first_name = models.CharField(max_length = 50)
	last_name = models.CharField(max_length = 100)
	username = models.CharField(max_length=30)
	email = models.EmailField(unique = True, blank = False, null = False, default = None)
	password2 = models.CharField(max_length=255)

	def __unicode__(self):
		return self.username

class CreateSurvey(models.Model):
	survey_name = models.TextField()

class Question(models.Model):
	question_name = models.TextField()

class AnswerType(models.Model):
	time_field = models.TimeField(default=datetime.now, null=True)
	date_field = models.DateField(null=True)
	yes_no = models.NullBooleanField(null=True)
	number = models.IntegerField(null=True)
	image = models.ImageField(null=True)