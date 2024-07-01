/* JUEGO ADIVINAR LA PALABRA 
   EN JAVASCRIPT 
*/
const prompt=require("prompt-sync")(); 

class Juego {
    palabras = ["javascript", "python", "nodejs", "csharp", "angular"];
    vidas = 5;
    palabraRandom = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    palabraCount = this.palabraRandom.length;
    lineas = Array(this.palabraCount).fill("_");
    cntLetrasEncontradas = 0;

    get jugar() {
        return this.iniciarJuego();
    }

    iniciarJuego() {       
        console.log(this.lineas.join(" "));
        if(this.cntLetrasEncontradas == this.palabraCount) {
            return this.youWin();
        } else {
            if(this.vidas > 0) {
                const letra = prompt("Escribe una letra a buscar: ");
                this.buscarLetra(letra);
            } else {
                return this.gameOver();
            }
        }
    }

    buscarLetra(letra) {
        if(letra == "") {
            console.log("El valor no puede ser vacio");
        } else if(letra.length > 1) {
            console.log("El valor debe de ser solo una letra");
        } else if(this.lineas.indexOf(letra) > -1) {
            console.log("Esta letra ya fue encontrada anteriormente");
        } else {
            const palabraSplit = this.palabraRandom.split("");
            let letrasEncontradas = 0;
            palabraSplit.forEach((letraPalabra, index) => {
                if(letra.toLowerCase() == letraPalabra) {
                    this.pintarLetra(letra, index);
                    letrasEncontradas++;
                }
            });

            if(letrasEncontradas == 0) {
                this.restarVida();
            }
        }
        return this.iniciarJuego();
    }

    pintarLetra(letra, posicion) {
        this.lineas[posicion] = letra.toLowerCase();
        this.cntLetrasEncontradas++;
    }

    restarVida() {
        this.vidas -= 1;
        console.log("Letra no encontrada, te quedan " + this.vidas + " vidas");
    }

    gameOver() {
        console.log("Se acabo el juego, no tienes mas vidas!");
    }

    youWin() {
        console.log("Palabra " + this.palabraRandom + " encontrada, has ganado!");
    }
}

const juego = new Juego();
juego.jugar;