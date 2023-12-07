from django.db import models

# Create your models here.
class Producto(models.Model):
    nombre_producto = models.IntegerField(null=False)
    tipo =models.TextField(max_length=100)
    descripcion = models.TextField(max_length=100)
    stock = models.IntegerField(null=False)
    precio = models.IntegerField(null=False)