from django.shortcuts import render, redirect
from .forms import RegistrationForm, LoginForm
from .models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.http import HttpResponse

# Create your views here.
def home(request):
	return render(request ,'home.html')

# def signup(request):
#   form = RegistrationForm()
#   return render(request, 'signup.html', {'form': form})



def signup(request):
	'''This function is meant to collect data from the signup page 
	and post the information to the user table in the database.
	I currently cannot post the information to the database'''
	if request.method == "POST":
		form = RegistrationForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('/login.html')
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
			email1 = form.cleaned_data['email']
			password1 = form.cleaned_data['password']
			user = authenticate(email = email1, password = password1)
			if user is not None:
				if user.is_active:
					login(request, user)
				else:
					print("The account is not active!")
			else:
				print("The username and password are incorrect.")
		
	else:
		form = LoginForm()
		return render(request, 'login.html', {'form':form})


def logout_view(request):
	logout(request)
	return redirect('/')


