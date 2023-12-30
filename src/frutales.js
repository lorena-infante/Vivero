//Datos a persistir
let data_arr = [];
let spinner = document.getElementById("spinner");

spinner.innerHTML = `<div class="spinner-border text-success" role="status">
<span class="visually-hidden">Loading...</span>
</div>`;

//debugger;
//Test con fetch
/* fetch("/src/data.json")
  .then((res) => {
    if (!res.ok) {
      //console.log('error');
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    data_arr.push(data);
    data_arr.forEach((item) => {
      for (prop in item) {
        console.log(prop, item[prop]);
      }
    });
  })
  .catch((err) => { console.error(err)})
  .finally(() => {
    spinner.innerHTML =``;
    console.log('terminó la promesa');
}); */

//Async/Await
/* const getProds = async () => {
  let res = await fetch("/src/data.json");
  try {
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    let data = await res.json();
    console.log(data);
    data_arr.push(data);
    data_arr.forEach((item) => {
      for (prop in item) {
        console.log(prop, item[prop]);
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    spinner.innerHTML = ``;
    console.log("terminó la promesa");
  }
};
getProds(); */

const categorias = {
  frutales: {
    almendro: {
      nombre_prod: "Almendro",
      precio_prod: 13000,
      altura: "1.5 mts",
      img: "/src/assets/images/ArbolAlmendro-TalagardenViveroSantiago.jpg",
      descripcion:
        "Arbol que puede llegar a medir 5 mts de alto, Una floración de las mas bonitas en primavera y da frutos en gran magnitud.",
      cuidados:
        "Requiere Sol o SemiSombra, No necesita tanta agua y resiste heladas no mayores de -5 grados.",
      iluminacion: [1, 3],
      stock: 10,
      temporada: "Otoño/Primavera",
      id: "fru_alm",
      cantidad: 0,
    },

    arandano: {
      nombre_prod: "Arándano",
      precio_prod: 18000,
      altura: "60 cms",
      img: "/src/assets/images/ArbolArandanos-TalagardenViveroSantiago.jpg",
      descripcion:
        "Arbusto que puede crecer en macetero o en tierra directamente, puede dar muchos frutos, sus hojas cambian de color en invierno y le dará vida a tu jardín en ese tiempo.",
      cuidados:
        "Requiere SemiSombra para darse bien, Requiere tierra ligeramente acida y resiste las heladas no mayores a -5 grados",
      iluminacion: [3],
      stock: 10,
      temporada: "Otoño/Primavera",
      id: "fru_aran",
      cantidad: 0,
    },
    caqui: {
      nombre_prod: "Caqui",
      precio_prod: 10000,
      altura: "1.2 mts",
      img: "/src/assets/images/ArbolCaqui-TalagardenViveroSantiago.jpg",
      descripcion:
        "Árbol que puede llegar a medir 4 mts, se caracteriza por dar frutos en otoño cuando ningun árbol da frutos, al llegar el otoño pierde las hojas pero sus frutos quedan en el arbol dándole un toque especial a nuestro jardín.",
      cuidados: "Requiere semiSombra y humedad para darse correctamente.",
      iluminacion: [3],
      stock: 10,
      temporada: "Otoño",
      id: "fru_caq",
      cantidad: 0,
    },
    cerezo: {
      nombre_prod: "Cerezo",
      precio_prod: 19000,
      altura: "1.5 mts",
      img: "/src/assets/images/ArbolCerezo-TalagardenViveroSantiago.jpg",
      descripcion:
        "Árbol que puede llegar a medir 4 mts de altura, su floración es muy linda.",
      cuidados: "Requiere semiSombra y humedad para darse correctamente.",
      iluminacion: [3],
      stock: 10,
      temporada: "Primavera",
      id: "fru_cer",
      cantidad: 0,
    },
    ciruelo: {
      nombre_prod: "Ciruelo",
      precio_prod: 12000,
      altura: "1.8 mts",
      img: "/src/assets/images/ArbolCiruelo-TalagardenViveroSantiago.jpg",
      descripcion:
        "Árbol que puede llegar a medir 5 mts de alto. Una floración blanca en primavera y muchos frutos asegurados en verano.",
      cuidados:
        "Requiere sol o semiSombra. No necesita tanta agua y resiste heladas no mayores de -5 grados.",
      iluminacion: [1, 3],
      stock: 10,
      temporada: "Primavera",
      id: "fru_ciru",
      cantidad: 0,
    },

    damasco: {
      nombre_prod: "Damasco",
      precio_prod: 10000,
      altura: "1.5 mts",
      img: "/src/assets/images/ArbolDamasco-TalagardenViveroSantiago.jpg",
      descripcion:
        "Árbol que puede llegar a medir 5 mts de alto. Una floración rosada en primavera y muchos frutos asegurados en verano.",
      cuidados:
        "Requiere sol o semiSombra. No necesita tanta agua y resiste heladas no menores de -5 grados.",
      iluminacion: [1, 3],
      stock: 10,
      temporada: "Primavera",
      id: "fru_dam",
      cantidad: 0,
    },
  },
};

function crearProducto(producto) {
  const newProd = new Producto(
    producto.nombre_prod,
    producto.precio_prod,
    producto.altura,
    producto.img,
    producto.descripcion,
    producto.cuidados,
    producto.iluminacion,
    producto.stock,
    producto.temporada,
    producto.id,
    producto.cantidad
  );
  return newProd;
}

const productos = [
  crearProducto(categorias.frutales.almendro),
  crearProducto(categorias.frutales.arandano),
  crearProducto(categorias.frutales.caqui),
  crearProducto(categorias.frutales.cerezo),
  crearProducto(categorias.frutales.ciruelo),
  crearProducto(categorias.frutales.damasco),
];

// Para usar el LS como persistencia invoco esta función sólo una vez. La dejo comentada para mostrar progreso

//const guardarProductosEnLS = localStorage.setItem('producto',JSON.stringify(productos));

// Variables / Constantes globales
const objProductos = JSON.parse(localStorage.getItem("producto"));
let contenedorProductos = document.getElementById("contenedor_productos");

function mostrarProductos() {
    mostrarCantidadProd();
  contenedorProductos.innerHTML = ``;
  objProductos.forEach((objProducto) => {
    contenedorProductos.innerHTML =
      contenedorProductos.innerHTML +
      `<div id="${objProducto.id}" class="col">
                <div class="card card_prod">
                    <img src="${objProducto.img}" class="card-img-top" alt="Foto de un ${objProducto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${objProducto.nombre}</h5>
                        <p class="card-text text-success">$${objProducto.precio}</p>
                        <button id="${objProducto.id}" class="btn btn-success btn-primary_prod add_cart" data-bs-toggle="modal" data-bs-target="#carritoModal">Añadir al Carrito</button>
                    </div>
                </div>
            </div>`;
  });
}

mostrarProductos();

function mostrarCantidadProd(){
    let prodsPorPag = objProductos.length;
    let cantidadProdsTxt = document.getElementById('quantity');
    cantidadProdsTxt.innerHTML = `${prodsPorPag} Productos`
}


//Listener para obtener el id del btn
contenedorProductos.addEventListener("click", (e) => {
  if (e.target.classList.contains("add_cart")) {
    const botonCarrito = e.target;
    agregarCarrito(botonCarrito.id);
  }
});

let carrito;
getCarritoLS = JSON.parse(localStorage.getItem("carrito_LS"));
getCarritoLS !== null ? (carrito = getCarritoLS) : (carrito = []);

function agregarCarrito(id) {
  let productoEnCarrito = carrito.find((producto) => producto.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    let productoAgregado = productos.find((producto) => producto.id === id);
    productoAgregado.cantidad = 1;
    carrito.push(productoAgregado);
  }

  //guarda en LS el elemento del carrito seleccionado
  localStorage.setItem("carrito_LS", JSON.stringify(carrito));
  getCarritoLS = JSON.parse(localStorage.getItem("carrito_LS"));

  dibujarCarrito();
}

let btnCarritoIcon = document.getElementById("btn-carrito-icon");
btnCarritoIcon.addEventListener("click", dibujarCarrito());

function dibujarCarrito() {
  calcSubtotal();
  let modalContenedor = document.getElementById("cart-container");
  if (carrito.length === 0) {
    modalContenedor.innerHTML = `  <div class="row"> 
                <div class="col"> 
                    <p class="p-5 mb-0 fw-bold text-center">
                        El carrito está vacío
                    </p>
                </div>       
            </div>`;
  } else {
    modalContenedor.innerHTML = ``;
  }

  carrito.forEach((elemento, index) => {
    modalContenedor.innerHTML =
      modalContenedor.innerHTML +
      `
            <div class="row row-producto">
                <div class="card mb-3 p-2" style="max-width: 540px;">
                    <div class="row g-0 align-items-center">
                        <div class="col-12 col-md-4">
                            <img src="${elemento.img}"
                                class="img-fluid rounded-start img-cover"
                                alt="Imagen de ${elemento.nombre}">
                        </div>
                        <div class="col-6">
                            <div class="card-body">
                                <h5 class="card-title fw-bold mb-1">${elemento.nombre}</h5>
                                <p id="precio_modal" class="card-text text-success mb-1">$${elemento.precio}</p>
                                <p class="card-text mb-1 h6">Cantidad: ${elemento.cantidad}</p>
                            </div>
                        </div>
                        <div
                            class="col-6 col-md-2 align-items-center justify-content-center d-flex delete-btn-container">
                            <button id="${index}-${elemento.id}" class="btn btn-outline-danger delete-btn">
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
  });
}

function calcSubtotal() {
  let subTotalContainer = document.getElementById("subtotal_modal");
  let subtotal = 0;
  if (getCarritoLS !== null) {
    arrSubtotales = getCarritoLS.map((prod) => prod.precio * prod.cantidad);
    const initValue = 0;
    subtotal = arrSubtotales.reduce(function (result, item) {
      return result + item;
    }, initValue);

    subTotalContainer.innerHTML = `
        <div class="col">
            <h5 class="fw-bold">Subtotal</h5>
        </div>
        <div class="col fw-bold">$${subtotal}</div>
        `;
  } else {
    subTotalContainer.innerHTML = `
        <div class="col">
            <h5 class="fw-bold">Subtotal</h5>
        </div>
        <div class="col fw-bold">$${subtotal}</div>
        `;
  }
}
