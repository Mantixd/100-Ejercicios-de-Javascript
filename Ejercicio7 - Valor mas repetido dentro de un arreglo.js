/*
    OBTENER EL VALOR MAS REPETIDO 
    DENTRO DE UN ARREGLO
*/

const arr = [5,1,2,1,1,5,1,5,1,8,1];
var valor_actual = 0;
var mas_frecuente = 0;
var item;

for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
        if(arr[i] == arr[j]) {
            valor_actual++;
        }
        if(mas_frecuente < valor_actual) {
            mas_frecuente = valor_actual;
            item = arr[i];
        }
    }
    valor_actual = 0;
}

console.log(
    item + " (" + mas_frecuente + ") veces"
);