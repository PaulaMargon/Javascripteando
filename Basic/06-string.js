// Strings (cadenas de texto)

// ConcatenaciÃ³n

let myName = "Brais"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// MÃ©todos comunes

console.log(greeting.toUpperCase()) // MayÃºsculas
console.log(greeting.toLowerCase()) // MinÃºsculas
console.log(greeting.indexOf("Hola")) // Ãndice
console.log(greeting.indexOf("Brais"))
console.log(greeting.indexOf("MoureDev"))
console.log(greeting.includes("Hola")) // Incluye
console.log(greeting.includes("Brais"))
console.log(greeting.includes("MoureDev"))
console.log(greeting.slice(0, 10)) // SecciÃ³n
console.log(greeting.replace("Brais", "MoureDev")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias lÃ­neas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// InterpolaciÃ³n de valores
let email = "braismoure@mouredev.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)