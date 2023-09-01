const imgPortada            = document.querySelector(".img-portada");
const cuadroUnplugged       = document.querySelector(".cuadro-unplugged");
const botonIzquierda        = document.querySelector(".btn-carrousel-izquierda");
const botonDerecha          = document.querySelector(".btn-carrousel-derecha");
const contenidoCarrousel    = document.querySelector(".contenido");
const imagenesCarrousel     = document.querySelectorAll(".items");
const desplegableLogin      = document.querySelector('.contenedor-login');
const btnLogin              = document.querySelector('.btn-login');

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  imgPortada.style.top = scroll * 1 + "px";
  cuadroUnplugged.style.right = scroll * 1.2 + "px";
});
let contadorLogin = 0
btnLogin.addEventListener('click',()=>{
    if(contadorLogin === 0){
        desplegableLogin.style.transform = `translateX(0%)`
        contadorLogin++
        
    }else{
        desplegableLogin.style.transform = `translateX(100%)`
        contadorLogin = 0
    }
    
})

// function moverDerecha() {
//     if (counter >= contenidoCarrousel.childElementCount - 1) {
//         counter = 0;
//     } else {
//         counter++;
//     }
//     acumulador = counter * widthImg; // Actualiza acumulador
//     contenidoCarrousel.style.transform = `translateX(-${acumulador}%)`;
//     console.log(acumulador);
// }

// function moverIzquierda() {
//     counter--;
//     if (counter < 0) {
//         counter = contenidoCarrousel.childElementCount - 1;
//     }
//     acumulador = counter * widthImg; // Actualiza acumulador
//     contenidoCarrousel.style.transform = `translateX(-${acumulador}%)`;
//     console.log(counter);
// }

let counter = 0;
let widthImg = 100 / contenidoCarrousel.childElementCount;


function moverDerecha() {
  if (counter > contenidoCarrousel.childElementCount - 2) {
    counter = 0;
   
  } else {
    counter++;
  }
  contenidoCarrousel.style.transform = `translateX(-${counter * widthImg}%)`;
  
}

function moverIzquierda() {
  counter--;
  if (counter < 0) {
    counter = 2;
    contenidoCarrousel.style.transform = `translateX(-${counter * widthImg}%)`;
    
  }
  contenidoCarrousel.style.transform = `translateX(-${counter * widthImg}%)`;
}

botonIzquierda.addEventListener("click", moverIzquierda);
botonDerecha.addEventListener("click", moverDerecha);
