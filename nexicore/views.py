from django.shortcuts import render

def home(request):
    return render(request, 'nexicore/home.html')

def about(request):
    return render(request, 'nexicore/about.html')

def projects(request):
    return render(request, 'nexicore/projects.html')

def roadmap(request):
    return render(request, 'nexicore/roadmap.html')

def blog(request):
    return render(request, 'nexicore/blog.html')

def contact(request):
    return render(request, 'nexicore/contact.html')
