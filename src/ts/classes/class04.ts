interface Usuario4  {
    nombre:string;
    edad:number;
    direccion:string;
    activo: boolean

}

//PARTIAL: 
// PARA ACTUALIZAR UN OBJETO PARCIALMENTE
const usuario4: Partial<Usuario4> = {
    nombre: "Luis"
}


//PICK:
//Permite elegir solo algunas propiedades de un tipo o interfaz.

type UsuarioBasico4 = Pick<Usuario4, "nombre" | "edad">
const usuarioPick: UsuarioBasico4 = {nombre: "Luis", edad: 12}

//OMIT
//Elimina ciertas propiedades de un tipo o interfaz.
type UsuarioSinEdad= Omit<Usuario4, "edad">
// const usuario4Edad: UsuarioSinEdad = {...}


//RECORD
//Crea un objeto donde todas las claves (K) tienen un tipo específico (T).
type Roles = "admin" | "user" | "guest"
const permisos: Record<Roles, boolean> = {
    admin: true,
    user: true,
    guest: false
}

// Declara la interfaz Producto con propiedades nombre, precio, enStock y categoria.
// Usa Partial<Producto> para crear un producto con solo el nombre.
// Usa Pick<Producto> para obtener solo nombre y precio.
// Usa Omit<Producto> para excluir categoria.
// Usa Record<string, Producto> para crear un inventario donde las claves sean el nombre del producto.

interface Producto {
    nombre: string;
    precio: number;
    enStock: boolean;
    categoria: string
}

const productoTarea: Partial<Producto> = {
    nombre: "Tuerca"
}

type productoPick= Pick<Producto, "nombre" | "precio"> 

type productoSinCategoria = Omit<Producto, "categoria">

type nombreProducto = "nombre"
const inventario : Record<string, Producto> = {
    "Tuerca 1" : {nombre: "Tuerca 1", precio: 0.1 , enStock: true, categoria: "Tuercas"}
}



//ERRORES
function division(a:number, b:number){
    if(b===0){
        throw new Error("No se puede dividir entre 0")
    }
    return a/b
}

try { 
    console.log(division(2,0))
} catch(error){
    console.log("Error: ", error)
}

// Crea un archivo manejoErrores.ts en GitHub.
// Escribe una función buscarProducto que reciba un nombre y busque el producto en el inventario (usando el Record anterior).
// Si el producto no existe, lanza un error con throw new Error("Producto no encontrado").
// Usa try...catch para llamar a la función y manejar posibles errores.
function buscarProducto(nombre: string): string {
    let producto = inventario[nombre]
    if(!producto){
        throw new Error("Producto no encontrado")
    }
    return `Producto encontrado: ${producto.nombre}, Precio: ${producto.precio}`
}


try {
    console.log(buscarProducto("Tuerca 1")); // ✅ Producto encontrado
    console.log(buscarProducto("Arandela")); // ❌ Error: Producto no encontrado
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Error encontrado:", error.message);
    }
}