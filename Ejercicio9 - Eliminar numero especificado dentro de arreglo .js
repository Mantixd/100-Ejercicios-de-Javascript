/*
    BUSCAR Y ELIMINAR NUMERO 
    DENTRO DE UN ARREGLO
*/
const prompt=require("prompt-sync")(); 

var arr = [5,6,3,7,19,35,3,6];

function buscarYEliminar() {
    let buscar = prompt(
        "Especifique el numero a eliminar: "
    );

    if(buscar != "") {
        if(!isNaN(buscar)) {
            buscar = parseInt(buscar);
            let found = arr.indexOf(buscar);
            if(found > -1) {
                arr.splice(found, 1);
                console.log(
                    "Valor encontrado: " + buscar +
                    ", Valores restantes: " + arr.join(",")
                );
                buscarYEliminar();
            } else {
                console.log(
                    "Valor no encontrado"
                );
                buscarYEliminar();
            }
        } else {
            console.log(
                "Especifique un numero"
            );
            buscarYEliminar();
        }
    } else {
        console.log(
            "Especifique un valor"
        );
        buscarYEliminar();
    }
}
buscarYEliminar();