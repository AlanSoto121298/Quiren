//aqui empezamos nuestro nav toogle para movil
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu_visible");
    navToggle.setAttribute("aria-label", "Abrir menú");
  });
});

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});


//aqui empezamos obviamente todo el carrusel
const swiper = new Swiper(".swiper-hero", {
  // Optional parameters
  slidesPerView: 2,
  spaceBetween: 10,
  // slidesPerGroupAuto: true,

  direction: "horizontal",
  loop: true,
  // allowTouchMove: true,
   effect: "slide",
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  // Flechas de navegacion (opcional x ahora)
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // si necesitas scroll barr aki pa
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  //   draggable: true,
  // },
});

//para cuando mandes el mensaje y sea correcto
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("miFormulario");
  var modal = document.getElementById("myModal");
  var closeModalButton = document.querySelector(".close");
  var modalMessage = document.getElementById("modalMessage");

  form.addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || asunto === "" || mensaje === "") {
      // Muestra un mensaje de error personalizado
      alert("Por favor, completa todos los campos.");
    } else {
      // El formulario se envió con éxito, muestra el modal
      modal.style.display = "block";
    }
  });

  closeModalButton.addEventListener("click", function() {
    // Cierra el modal al hacer clic en el botón de cierre (×)
    modal.style.display = "none";
  });
});

//error mensaje
var miFormulario = document.getElementById("miFormulario");
var modal2 = document.getElementById("Mymodal2");
var close2 = document.querySelector(".close2"); // Cambio aquí

miFormulario.addEventListener("submit", function (event) {
    // Verificar la conexión de red
    if (!navigator.onLine) {
        // Mostrar modal2 si no hay conexión
        modal2.style.display = "block";
        return;
    }
});
    
close2.onclick = function () {
    modal2.style.display = "none";
};

