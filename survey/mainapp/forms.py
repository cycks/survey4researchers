import re
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.core.exceptions import ObjectDoesNotExist


class RegistrationForm(UserCreationForm):
	email = forms.EmailField(required = True)
	class Meta:
		model = User
		fields = ('username',
		 'first_name',
		 'last_name',
		 'email',
		 'password1',
		 'password2' )
		# help_texts = {
  #           'username': None,
  #           'email': None,
  #           'password': None,
  #       }
	
	def clean(self):
		cleaned_data = super(RegistrationForm, self).clean()
		password1 = self.cleaned_data.get("password1")
		password2 = self.cleaned_data.get("password2")

		if not password2:
			raise forms.ValidationError("You must confirm your password")
		if password1 != password2:
			self.add_error('password2', "Password does not match")
		return cleaned_data

	def save(self, commit=True):
		user = super(RegistrationForm, self).save(commit =  False)
		user.first_name = self.cleaned_data['first_name']
		user.last_name = self.cleaned_data['last_name']
		user.email = self.cleaned_data['email']
		password = self.cleaned_data.get("password2")

		if commit:
			user.save
		return user



class LoginForm(forms.Form):
	email = forms.EmailField(label = 'email', max_length = 50)
	password = forms.CharField(label = 'password', widget=forms.PasswordInput())
	
