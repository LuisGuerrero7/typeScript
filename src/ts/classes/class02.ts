//GENERICOS

function ObtenerPrimerElemento (arr: string[]): string {
    return arr[0]
}

function GenericoObtenerPrimerElemento <T>(arr: T[]): T{
    return arr[0]
}

interface Caja <T> {
    contenido: T
}

const palabra : Caja<string> = {
    contenido: "Hola"
}

const numero1:  Caja<number> = {
    contenido: 23
}

const condicion: Caja<boolean> = {
    contenido: true
} 


//RESTRINGIR GENERICOS

function obtenerNombre <T extends {nombre: string}> (obj: T): string {
    return obj.nombre
}

const persona2 = {
    nombre: "Luis",
    edad: 30
}

console.log(obtenerNombre(persona2))

// Define una interfaz Caja<T> con una propiedad contenido: T.
// Crea una función genérica envolver<T> que reciba un valor y lo retorne dentro de un objeto { contenido: valor }.
// Prueba envolver() con distintos tipos (string, number, boolean).
// BONUS: Agrega una restricción con extends para que solo acepte tipos number | string.
// Sube tu código a GitHub y dime qué aprendiste.

interface Caja2 <T> {
    contenido: T;
    // fechaCreacion: Date
}

function envolver<T> (value: T) {
    return {contenido : value, fechaCreacion: new Date()}
}

const prueba1 : Caja2<string> = {
    contenido: "Hola"
}

const prueba2: Caja2<number> = {
    contenido: 23
}

const prueba3: Caja2<boolean> = {
    contenido: false
}

function envolverConRestriccion <T extends {contenido: string | number}> (obj: T): string | number{
    return obj.contenido
}
////
////

function envolverConRestriccion2<T extends string | number> (value: T): Caja2<T>{
    return {contenido: value}
}

// Modifica la función envolver para que tenga una propiedad adicional llamada fechaCreacion: Date dentro del objeto retornado.
// Prueba la función y verifica que fechaCreacion se asigne correctamente al crear una nueva Caja<T>.





























