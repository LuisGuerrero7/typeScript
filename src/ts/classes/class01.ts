let message: string = "Hello World"
console.log(message)

let number: number = 23
console.log(number)

function sumar(a: number,b: number): number {
    return a + b
}

//TypeScript permite definir interfaces para estructurar mejor objetos y enums para valores predefinidos.
interface Usuario {
    nombre: string;
    edad: number;
    direccion: string;
    alive: boolean
}

let persona: Usuario = {
    nombre: "Luis", edad: 26, direccion: "Peru", alive: true
}

//Types React:
interface Props {
    nombre: string
}
// const Saludo: React.FC<Props> = ({ nombre }) => {
//     return <h1>Hola, {nombre}!</h1>;
//   };

//Define una interfaz para un objeto Auto con propiedades marca, modelo, año, y kilometraje.
// Define un tipo llamado EstadoMotor que pueda ser "encendido" o "apagado".
// Crea una función que reciba un Auto y un EstadoMotor e imprima su estado actual.

interface Auto {
    marca: string;
    modelo: string;
    ano: number;
    kilometraje: number;
    choques?: boolean;
    readonly precio: 4000
}

interface Auto{
    color: string
}

type EstadoMotor = "encendido" | "apagado"

function imprimirEstado (auto: Auto, estadoMotor: EstadoMotor): string{
    return `El auto ${auto.color} de marca ${auto.marca} y modelo ${auto.modelo} tiene un motor ${estadoMotor} actualmente`
}

const miAuto: Auto = {
    marca: "Mazda",
    modelo: "Mazda6",
    ano: 2013,
    kilometraje: 13000,
    color: "Azul electrico",
    precio: 4000
}

console.log(imprimirEstado(miAuto,"encendido"))

interface AutoDeportivo extends Auto{
    velocidadMaxima: number
}

type autoCompleto = Auto & EstadoMotor

//tarea

// Define una interfaz Persona con las propiedades nombre, edad y correo (opcional).
// Define un type Empleado que extienda Persona y agregue puesto: string.
// Crea una función que reciba un Empleado y retorne un mensaje con su información.
// Agrega una propiedad readonly id a Empleado y prueba qué pasa si intentas modificarla.

interface Persona {
    nombre: string;
    edad: number;
    correo?: string;
}

type Empleado = Persona & {
    puesto: string
    readonly id: 12345
}

function mensajeEmpleado (empleado: Empleado ): string {
    return `El empleado ${empleado.nombre} con puesto ${empleado.puesto} y id ${empleado.id} tiene ${empleado.edad} anos`
}