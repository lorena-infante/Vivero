/*Stock es la cantidad de productos que hay en la tienda. La cantidad es el número de productos que el usuario añade al carrito*/
class Producto {
    constructor(nombre, precio, altura,
        img, descripcion, cuidados, 
        iluminacion, stock,temporada,
        id, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.altura = altura;
        this.img = img;
        this.descripcion = descripcion;
        this.cuidados = cuidados;
        this.iluminacion = iluminacion;
        this.stock = stock;
        this.temporada = temporada;
        this.id = id;
        this.cantidad = cantidad;
    }
}