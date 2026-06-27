// Menu hamburguesa - abre y cierra el panel lateral al hacer clic
const toggle = document.querySelector('.nav-menu-toggle');
const menu = document.querySelector('.menuop');

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