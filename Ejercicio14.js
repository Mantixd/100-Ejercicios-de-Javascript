/* 
    Metodo Array filter() en JavasCript
*/

const palabras = ['descripcion', 'video', 'explicacion', 'destruction', 'tutorial'];

const result = words.filter((word) => word.length > 6);

const verduras = ["tomate", "cebolla", "Lechuga", "brocoli", "coliflor"];

function filtrarVerduras(arr, query) {
    return arr.filter((palabra) => palabra.includes(query.toLowerCase()));
}

console.log(filtrarVerduras(verduras, "le"));
console.log(filtrarVerduras(verduras, "o"));