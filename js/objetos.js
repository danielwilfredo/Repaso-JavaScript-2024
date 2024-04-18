

//objetos con propiedades y su valor, separados por coma

const producto={
    nombre:"Tablet",
    precio:300,
    disponible:true
}


//para acceder al objeto, ocupados el nombre del objeto seguidod de un punto

//console.log(producto.precio)

//destructuring destructurando de una estructura

//const {nombre, precio, disponible}=producto

//console.log(nombre)

//object literal enhacement

const autenticado=true
const usuario="Wil"

const nuevoObjeto={
    autenticado:autenticado,
    usuario:usuario
}

//si ambas variables se llaman iguales se pueden escribir de la
//siguiente forma

/*
const nuevoObjeto={
    autenticado,
    usuario
} */

console.table(nuevoObjeto)