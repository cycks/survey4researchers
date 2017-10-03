from django.shortcuts import render, redirect, render_to_response
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required


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

def create_survey(request):
	if request.method =="POST":
		return render(request, 'survey.html')
	else:
		return render(request, 'dashboard.html')