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