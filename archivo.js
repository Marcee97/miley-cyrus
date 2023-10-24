const imgPortada            = document.querySelector(".img-portada");
const cuadroUnplugged       = document.querySelector(".cuadro-unplugged");
const btnLogin              = document.querySelector('.btn-login');
const iconoMenu             = document.querySelector('.icono-menu');
const menuDesplegable       = document.querySelector('.menu-desplegable');
const nav                   = document.querySelector('.nav');
const iconoLogin            = document.querySelector('.icono-login');
const formDesplegable       = document.querySelector('.form-desplegable');
const loginResponsive       = document.querySelectorAll('.login-responsive');

const botonIzquierda        = document.querySelector('.boton-izquierda');
const botonDerecha          = document.querySelector('.boton-derecha');
const contenido             = document.querySelector('.contenido');



let contador = 0

function moverDerecha() {
  if (contador >= contenido.childElementCount) {
    contador = 0;
  }
  contenido.style.transform = `translateX(${contador * -33.3}%)`;
  contador++;
}

function moverIzquierda() {
  contador--
  if (contador < 0) {
    contador = 2;
  }
  contenido.style.transform = `translateX(${contador * -33.3}%)`;
}

botonDerecha.addEventListener("click", moverDerecha);
botonIzquierda.addEventListener("click", moverIzquierda);







window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  imgPortada.style.top = scroll * 1 + "px";
  cuadroUnplugged.style.right = scroll * 1.2 + "px";
});

let contadorLogin = 0

const loginResponsiv = (e)=>{
  if(contadorLogin === 0){
    formDesplegable.style.transform = `translateX(-2%)`
    contadorLogin++
    
}else{
  formDesplegable.style.transform  = `translateX(104%)`
    contadorLogin = 0
}

}
loginResponsive.forEach((boton)=>{
  boton.addEventListener('click',loginResponsiv)
});

let contadorDesplegable = 0;
iconoMenu.addEventListener('click',()=>{
  if(contadorDesplegable === 0){
    menuDesplegable.style.transform = `translateY(0%)`
    let colorRgba = "rgba($color: #0a0a0a, $alpha: .980)"
    nav.style.background = "rgb(20,20,20)"
    iconoLogin.style.visibility = "hidden"
    contadorDesplegable++
  }else{
        menuDesplegable.style.transform = `translateY(-110%)`
        nav.style.background = "#000"
        iconoLogin.style.visibility = "visible"
        contadorDesplegable = 0
  }
})



// let counter = 0;
// let widthImg = 100 / contenidoCarrousel.childElementCount;


// function moverDerecha() {
//   if (counter > contenidoCarrousel.childElementCount - 2) {
//     counter = 0;
   
//   } else {
//     counter++;
//   }
//   contenidoCarrousel.style.transform = `translateX(-${counter * widthImg}%)`;
  
// }

// function moverIzquierda() {
//   counter--;
//   if (counter < 0) {
//     counter = 2;
//     contenidoCarrousel.style.transform = `translateX(-${counter * widthImg}%)`;
    
//   }
//   contenidoCarrousel.style.transform = `translateX(-${counter * widthImg}%)`;
// }

// function scrollAutoShop(){
//   let scroll = window.scrollY;
//   if(scroll == 1100){
//     setInterval(moverDerecha,4000)
//     console.log(scroll)
//   }
// }
// window.addEventListener('scroll',scrollAutoShop)

// botonIzquierda.addEventListener("click", moverIzquierda);
// botonDerecha.addEventListener("click", moverDerecha);
