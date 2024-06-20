// Objetos

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 3000,
    disponible: true
}

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg'

//Eliminar propiedades
delete producto.disponible;


console.log(producto);

//acceder a una propiedad
//console.log(producto.precio);
