const numeros : number[] = [1,2,3,4,5]

//MAP
const numerosComoText: string[] = numeros.map(num => `El numero es: ${num}`)

const numerosMasUno: number[] = numeros.map(num => num + 1)


//FILTER
const numeroMayorQueTres: number[] = numeros.filter(num => num > 3)

// const elNumeroEsPar: boolean[] = numeros.filter(num => num%2)

//REDUCE

const sumaDeNumeros: number = numeros.reduce((acumulador,num) => acumulador + num, 0)

const restaDeNumeros: number = numeros.reduce((acumulador, num) => acumulador - num, 0)


// Declara un array de objetos usuarios, donde cada usuario tenga nombre: string y edad: number.
// Usa map() para crear un array solo con los nombres.
// Usa filter() para obtener los usuarios mayores de 25 años.
// Usa reduce() para sumar todas las edades.

interface UsuarioT {
    nombre: string;
    edad: number
}

const usuarios: UsuarioT[] = [
    { nombre: "Luis", edad: 28 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "Marta", edad: 19 }
];

const nombresDeUsuarios: string[] = usuarios.map(user => user.nombre)

const mayoresDe25: UsuarioT[] = usuarios.filter(user => user.edad > 25)

const sumaDeEdades: number = usuarios.reduce((total,usuario) => total + usuario.edad, 0)
