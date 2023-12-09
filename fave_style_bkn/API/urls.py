from django.urls import path, re_path, include
from . import views

urlpatterns = [
    path('', views.index, name='inicio_app'),
    path('productos/', views.get_productos, name='getproductos_app'),
    path('create_product/', views.crear_producto),
    path('productos/<int:id>/', views.detalle_producto),
    path('delete_producto/<int:id>/', views.delete_producto),
    path('update_producto/<int:id>/', views.update_producto),
]

