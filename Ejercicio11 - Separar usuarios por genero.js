/*
    SEPARAR USUARIOS POR GENERO
    E IMPRIMIR LOS NOMBRES EN PANTALLA
*/

var arrayUsuarios = [
    {
        id: 1,
        nombre: "Ricardo",
        genero: "H"
    },
    {
        id: 2,
        nombre: "Carolina",
        genero: "M"
    },
    {
        id: 3,
        nombre: "Daniela",
        genero: "M"
    },
    {
        id: 4,
        nombre: "Ernesto",
        genero: "H"
    },
    {
        id: 5,
        nombre: "Carlos",
        genero: "H"
    },
    {
        id: 6,
        nombre: "Maria",
        genero: "M"
    }
];

function imprimirNombres() {
    let arrHombres = [];
    let arrMujeres = [];

    arrayUsuarios.forEach(function(usuario) {
        if(usuario.genero == "H") {
            arrHombres.push(usuario.nombre);
        } else {
            arrMujeres.push(usuario.nombre);
        }
    });

    return "Hombres: " + arrHombres.join(",") + "\nMujeres: " + arrMujeres.join(",");
}

console.log(imprimirNombres());
