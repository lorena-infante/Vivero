const categorias = [
  {
    nombre: "Frutales",
    img: "./src/assets/images/ArbolCerezo-TalagardenViveroSantiago.jpg",
    href: "./src/components/frutales.html",
  },
  {
    nombre: "Plantas",
    img: "./src/assets/images/PlantasHortensia-TalagardenViveroSantiago.jpg",
    href: "./src/components/plantas.html",
  },
  {
    nombre: "Arbustos",
    img: "./src/assets/images/PlantasSansevieria-TalagardenViveroSantiago.jpg",
    href: "./src/components/arbustos.html",
  },
];

let categ_box = document.querySelector(".boxes_categ");
/* 
function renderCategories() {
  categorias.forEach((categ) => {
     categ_box.innerHTML += `<div class="col">
                    <a class="decoration-none" href="${categ.href}">
                        <h5 class="fw-bold text-center">${categ.nombre}</h5>
                        <img src="${categ.img}"
                        alt="Imagen de la categoría ${categ.nombre}"
                        class="img-slider">
                    </a>
                </div>
            `; 
  });
} */
