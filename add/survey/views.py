from django.shortcuts import render, redirect, render_to_response 
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from .models import *
from .forms import *

# Create your views here.
def home(request):
	return render(request, 'home.html')

@login_required
def view_dashboard(request):
	if request.method == "GET":
		name = {'user': request.user}
		return render(request, 'dashboard.html', name)
	else:
		return render(request, 'survey.html')



@login_required
def create_survey(request):
	'''Recieves the survey name from the frontend checks if the name
	exists in the database. If not saves the survey name in the database
	.If so, redirects the user to the dashboard but with an error message.'''
	if request.method =="POST":
		current_user = request.user
		survey_name = request.POST.get('surveyName')
		survey_name_object = CreateSurvey.objects.filter(survey_name = survey_name).count()
		if survey_name_object == 0:
			CreateSurvey.objects.create(survey_name = survey_name, user = current_user)
			return render(request, 'survey.html')
		else:
			messages.error(request, 'You already have a survey with the same name. Please try with a different survey name')
			return redirect ('/view_dashboard/create_survey/')
	else:
		return render(request, 'dashboard.html')