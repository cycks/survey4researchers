from django.shortcuts import render, redirect, render_to_response
from .forms import RegistrationForm, LoginForm
from .models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required

# Create your views here.
def home(request):
	return render(request, 'home.html')

def signup(request):
	if request.method == "POST":
		form = RegistrationForm(request.POST)
		if form.is_valid():
			form.save(commit = False)
			user = User()
			user.first_name = form.cleaned_data['first_name']
			user.last_name = form.cleaned_data['last_name']
			user.username = form.cleaned_data['username']
			user.email = form.cleaned_data['email']
			user.password1 = form.cleaned_data['password1']
			user.password2 = form.cleaned_data['password2']
			user.save()
			return render(request, 'login.html', context)
		else:
			form = RegistrationForm(request.POST)
			args = {'form': form}
			messages.error(request, "Error")
			return render(request, 'signup.html', args)
	else:
		form = RegistrationForm()
		return render(request, 'signup.html', {'form': form})

def login(request):
	'''This function is used to display the log in form to the front end'''
	form = LoginForm()
	return render(request, 'login.html', {'form': form})

def loggedin(request):
	if request.method == "POST":
		form = LoginForm(request.POST)
		if form.is_valid():
			username = form.cleaned_data['username']
			password = form.cleaned_data['password']
			user = authenticate(username = username, password = password)
			if user is not None:
				if user.is_active:
					request.session.set_expiry(86400)
					print(request.session)
					name = user.username
					context = {'name': name}
					login(request)
					return render(request, 'dashboard.html', context)
				else:
					form = LoginForm(request.POST)
					args = {'form': form}
					return render(request, 'login.html', args)
			else:
				form = LoginForm(request.POST)
				args = {'form': form}
				return render(request, 'login.html', args)
		else:
			form = LoginForm(request.POST)
			args = {'form': form}
			messages.error(request, "Error")
			return render(request, 'login.html', args)
	else:
		form = LoginForm()
		args = {'form': form}
		messages.error(request, "Error")
		return render(request, 'login.html', args)


def logout_view(request):
	logout(request)
	return redirect('/')



def create_survey(request):
	if request.method == "GET":
		if request.user.is_authenticated():
			return render(request, 'survey.html')
		else:
			print('I have been redircted to the dahboard')
			return render(request, 'dashboard.html')
	else:
		return render(request, 'dashboard.html')