from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):  #home
    return render(request,'index.html')

def features(request):
    return render(request,'features.html')

def pricing(request):
    return render(request,'pricing.html')

def contact(request):
    return render(request,'contactus.html')

def resources(request):
    return render(request,'resources.html')

def login(request):
    return render(request,'login.html')

