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
		help_texts = {'username': None, 'email': None, 'password1': None}
	
	def clean_password2(self):
		if 'password1' in self.cleaned_data:
			password1 = self.cleaned_data['password1']
			password2 = self.cleaned_data['password2']
			if password1 == password2:
				return password2
		raise forms.ValidationError('Passwords do not match.')

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
	email = forms.EmailField(label = 'email', max_length = 50)
	password = forms.CharField(label = 'password', widget=forms.PasswordInput())
	
