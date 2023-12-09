from django.db import models

# Create your models here.

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=50)
    precio = models.FloatField(null=False)
    descripcion = models.TextField(max_length=100)
    stock = models.IntegerField(null=False)

def __str__(self):
        return self.nombre
