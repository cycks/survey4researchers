from django.db import models
from datetime import datetime 
from django.contrib.auth.models import User
# Create your models here.



class CreateSurvey(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	survey_name = models.TextField(unique = True)

	def __str__(self):
		return self.survey_name

class Question(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	survey_name = models.ForeignKey(CreateSurvey, on_delete=models.CASCADE)
	question_name = models.TextField()
	question_choices = (
							("OPEN ENDED", "openEnded"),
							("SINGLE CHOICE", "singleChoice"),
							("BIPOLAR", "bipolar"),
							("RATING", "rating"),
							("MULTIPLE ANSWERS", "multipleChoice"),
							("DATE/TIME", "dateTime"),
						)
	question_type = models.TextField(question_choices, default= 'openEnded')



class QuestionChoices(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	survey_name = models.ForeignKey(CreateSurvey, on_delete=models.CASCADE)
	question_name = models.ForeignKey(Question, on_delete = models.CASCADE)
	possible_choice = models.TextField(null=True)



class RespondentAnswers(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	survey_name = models.ForeignKey(CreateSurvey, on_delete=models.CASCADE)
	question_name = models.ForeignKey(Question, on_delete = models.CASCADE)
	time_field = models.TimeField(default=datetime.now, null=True)
	date_field = models.DateField(null=True)
	yes_no = models.NullBooleanField(null=True)
	number = models.IntegerField(null=True)
	image = models.ImageField(null=True)
	string = models.TextField(null=True)
