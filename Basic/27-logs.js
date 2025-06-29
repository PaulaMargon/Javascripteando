// Console

// log

console.log("Â¡Hola, JavaScript!")

// error

console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la base de datos: ", new Error("ConexiÃ³n fallida."))

// warn

console.warn("Este es un mensaje de advertencia.")

// info

console.info("Este es un mensaje de informaciÃ³n adicional.")

// table

let data = [
    ["Brais", 37],
    ["Sara", 21]
]

console.table(data)

data = [
    { name: "Brais", age: 37 },
    { name: "Sara", age: 21 }
]

console.table(data)

// group

console.group("Usuario:")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()

// time

console.time("Tiempo de ejecuciÃ³n 2")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecuciÃ³n 1")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecuciÃ³n 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecuciÃ³n 1")

// assert

let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.")

// count

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecuciÃ³n.")
}

funcA()

// clear

// console.clear()