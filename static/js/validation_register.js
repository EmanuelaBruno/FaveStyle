//Funciones
//Mayoria de edad
function calculoEdad(fecha){
    var today = new Date();
    //Restamos los años
    años = today.getFullYear() - año;
    // Si no ha llegado su cumpleaños le restamos el año por cumplir
    if (fecha.getMonth() > (today.getMonth()) || fecha.getDay() > today.getDay())
        años--;
    return años;
}

//Email
function EmailValido(email){
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
        resp= true;
       } else {
        resp= false;
       }
    return resp;
}
//Validación de datos al registrarse
//Vincular con register.html



const validacion = (evento) => {
    evento.preventDefault();

    //seleccionando elementos
    const nombre = document.querySelector('firstname');
    const apellido = document.querySelector('lastname');
    let validation = true;

    if(nombre.value===''){
        validation = false;
        alert('Por favor, ingrese su nombre')
    }
    
    if(apellido.value===''){
        validation = false;
        alert('Por favor, ingrese su apellido');

    }
    if(validation){
        formRegister.submit();
    }else{ return false; }

    //validando fecha de nacimiento No me funciona bien !!!
    const fecha = document.querySelector('birthday');
    let valido = true;
    años = calculoEdad(fecha);
    if(años.value<18){
        valido =false;
        alert('Usted es menor de edad');

    }

    //validando email con funcion
    const correo = document.querySelector('emailname');
    let validado = true;
    email =EmailValido(correo);
    if(email.value===false){
        validado = false;
        alert('El correo electrónico ingresado no es válido');
    }



    //Validar contraseña (en este caso no estoy segura de como hacer)
   /*
   Creo que va depender del tipo de caracteres que aceptemos y
   supongo que dependera de la base de datos para constatar 
   si ya no esta registrado

   */
   

};

