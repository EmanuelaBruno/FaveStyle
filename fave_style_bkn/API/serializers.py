from rest_framework import serializers
from API.models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Producto
        fields = ['id', 'nombre', 'tipo','precio', 'descripcion', 'stock']

        