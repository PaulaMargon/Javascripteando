// Contraseña con Nivel de Seguridad
// Pide una contraseña y evalúa:
// Si tiene menos de 6 caracteres: “Muy débil”.
// Si tiene más de 6 y contiene al menos un número: “Segura”.
// Si contiene una exclamación (!) y una letra mayúscula: “Fortaleza digital activada”.


const contraseña = prompt("Introduce tu contraseña:");

// Verifica si hay al menos un número
const tieneNumero = contraseña.split('').some(char => !isNaN(char) && char !== ' ');

// Verifica si hay al menos una mayúscula
const tieneMayuscula = contraseña.split('').some(char => char === char.toUpperCase() && char !== char.toLowerCase());

// Verifica si hay exclamación
const tieneExclamacion = contraseña.includes('!');

// Evaluación de la contraseña
if (contraseña.length < 6) {
  console.log("Muy débil");
} else if (contraseña.length > 6 && tieneNumero) {
  console.log("Segura");
}

if (tieneExclamacion && tieneMayuscula) {
  console.log("Fortaleza digital activada");
}

// EJERCICIO 2

//Simulador de Clima
//Pide al usuario una temperatura en grados. Si es mayor a 30, responde "Hace calor 🥵", si está entre 15 y 30, "Clima agradable 😌",
//  y si es menor de 15, "Saca la manta ❄️".

let temperatura = 14

if(temperatura > 30){
    console.log("Hace calor🥵")
}else if(temperatura >= 15 && temperatura < 30){
    console.log("Clima agradable😌")
}else{
    console.log("Saca la manta❄️")
}

// ** Sistema de acceso para un club secreto **
// El usuario tiene que introducir una frase secreta. Si la frase contiene la palabra “draco” y tiene exactamente 14 caracteres, accede. Si falla, rechaza el acceso con una frase divertida.

let frase_secreta = "draco123456789"

if (frase_secreta.includes("draco") && frase_secreta.length === 14){
  console.log("Acceso concedido, bienvenido al club secreto🐲")
}else {
  console.log("Acceso denegado ¿Te has confundido de frase o de club? :P")
}

// Reto de Palabra Espejo
// El usuario introduce dos palabras. Si son iguales al derecho y al revés (ej: "reconocer"), felicítalo por encontrar un palíndromo. Si no, dile que lo intente de nuevo con más cuidado.

const fraseUsuario = "oso"

if (fraseUsuario === fraseUsuario.split("").reverse().join("")) {
  console.log("¡Felicidades! ¡Has encontrado un palíndromo!");
} else {
  console.log("¡Inténtalo de nuevo con más cuidado!");
}

// ** Simulador de selector de clase de RPG**
// Pide al usuario su nombre y una clase entre "guerrero", "mago" o "ladrón". Según la clase, dale un mensaje personalizado y un objeto inicial:
// Guerrero: Espada oxidada
// Mago: Bastón de sabiduría
// Ladrón: Cuchillo de sombra

let nombre_usuario = "Pedro"
let clase_rpg = "mago"

if (clase_rpg === "guerrero"){
  console.log(`Bienvenido ${nombre_usuario} tu clase es ${clase_rpg} y recibes una Espada oxidada para comenzar🤺`)
} else if ( clase_rpg === "mago" ){
  console.log(`Bienvenido ${nombre_usuario} tu clase es ${clase_rpg} y recibes un bastón de sabiduría🧙‍♂️`)
} else {
  console.log(`Bienvenido ${nombre_usuario} tu clase es ${clase_rpg} y un cuchillo de sombra🥷`)

}