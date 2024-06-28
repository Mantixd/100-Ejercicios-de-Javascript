/*
    INSERTAR STRING EN UNA POSICION ESPECIFICA
*/

function insertText(main_string, new_string, pos) {
    if(typeof(pos) == "undefined") {
        pos = 0;
    }

    if(typeof(new_string) == "undefined") {
        new_string = "";
    }

    let beforePos = main_string.slice(0, pos).trim();
    let afterPos = main_string.slice(pos).trim();

    return beforePos + " " + new_string + " " + afterPos;
}

console.log(insertText("Vamos a Javascript", "aprender", 8));