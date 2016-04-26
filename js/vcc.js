function init() {
  checkScroll();
  window.addEventListener('scroll', function(e) {
    checkScroll();
  });
}

function checkScroll() {
  if (window.innerWidth >= 860) {
    var distanciaY = window.pageYOffset || document.documentElement.scrollTop,
        tamanhoCab = 100,
        cab = document.querySelector(".site-header");
        cabLogo = document.querySelector("#header-logo");
    var classe = "smaller";
    if (distanciaY > tamanhoCab) {
      addClass(cab, classe);
      addClass(cabLogo, classe);
    } else {
      if (hasClass(cab, classe)) {
        removeClass(cab, classe);
        removeClass(cabLogo, classe);
      }
    }
  }
}

function hasClass(e, className) {
  if (e.classList) {
    return e.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(e.className);
  }
}

function addClass(e, className) {
  if (e.classList) {
    e.classList.add(className);
  } else {
    e.className += ' ' + className;
  }
}

function removeClass(e, className) {
  if (e.classList) {
    e.classList.remove(className);
  } else {
    e.className = e.className.replace(
        new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

window.addEventListener("load", init, false);

/**
 * Slider
 */
 function setaImagem() {
   var settings = {
     primeiraImg: function() {
       elemento = document.querySelector("#slider a:first-child");
       elemento.classList.add("ativo");
     },

     slide: function() {
       elemento = document.querySelector(".ativo");

       if (elemento.nextElementSibling) {
         elemento.nextElementSibling.classList.add("ativo");
         elemento.classList.remove("ativo");
       } else {
         elemento.classList.remove("ativo");
         settings.primeiraImg();
       }

     },

     proximo: function() {
       clearInterval(intervalo);
       elemento = document.querySelector(".ativo");

       if (elemento.nextElementSibling) {
         elemento.nextElementSibling.classList.add("ativo");
         elemento.classList.remove("ativo");
       } else {
         elemento.classList.remove("ativo");
         settings.primeiraImg();
       }
       intervalo = setInterval(settings.slide, 4000);
     },

     anterior: function() {
       clearInterval(intervalo);
       elemento = document.querySelector(".ativo");

       if (elemento.previousElementSibling) {
         elemento.previousElementSibling.classList.add("ativo");
         elemento.classList.remove("ativo");
       } else {
         elemento.classList.remove("ativo");
         elemento = document.querySelector("a:last-child");
         elemento.classList.add("ativo");
       }
       intervalo = setInterval(settings.slide, 4000);
     },
   }


   //chama o slide
   settings.primeiraImg();

   //chama o slide à um determinado tempo
   var intervalo = setInterval(settings.slide, 4000);
   document.querySelector(".next").addEventListener("click", settings.proximo, false);
   document.querySelector(".prev").addEventListener("click", settings.anterior, false);

   resize();

 }

 window.addEventListener("load", setaImagem, false);

 function resize() {
   elemento = document.querySelector("#slider a:first-child img");
   elemento2 = document.querySelector("figure");
   elemento2.style.height = (elemento.height + "px");
 }
