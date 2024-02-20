const whatsapp =  "https://api.whatsapp.com/send?phone=573192661179&text=%F0%9F%91%8B%20Hola%2C%20vengo%20de%20https%3A%2F%2Feuropan.ola.click%2Fproducts%20%0ADeseo%20realizar%20el%20siguiente%20pedido%3A%0A"
const instagram = "https://www.instagram.com/europan.vdl/";
const telefono = "tel:+573192083608";
const pageOficial ="https://jw.org/guc";

const windowBackground = document.getElementById("window-background")
const windowContainer = document.getElementById("window-container")
const openButton = document.getElementById("open-button")
const closeButton = document.getElementById("close-button")
const openButtonFooter = document.getElementById("open-footer")

openButtonFooter.addEventListener("click", ()=> windowBackground.style.display = "flex")
openButton.addEventListener("click", ()=> windowBackground.style.display = "flex")
const closeWindow = ()=> {
    windowContainer.classList.add("close")
    setTimeout(() => {
      windowContainer.classList.remove("close")
      windowBackground.style.display = "none"
    }, 400);
}

closeButton.addEventListener("click", closeWindow)

window.addEventListener("click", e=>  e.target == windowBackground && closeWindow())
window.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeWindow();
  }
});


const nav = document.querySelector('.nav');


window.addEventListener('scroll', function(){
    nav.classList.toggle("active", window.scrollY >40)
})

const container = document.querySelector('.container');

window.addEventListener('scroll', function(){
    container.classList.toggle("active", window.scrollY >40)
})

const shareContent = async () => {
  try {
    await navigator.share({
      title: 'EuroPanes',
      text: 'Menú, Precios y Teléfonos.',
      url: '', // Poner link pagina oficial
    });
    console.log('Contenido compartido con éxito');
  } catch (error) {
    console.error('Error al compartir:', error);
  }
};

const shareButtonClickHandler = () => {
  if (navigator.share) {
    shareContent();
  } else {
    console.log("La API Web Share no está disponible");
  }
};

const buttonInfo = document.getElementById("share");
const buttonInfo2 = document.getElementById("share-2");

// Asignar la misma función de manejo de clics a ambos botones
buttonInfo.addEventListener("click", shareButtonClickHandler);
buttonInfo2.addEventListener("click", shareButtonClickHandler);
