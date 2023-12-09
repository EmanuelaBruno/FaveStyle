from django.shortcuts import render
from django.http import HttpResponse

from API.models import Producto
from API import serializers

from rest_framework import status
from rest_framework.decorators import api_view 
from rest_framework.response import Response

# Create your views here.

def index(request):
    return HttpResponse('<h1> Hola mundo </h1>')

@api_view(['GET'])
def get_productos(request):
    """
    Lista todos los productos
    """
    productos = Producto.objects.all()
    serializer = serializers.ProductoSerializer(productos, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def crear_producto(request):
    serializer = serializers.ProductoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        response = {'status':'Ok',
                    'message':'Producto creado con exito',
                    'data': serializer.data}
        return Response(data= response, status=status.HTTP_201_CREATED)
    response = {'status': 'Error',
                'message': 'No se pudo crear el producto',
                'errors': serializer.errors}
    return Response(data=response, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def detalle_producto(request, id):
    try:

        producto = Producto.objects.get(pk=id)
    except Producto.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND,data='Recurso no encontrado')
    
    serializer = serializers.ProductoSerializer(producto)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_producto(request, id):
    try:
        producto = Producto.objects.get(pk=id)        
    except Producto.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND,data='Recurso no encontrado')
    producto.delete()
    return Response({'message':'Se eliminó el producto con exito'},status=status.HTTP_200_OK)


@api_view(['PUT'])
def update_producto(request, id):
    try:
        producto = Producto.objects.get(pk=id)
    except Producto.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND,data='Recurso no encontrado')
    
    serializer = serializers.ProductoSerializer(producto, data=request.data)
    if serializer.is_valid():
        serializer.save()
        response = {'status':'Ok',
                    'message':'Producto modificado con éxito',
                    'data':serializer.data}
        return Response(data=response)
    response = {'status':'Error',
                'message':'No se pudo modificar el producto',
                'errors':serializer.errors}
    return Response(data=response, status=status.HTTP_400_BAD_REQUEST)