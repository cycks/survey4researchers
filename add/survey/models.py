from django.db import models
from datetime import datetime 
from django.contrib.auth.models import User
# Create your models here.
class CreateSurvey(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	survey_name = models.TextField(unique = True)

class Question(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	survey_name = models.ForeignKey(CreateSurvey, default= 0, on_delete=models.CASCADE)
	question_name = models.TextField()

class AnswerType(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	survey_name = models.ForeignKey(CreateSurvey, default= 0, on_delete=models.CASCADE)
	question_name = models.ForeignKey(Question, default = 0, on_delete = models.CASCADE)
	time_field = models.TimeField(default=datetime.now, null=True)
	date_field = models.DateField(null=True)
	yes_no = models.NullBooleanField(null=True)
	number = models.IntegerField(null=True)
	image = models.ImageField(null=True)