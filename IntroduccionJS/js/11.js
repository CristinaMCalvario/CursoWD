// Objetos - Destructuring

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true
}

/**
 * Forma anterior
 * const precioProducto = producto.precio;
 * const nombreProducto = producto.nombreProducto;
 * 
 * console.log(precioProducto);
 * console.log(nombreProducto);
 */

// Destructuring
const {precio, nombre}
