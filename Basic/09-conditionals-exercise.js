// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.

let name1 = "Paula"
if (name1 != undefined){
    console.log(`Te llamas ${name1}`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide con unos establecidos.

let usuario = 'pmargon';
let contrasena = 123;

if (usuario === 'pmargon' && contrasena === 123) {
    console.log("La contraseña y el usuario son correctos");
} else {
    console.log("El usuario y/o la contraseña no son correctos");
}

// 3. Verifica si un nÃºmero es positivo, negativo o cero e imprime un mensaje.

let num = -21

if (num === 0){
    console.log("El número es 0")
}else if (num > 0) {
    console.log("El número es positivo")
}else{
    console.log("El número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan.

let edad_persona = 20

if (edad_persona > 17){
    console.log("Puedes votar")
}else{
    console.log(`Aún no puedes votar, tienes que esperar ${ 18 - edad_persona} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
let category = age >= 18 ? "adulto" : "menor"
console.log(category)

// 6. Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".

let month = 3
if (month >= 3 && month <= 5) {
    console.log("Primavera")
} else if (month >= 6 && month <= 8) {
    console.log("Verano")
} else if (month >= 9 && month <= 11) {
    console.log("OtoÃ±o")
} else {
    console.log("Invierno")
}

// 7. Muestra el nÃºmero de dÃ­as que tiene un mes dependiendo de la variable del ejercicio anterior.
if (month === 2) {
    console.log("28 o 29 dÃ­as")
} else if ([4, 6, 9, 11].includes(month)) {
    console.log("30 dÃ­as")
} else {
    console.log("31 dÃ­as")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

let language = "es"
switch (language) {
    case "es":
        console.log("Hola")
        break
    case "en":
        console.log("Hello")
        break
    case "fr":
        console.log("Bonjour")
        break
    default:
        console.log("Lenguaje no soportado")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6.

switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("OtoÃ±o")
        break
    default:
        console.log("Invierno")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7.

switch (month) {
    case 2:
        console.log("28 o 29 dÃ­as")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 dÃ­as")
        break
    default:
        console.log("31 dÃ­as")
}