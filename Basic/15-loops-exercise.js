// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los nÃºmeros del 1 al 20.

let i = 1
while (i <= 20) {
    console.log(i)
    i++
}


// 2. Crea un bucle que sume todos los nÃºmeros del 1 al 100 y muestre el resultado.
let suma = 0
for (let i = 1; i <= 100 ; i++){
    suma +=i;
    console.log(suma)
}


// 3. Crea un bucle que imprima todos los nÃºmeros pares entre 1 y 50.

for (let i = 2; i <= 50; i += 2) {  // Comienza en 2 y suma de 2 en 2
    console.log(i);
}


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.

let names = ["Brais", "Moure", "MoureDev", "Sara", "Pedro"]
for (let name of names) {
    console.log(name)
}

// 5. Escribe un bucle que cuente el nÃºmero de vocales en una cadena de texto.
let texto = "Esto es una prueba";
let veces = 0;
const vocales = "aeiouáéíóú";
for (let letra of texto.toLowerCase()) {
  if (vocales.includes(letra)) {
    veces++;
  }
}
console.log(veces);


// 6. Dado un array de nÃºmeros, usa un bucle para multiplicar todos los nÃºmeros y mostrar el producto.

let numerosArray = [8, 4, 9, 2, 6];
let resultado = 1; // ¡Importante! Si empiezas en 0, el producto siempre será 0

for (let numero of numerosArray) {
    resultado *= numero;
}

console.log(resultado); // Muestra el producto final

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

for (let i = 0; i <= 10; i++){
    console.log(`5 X ${i} = ${5*i}`)
}

// 8. Usa un bucle para invertir una cadena de texto.

let texto1 = "Hola mundo";
let invertida = "";

for (let i = texto1.length - 1; i >= 0; i--) {
    invertida += texto1[i];
}

console.log(invertida); // odnum aloH


// 9. Usa un bucle para generar los primeros 10 nÃºmeros de la secuencia de Fibonacci.
let a = 0;
let b = 1;

for (let i = 0; i < 10; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}


// 10. Dado un array de nÃºmeros, usa un bucle para crear un nuevo array que contenga solo los nÃºmeros mayores a 10.

let numArray = [4, 12, 9, 20, 15, 7]
let greaterThanTen = []
for (let num of numArray) {
    if (num > 10) {
        greaterThanTen.push(num)
    }
}
console.log(greaterThanTen)