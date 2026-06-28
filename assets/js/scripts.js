// ============================================================
// MENU HAMBURGUESA - Abre y cierra el panel lateral al hacer clic
// ============================================================
const toggle = document.querySelector('.nav-menu-toggle');
const menu = document.querySelector('.menuop');

if (toggle && menu) {
    toggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Cierra el menu si se hace clic fuera del panel
    document.addEventListener('click', function (e) {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
            menu.classList.remove('active');
        }
    });

    // Cierra el menu al hacer clic en cualquier enlace del menu
    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.remove('active');
        });
    });
}

// ============================================================
// SCROLL-UP - Muestra el boton al desplazarse y sube al inicio
// ============================================================
const scrollUpBtn = document.getElementById('scroll-up-btn');

if (scrollUpBtn) {
    // Mostrar u ocultar el boton segun el scroll actual
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollUpBtn.style.opacity = '1';
            scrollUpBtn.style.visibility = 'visible';
        } else {
            scrollUpBtn.style.opacity = '0';
            scrollUpBtn.style.visibility = 'hidden';
        }
    });

    // Subir al inicio de la pagina con animacion suave al hacer clic
    scrollUpBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}