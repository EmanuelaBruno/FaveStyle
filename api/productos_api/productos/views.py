from django.shortcuts import render

# Create your views here.
def mostrar_index(request):
    return render(request, 'index.html')

def mostrar_listado(request):
    return render(request, 'listado.html')

def mostrar_crear(request):
    return render(request, 'form_crear.html')

def mostrar_editar(request):
    return render(request, 'form_editar.html')