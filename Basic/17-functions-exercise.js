// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una funciÃ³n que reciba dos nÃºmeros y devuelva su suma.

function sumaNum(sum1,sum2){
    console.log(sum1+sum2)
}
sumaNum(2,2)
// 2. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva el mayor de ellos.

function arraymay() {
    let arraynum = [1, 7, 9, 20, 56, 23, 6, 44];
    console.log(Math.max(...arraynum));
}
arraymay(); // Imprime: 56


// 3. Crea una funciÃ³n que reciba un string y devuelva el nÃºmero de vocales que contiene.
let arrayletras = ["chocolate"];
let veces = 0;
const vocales = "aeiouáéíóú";

function arraystring(arrayletras) {
    for (let palabra of arrayletras) {
        for (let letra of palabra.toLowerCase()) {
            if (vocales.includes(letra)) {
                veces++;
            }
        }
    }
}

arraystring(arrayletras);
console.log(veces); // Imprime: 4

// 4. Crea una funciÃ³n que reciba un array de strings y devuelva un nuevo array con las strings en mayÃºsculas.

let arrayenmayus = ["ejemplo de prueba"];
function arraymayus(arrayenmayus){
    for (let palabra of arrayenmayus) {
        console.log(palabra.toUpperCase());
    }
}
arraymayus(arrayenmayus);
// Imprime: EJEMPLO DE PRUEBA



// 5. Crea una funciÃ³n que reciba un nÃºmero y devuelva true si es primo, y false en caso contrario.

function esPrimo(numero) {
    if (numero < 2) {
        return false;
    } else if (numero === 2) {
        return true;
    } else if (numero % 2 === 0) {
        return false;
    } else {
        for (let i = 3; i <= Math.sqrt(numero); i += 2) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }
}


// 6. Crea una funciÃ³n que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

// 7. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva la suma de todos los nÃºmeros pares.

// 8. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva un nuevo array con cada nÃºmero elevado al cuadrado.

// 9. Crea una funciÃ³n que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

// 10. Crea una funciÃ³n que calcule el factorial de un nÃºmero dado.