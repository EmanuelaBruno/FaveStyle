const { createApp } = Vue;
createApp({
  data() {
    return {
        productos : [],
        api_server:"http://127.0.0.1:8000",
        id_producto:'',
        nombre:'',
        tipo:'',
        precio:'',
        descripcion:'',
        stock:'',
    };
  },
  methods: {
    sendFormData(url, formData,method) {
        fetch(url, {
          method: method,
          body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            alert("Producto creado:");
            //Limpiar el formulario
            this.nombre='';
            this.tipo='';
            this.precio='';
            this.descripcion='',
            this.stock='',
            this.getProductos(`${this.api_server}/api/productos/`);
        })
        .catch((error) => {
            console.error("Error al enviar el formulario:", error);
        });
    },
    onFileChange(event) {
        // Manejar el cambio en el input de tipo file
        this.banner = event.target.files[0];
    },
    getProductos() { // Metodo para buscar las peliculas en el servidor
        fetch(`${this.api_server}/api/productos/`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.productos = data;
            })
            .catch((err) => {
                console.error(err);
            });
    },
    getProducto(id_producto) {
        fetch(`${this.api_server}/api/productos/${id_producto}/`, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => {
            this.id_producto = data.id;
            this.nombre = data.nombre;
            this.tipo = data.tipo,
            this.precio = data.precio,
            this.descripcion = data.descripcion,
            this.stock = data.stock,
            console.log(data);
        })
        .catch((error) => {
            console.error("Error al enviar el formulario:", error);
        });
    },
   
    saveProducto() { // Para guardar una nueva pelicula o editar un pelicula existen
        const formData = new FormData();
        formData.append('nombre', this.nombre);
        formData.append('tipo', this.tipo);
        formData.append('precio', this.precio);
        formData.append('descripcion', this.descripcion);
        formData.append('stock', this.stock);
        if(this.id_producto){ //Si existe el id_producto deberia hacer un update
            this.sendFormData(`${this.api_server}/api/update_producto/${this.id_producto}/`, formData,'PUT');
        }else{// Si no creo el registro en el backend
            this.sendFormData(`${this.api_server}/api/create_product/`, formData,'POST');
        }
    },
    deleteProducto(id_producto) { // Eliminar pelicula del listado
        console.log('teasd');
        fetch(`${this.api_server}/api/delete_producto/${id_producto}/`, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((data) => {
            alert("Producto eliminado");
            //una vez eliminado listo todas las peliculas nuevamente.
            this.getProductos(`${this.api_server}/api/productos/`);
        })
        .catch((error) => {
            console.error("Error al eliminar producto", error);
        });
    },
  },
  created() {
    this.getProductos();
  },
}).mount("#app");
