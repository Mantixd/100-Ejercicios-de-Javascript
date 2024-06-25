/*
    CREAR UNA FUNCION QUE MULTIPLIQUE LOS
    NUMEROS DEL 1 AL 10 DE UN NUMERO ESPECIFICADO

    EJEMPLO DE ENTRADA:
    5

    EJEMPLO DE SALIDA:
    5x1 = 5, 5x2 = 10, 5x3 = 15, 5x4 = 20
    5x5 = 25, 5x6 = 30, 5x7 = 35, 5x8 = 40
    5x9 = 45, 5x10 = 50
*/
const prompt=require("prompt-sync")(); 

let numero = prompt("Escriba el numero a multiplicar: ");

for(let i = 1; i <= 10; i++) {
    let valorMultiplicacion = parseInt(numero) * i;
    let valorFinal = 
        numero + "x" + i + " = " + valorMultiplicacion;
    console.log(valorFinal);
}