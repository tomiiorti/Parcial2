document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('active');
        if (menu.classList.contains('active')) {
            // Cuando el menú está activo, muestra el fondo oscurecido
            document.body.appendChild(overlay);
            setTimeout(() => {
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'auto';
            }, 10);
        } else {
            // Cuando el menú se desactiva, oculta el fondo oscurecido
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
    });

    // Cierra el menú cuando se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove('active');
            // Cuando el menú se cierra, oculta el fondo oscurecido
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
    });
});
/*volver */
// Función para mostrar u ocultar el botón basado en la posición de desplazamiento
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.opacity = "1";
        
    } else {
        document.getElementById("scrollToTopBtn").style.opacity = "0";
        
    }
};

// Función para desplazarse al principio de la página
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
 // Variable para rastrear el estado actual
var estadoOriginal = true;
function cambiarTema() {
    
    var contenidoElement = document.getElementById('conta');
    var iconElement = document.getElementById('i');
  if (estadoOriginal) {
    contenidoElement.textContent = 'Modo Claro';
    iconElement.className = 'fa-solid fa-sun';
    document.documentElement.style.setProperty('--color-principal', '#bf2a2c');
    document.documentElement.style.setProperty('--color-secundario-1', '#b2262b');
    document.documentElement.style.setProperty('--color-secundario-2', '#423939');
    document.documentElement.style.setProperty('--color-secundario-3', '#464545');
    document.documentElement.style.setProperty('--color-texto', '#f0d0d0');
    document.documentElement.style.setProperty('--color-fondo', '#333333');
    document.documentElement.style.setProperty('--color-enfasis', '#555555');
    document.documentElement.style.setProperty('--color-texto2', '#000000');
    document.documentElement.style.setProperty('--color-fondo-inv', '#bcbaba');
   
  } else {
    contenidoElement.textContent = 'Modo Oscuro';
    iconElement.className = 'fa-solid fa-moon';
    document.documentElement.style.setProperty('--color-principal', '#7a2021');
    document.documentElement.style.setProperty('--color-secundario-1', '#6a1c1d');
    document.documentElement.style.setProperty('--color-secundario-2', '#f9eec5');
    document.documentElement.style.setProperty('--color-secundario-3', '#f8efce');
    document.documentElement.style.setProperty('--color-texto', '#000000');
    document.documentElement.style.setProperty('--color-fondo', 'rgba(245, 230, 203, 0.817)');
    document.documentElement.style.setProperty('--color-enfasis', '#edebeb');
    document.documentElement.style.setProperty('--color-texto2', '#ffffff');
    document.documentElement.style.setProperty('--color-fondo-inv', '#333');

    

  }


  estadoOriginal = !estadoOriginal;
}


/* search*/
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[name="search"]');
    const searchButton = document.querySelector('button[type="submit"]');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const targetSection = document.getElementById(searchTerm);

        if (targetSection) {
            // Calcular la posición central
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const targetTop = targetSection.getBoundingClientRect().top;
            const targetOffset = targetTop - (windowHeight / 5);

            // Scroll suave hasta la posición central de la sección
            window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        } else {
            // Buscar en secciones con identificadores en minúsculas
            const sections = document.querySelectorAll('section');
            let found = false;

            sections.forEach(section => {
                if (section.id.toLowerCase() === searchTerm) {
                    found = true;

                    // Calcular la posición central
                    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                    const targetTop = section.getBoundingClientRect().top;
                    const targetOffset = targetTop - (windowHeight / 5);

                    // Scroll suave hasta la posición central de la sección
                    window.scrollTo({ top: targetOffset, behavior: 'smooth' });
                }
            });

            if (!found) {
                alert("No se encontró ninguna coincidencia para la búsqueda.");
            }
        }
    });
});
