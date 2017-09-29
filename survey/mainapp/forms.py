from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.hashers import make_password


class RegistrationForm(UserCreationForm):
	email = forms.EmailField(required = True)
	password1 = forms.CharField(widget=forms.PasswordInput())
	password2 = forms.CharField(widget=forms.PasswordInput())

	class Meta:
		model = User
		fields = ('username',
		 'first_name',
		 'last_name',
		 'email',
		 'password1',
		 'password2' )
		help_texts = {'username': None, 'email': None}
	
	def clean_password2(self):
		if 'password1' in self.cleaned_data:
			password1 = self.cleaned_data['password1']
			password2 = self.cleaned_data['password2']
			if password1 == password2:
				password2 = make_password(password2)
				return password2
		raise forms.ValidationError('Passwords do not match.')

	def clean_email(self):
		cleaned_data = super(RegistrationForm, self).clean()
		email = self.cleaned_data['email']
		if User.objects.filter(email = email).exists():
			raise forms.ValidationError('Email already exists')
		return email

	def save(self, commit=True):
		user = super(RegistrationForm, self).save(commit =  False)
		user.first_name = self.cleaned_data['first_name']
		user.last_name = self.cleaned_data['last_name']
		user.email = self.cleaned_data['email']
		password = self.cleaned_data["password2"]

		if commit:
			user.save
		return user



class LoginForm(forms.Form):
	username = forms.CharField(max_length=60)
	password = forms.CharField(label = 'password', widget=forms.PasswordInput())

	
