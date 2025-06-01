// 1. Crea un array que almacene cinco animales.

let arrayAnimales = ["🐶","😺","🐯","🐦","🐍"]
console.log(arrayAnimales)

// 2. AÃ±ade dos mÃ¡s. Uno al principio y otro al final.

arrayAnimales.unshift("🐘")
arrayAnimales.push("🙉")
console.log(arrayAnimales)

// 3. Elimina el que se encuentra en tercera posiciÃ³n.
arrayAnimales.splice(2,1)

// 4. Crea un set que almacene cinco libros.

let libreria = new Set(['Caminando entre dinosaurios',"50 Sombras de grey","Nacidos de la bruma","El hobbit","Acotar"])
console.log(libreria)

// 5. AÃ±ade dos mÃ¡s. Uno de ellos repetido.

libreria = libreria.add("Viaje al centro de la tierra")
libreria = libreria.add("Agora")
libreria = libreria.add("Agora")
console.log(libreria)

// 6. Elimina uno concreto a tu elecciÃ³n.

libreria = libreria.delete("agora")
console.log(libreria)

// 7. Crea un mapa que asocie el nÃºmero del mes a su nombre.

let monthsMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

// 8. Comprueba si el mes nÃºmero 5 existe en el map e imprime su valor.
if (monthsMap.has(5)) {
    console.log(monthsMap.get(5))
}



// 9. AÃ±ade al mapa una clave con un array que almacene los meses de verano.

monthsMap.set("summerMonths", ["Junio", "Julio", "Agosto"])
console.log(monthsMap.get("summerMonths"))

// 10. Crea un Array, transfÃ³rmalo a un Set y almacÃ©nalo en un Map.

let fruitsArray = ["manzana", "plÃ¡tano", "naranja", "manzana"]
console.log(fruitsArray)
let fruitsSet = new Set(fruitsArray)
console.log(fruitsSet)
let fruitsMap = new Map()
fruitsMap.set("fruits", fruitsSet)
console.log(fruitsMap)
console.log(fruitsMap.get("fruits"))