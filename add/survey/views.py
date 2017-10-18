from django.shortcuts import render, redirect, render_to_response 
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_protect
from .models import *
from .forms import *
import json

# Create your views here.
def home(request):
	return render(request, 'home.html')

@login_required
def view_dashboard(request):
	'''I dentifies a logged in user, queries the CreateSurvey model for
	all surveys associated with the user and renders the dashboard with 
	all surveys belonging to a particular user.'''
	print("I have entered the view_dashboard view")
	if request.method == "GET":
		current_user = request.user
		surveys = CreateSurvey.objects.all().filter(user = current_user)
		return render(request, 'dashboard.html', {'surveys': surveys})
	else:
		current_user = request.user
		surveys = CreateSurvey.objects.all().filter(user = current_user)
		return render(request, 'dashboard.html', {'surveys': surveys})



@login_required
def create_survey(request):
	'''Recieves the survey name from the frontend checks if the name
	exists in the database. If not saves the survey name in the database
	.If so, redirects the user to the dashboard but with an error message.
	'''
	if request.method =="POST":
		current_user = request.user
		survey_name = request.POST.get('surveyName')
		if " " not in survey_name:
			survey_name_object = CreateSurvey.objects.filter(survey_name = survey_name).count()
			if survey_name_object == 0:
				CreateSurvey.objects.create(survey_name = survey_name, user = current_user)
				messages.success(request, 'Survey created successfully.')
				return HttpResponseRedirect('/view_dashboard/')
			else:
				messages.error(request, 'You already have a survey with the same name. Please try with a different survey name')
				return redirect ('/view_dashboard/')
		else:
			messages.error(request, 'A survey name cannot contain white spaces. Please try again!')
			return redirect ('/view_dashboard/')
	else:
		return render(request, 'survey.html')

def delete_survey(request):
	'''This post request is recieved from the questions.html page. The function recieves
	a the name of the survey and deletes the name from the CreateSurvey model.'''
	if request.method =="POST":
		survey_name = request.POST.get('deletesurveyName')
		CreateSurvey.objects.filter(survey_name=survey_name).delete()
		return HttpResponseRedirect ('/view_dashboard/')



@login_required
def display_survey(request):
	'''Recieves a post request from the dashboard.html template, collects the name of 
	the survey and queries the Question model for all questions with the same survey 
	name. It then renders the question.html template '''
	print("I have entered the display_survey view")
	if request.method =="POST":
		survey_name = request.POST.get('surveyName')
		questions = Question.objects.filter(survey_name__survey_name = survey_name)
		return render(request, 'questions.html', {'questions': questions, 'surveys': survey_name})
	else:
		survey_name = request.GET.get('surveyName')
		questions = Question.objects.filter(survey_name__survey_name = survey_name)
		return render(request, 'questions.html', {'questions': questions, 'surveys': survey_name})


def save_question(request):
	print("I have entered the save_question view")
	if request.method =="POST":
		print("This is a post request")
		current_user = request.user
		survey_name = request.POST.get('surveyName')
		survey_name_object = CreateSurvey.objects.filter(survey_name = survey_name)
		question_name = request.POST.get('questionName')
		Question.objects.create(question_name = question_name,
								user = current_user,
								survey_name = CreateSurvey.objects.get(survey_name = survey_name))
		questions = questions_object = Question.objects.filter(survey_name__survey_name = survey_name)
		return HttpResponseRedirect('/view_dashboard/')


def delete_question(request):
	if request.method =="POST":
		ans = dict(request.POST)
		question_name = ans.get("question_name", None)
		question_name = question_name [0]
		survey_name = ans.get("survey_name", None)
		survey_name = survey_name [0]
		Question.objects.filter(question_name=question_name).delete()
		questions = Question.objects.filter(survey_name__survey_name = survey_name)
		return render(request, 'questions.html', {'questions': questions, 'surveys': survey_name})