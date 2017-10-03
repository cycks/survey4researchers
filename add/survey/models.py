from django.db import models
from datetime import datetime 

# Create your models here.
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