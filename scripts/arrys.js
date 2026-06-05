// Listas con las rutas de tus imágenes
const imagenesPrincipales = [
  "./public/5.png",
  "./public/33.png",
  "./public/44.png",
  "./public/55.png",
  "./public/66.png",
  "./public/22.png",
  "./public/Sin título1.png",
  "./public/4.png"
];

const imagenesAdicionales = [
  "./public/22.png",
  "./public/Sin título1.png",
  "./public/3.png",
  "./public/4.png",
  "./public/5.png",
  "./public/66.png",
  "./public/55.png"
];

// Referencias a los contenedores HTML
const contenedorPrincipales = document.getElementById("habilidades-principales");
const contenedorAdicionales = document.getElementById("habilidades-adicionales");

// Bucle para armar las tarjetas cuadradas (Habilidades principales)
let htmlPrincipales = "";
for (let i = 0; i < imagenesPrincipales.length; i++) {
  htmlPrincipales += `
    <div class="bg-[#111827] dark:bg-white aspect-square rounded-2xl flex items-center justify-center border border-white/5 dark:border-gray-200 dark:shadow-md transition-all duration-300">
      <img src="${imagenesPrincipales[i]}" alt="Habilidad" class="w-20 h-20">
    </div>
  `;
}
contenedorPrincipales.innerHTML = htmlPrincipales;

// Bucle para las imágenes pequeñas (Habilidades adicionales)
let htmlAdicionales = "";
for (let i = 0; i < imagenesAdicionales.length; i++) {
  htmlAdicionales += `
    <img src="${imagenesAdicionales[i]}" alt="Habilidad Adicional" class="w-8 h-8">
  `;
}
contenedorAdicionales.innerHTML = htmlAdicionales;



let boton = document.querySelector("#btndark")
let documento = document.querySelector("html")
// console.log(boton)
console.log(documento)

function cambiarModo (){
    documento.classList.toggle("dark")
}
boton.addEventListener("click", cambiarModo)

