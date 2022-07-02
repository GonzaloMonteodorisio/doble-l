const array1 = [1, 2, 3];
array1.forEach(element => console.log(element));
// array1.forEach(function(element) {
//     console.log(element);
// });

const usuario = {nombre: 'Pepe', edad: 34, nacionalidad: 'Argentino'};

const {nombre, edad, nacionalidad} = usuario;
console.log(nombre, edad, nacionalidad);