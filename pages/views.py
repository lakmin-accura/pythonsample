from django.shortcuts import render
from django.template import TemplateDoesNotExist, loader
from django.http import HttpResponse



def index(request):

	template = loader.get_template('index.html')

	# return HttpResponse(loader(template, request))
	return render(request, 'index.html')

def about(request):
   return render(request, 'about.html')

def contact(request):
   return render(request, 'contact.html')


def artificialintelligence(request):
   return render(request, 'artificial-intelligence.html')


def softwaredevelopment(request):
   return render(request, 'software-development.html')

# Create your views here.
