from django import forms
from django.contrib.auth.models import *
from .models import *


class CreatesurveyForm(forms.Form):
	survey_name = forms.CharField(required = True)
	
	class Meta:
		model = CreateSurvey
		fields = ('survey_name')

	def clean_survey_name(self):
		cleaned_data = super(CreatesurveyForm, self).clean()
		survey_name = self.cleaned_data['survey_name']
		if User.objects.filter(survey_name = survey_name).exists():
			raise forms.ValidationError('You already have another survey with the same name')
		return survey_name

	def save(self, commit=True):
		survey = super(CreatesurveyForm, self).save(commit =  False)
		survey.survey_name = self.cleaned_data['survey_name']
		
		if commit:
			survey.save
		return survey
