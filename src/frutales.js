//Datos a persistir
const categorias = {
    frutales: {
        almendro: {
            nombre_prod: "Almendro",
            precio_prod: 13000,
            altura: '1.5 mts',
            img: '/src/assets/images/ArbolAlmendro-TalagardenViveroSantiago.jpg',
            descripcion: 'Arbol que puede llegar a medir 5 mts de alto, Una floración de las mas bonitas en primavera y da frutos en gran magnitud.',
            cuidados: 'Requiere Sol o SemiSombra, No necesita tanta agua y resiste heladas no mayores de -5 grados.',
            iluminacion: [1, 3],
            stock: 10,
            temporada: "Otoño/Primavera"
        },

        arandano: {
            nombre_prod: "Arándano",
            precio_prod: 18000,
            altura: '60 cms',
            img: '/src/assets/images/ArbolArandanos-TalagardenViveroSantiago.jpg',
            descripcion: 'Arbusto que puede crecer en macetero o en tierra directamente, puede dar muchos frutos, sus hojas cambian de color en invierno y le dará vida a tu jardín en ese tiempo.',
            cuidados: 'Requiere SemiSombra para darse bien, Requiere tierra ligeramente acida y resiste las heladas no mayores a -5 grados',
            iluminacion: [3],
            stock: 10,
            temporada: "Otoño/Primavera"
        },
        caqui: {
            nombre_prod: "Caqui",
            precio_prod: 10000,
            altura: '1.2 mts',
            img: '/src/assets/images/ArbolCaqui-TalagardenViveroSantiago.jpg',
            descripcion: 'Árbol que puede llegar a medir 4 mts, se caracteriza por dar frutos en otoño cuando ningun árbol da frutos, al llegar el otoño pierde las hojas pero sus frutos quedan en el arbol dándole un toque especial a nuestro jardín.',
            cuidados: 'Requiere semiSombra y humedad para darse correctamente.',
            iluminacion: [3],
            stock: 10,
            temporada: "Otoño"
        },
        cerezo: {
            nombre_prod: "Cerezo",
            precio_prod: 19000,
            altura: '1.5 mts',
            img: '/src/assets/images/ArbolCerezo-TalagardenViveroSantiago.jpg',
            descripcion: 'Árbol que puede llegar a medir 4 mts de altura, su floración es muy linda.',
            cuidados: 'Requiere semiSombra y humedad para darse correctamente.',
            iluminacion: [3],
            stock: 10,
            temporada: "Primavera"
        },
        ciruelo: {
            nombre_prod: "Ciruelo",
            precio_prod: 12000,
            altura: '1.8 mts',
            img: '/src/assets/images/ArbolCiruelo-TalagardenViveroSantiago.jpg',
            descripcion: 'Árbol que puede llegar a medir 5 mts de alto. Una floración blanca en primavera y muchos frutos asegurados en verano.',
            cuidados: 'Requiere sol o semiSombra. No necesita tanta agua y resiste heladas no mayores de -5 grados.',
            iluminacion: [1, 3],
            stock: 10,
            temporada: "Primavera"
        },

        damasco: {
            nombre_prod: "Damasco",
            precio_prod: 10000,
            altura: '1.5 mts',
            img: '/src/assets/images/ArbolDamasco-TalagardenViveroSantiago.jpg',
            descripcion: 'Árbol que puede llegar a medir 5 mts de alto. Una floración rosada en primavera y muchos frutos asegurados en verano.',
            cuidados: 'Requiere sol o semiSombra. No necesita tanta agua y resiste heladas no menores de -5 grados.',
            iluminacion: [1, 3],
            stock: 10,
            temporada: "Primavera"
        }
    }
};

function crearProducto(producto) {
    const newProd = new Producto(producto.nombre_prod, producto.precio_prod, producto.altura, producto.img, producto.descripcion, producto.cuidados, producto.iluminacion, producto.stock, producto.temporada);
    return newProd;
}

const productos = [
    crearProducto(categorias.frutales.almendro),
    crearProducto(categorias.frutales.arandano),
    crearProducto(categorias.frutales.caqui),
    crearProducto(categorias.frutales.cerezo),
    crearProducto(categorias.frutales.ciruelo),
    crearProducto(categorias.frutales.damasco)
];

// Para usar el LS como persistencia invoco esta función sólo una vez. La dejo comentada para mostrar progreso

// const guardarProductosEnLS = localStorage.setItem('producto',JSON.stringify(productos));

// Variables / Constantes globales
const objProductos = JSON.parse(localStorage.getItem('producto'));
let contenedorProductos = document.getElementById('contenedor_productos');


function mostrarProductos() {
    contenedorProductos.innerHTML = ``;
    objProductos.forEach((objProducto) => {
        contenedorProductos.innerHTML = contenedorProductos.innerHTML +
            `<div class="col">
                <div class="card card_prod">
                    <img src="${objProducto.img}" class="card-img-top" alt="Foto de un ${objProducto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${objProducto.nombre}</h5>
                        <p class="card-text text-success">$${objProducto.precio}</p>
                        <button class="btn btn-success btn-primary_prod">Añadir al Carrito</button>
                    </div>
                </div>
            </div>`
    });
}

mostrarProductos();