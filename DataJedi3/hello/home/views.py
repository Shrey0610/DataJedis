from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):  #home
    return render(request,'index.html')

def features(request):
    return HttpResponse('features')

def pricing(request):
    return HttpResponse('pricing')

def contact(request):
    return HttpResponse('contact')

def resources(request):
    return HttpResponse('resources')

