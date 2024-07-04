/*
    Utilizar funcion map() en javascript
*/

const arrayNumeros = [2,6,8,4,16];
const arrayNombres = ["ricardo", "ernesto", "carlos"];
const arrayBoolean = [true,false,false,true,false];

const arrayNumerosX2 = arrayNumeros.map(x => x * 2);
const arrayNombresUpper = arrayNombres.map(n => n.toUpperCase());
const arrayBooleanEspejo = arrayBoolean.map(x => !x);

console.log(arrayBooleanEspejo);
