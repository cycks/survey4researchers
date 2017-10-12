from django.shortcuts import render, redirect, render_to_response
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import *

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

	if request.method =="POST":
		current_user = request.user
		# current_user_id = current_user.id
		survey_name = request.POST.get('surveyName')
		CreateSurvey.objects.create(survey_name = survey_name, user = current_user)
		print('survey name has been saved to the database')
		return render(request, 'survey.html')
	else:
		return render(request, 'dashboard.html')