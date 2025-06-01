// **Detector de Edad Mágica**  
// Pide al usuario su nombre y edad. Si la edad termina en 7 (por ejemplo, 17, 27, 37…), dile que es un año mágico. Si es menor de 13, que todavía no ha desbloqueado los poderes mágicos.

let edad_usuario = 27;
let edad_verificar_7 = edad_usuario % 10;

if(edad_usuario < 13) {
    console.log("Todavía no desbloqueaste los poderes mágicos🧙‍♂️");
} else if(edad_verificar_7 === 7) {
    console.log("Ya desbloqueaste los poderes mágicos y además es un año mágico");
} else {
    console.log("Ya tienes poderes");
}


//**Verificador de Palabras Secretas**  
//  El usuario debe introducir una palabra. Si contiene la letra "x" o "z", dile que ha encontrado una palabra peligrosa. Si tiene más de 10 letras, felicítalo por su gran léxico.

let palabra_secreta = "zapaterias";

if(palabra_secreta.includes("z") || palabra_secreta.includes("x")) {
    console.log("Felicidades, encontraste una palabra peligrosa");
    if(palabra_secreta.length === 10) {
        console.log("Además, tiene más de 10 letras, felicidades por tu gran léxico");
    } else {
        console.log("No llega a 10 letras, intenta encontrar una que sí tenga");
    }
} else {
    console.log("Esa palabra no tiene ni X ni Z, intentalo de nuevo");
}

/*Pide al usuario un PIN (preestablecido). Si coincide, permite al usuario "retirar" una cantidad de dinero. No tienes que hacer cuentas aún,🏧🏦 
solo mostrar mensajes que simulen el proceso. Usa condicionales para verificar si el PIN es correcto y si la cantidad ingresada es válida (número positivo mayor que cero).*/

// PIN preestablecido
const PIN_CORRECTO = "1234";
let pinIngresado = prompt("Por favor, ingresa tu PIN:");

// Verificar PIN
if (pinIngresado === PIN_CORRECTO) {
    // Si el PIN es correcto, pedir la cantidad a retirar
    let cantidad = parseFloat(prompt("Ingresa la cantidad a retirar (debe ser un número positivo mayor que cero):"));
    
    // Verificar si la cantidad es válida
    if (cantidad > 0) {
        console.log("Retiro exitoso. Puedes retirar $" + cantidad + ". Gracias por usar nuestro servicio.");
    } else {
        console.log("Cantidad inválida. Ingresa un número positivo mayor que cero.");
    }
} else {
    console.log("PIN incorrecto. Acceso denegado.");
}

// ** Repetidor de hechizos **
/*
Pide al usuario una palabra mágica y un número del 1 al 5. Repite esa palabra por pantalla tantas veces como el número. (Sin usar estructuras aún, simplemente mostrando cinco bloques de `if` si es necesario).*/

let palabraMagica = prompt("Ingresa una palabra mágica: ");
let numero = parseInt(prompt("Ingresa un número del 1 al 5: "));

if (numero === 1) {
    console.log(palabraMagica);
}
if (numero === 2) {
    console.log(palabraMagica);
    console.log(palabraMagica);
}
if (numero === 3) {
    console.log(palabraMagica);
    console.log(palabraMagica);
    console.log(palabraMagica);
}
if (numero === 4) {
    console.log(palabraMagica);
    console.log(palabraMagica);
    console.log(palabraMagica);
    console.log(palabraMagica);
}
if (numero === 5) {
    console.log(palabraMagica);
    console.log(palabraMagica);
    console.log(palabraMagica);
    console.log(palabraMagica);
    console.log(palabraMagica);
}

// **El juego del nombre en Código**
// El usuario escribe su nombre. Si el nombre comienza por vocal, dile que su nombre en código es "Alfa-[nombre]". Si comienza por consonante, su nombre en código es "Beta-[nombre]".

let nombre = prompt("Escribe tu nombre:");
let primeraLetra = nombre.charAt(0).toLowerCase();

if (primeraLetra === 'a' || primeraLetra === 'e' || primeraLetra === 'i' || primeraLetra === 'o' || primeraLetra === 'u') {
    console.log("Tu nombre en código es: Alfa-" + nombre);
} else {
    console.log("Tu nombre en código es: Beta-" + nombre);
}
