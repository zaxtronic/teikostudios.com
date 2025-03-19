console.log('El archivo JavaScript está funcionando correctamente');



// Scroll suave en los enlaces de navegación
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Cambia de color e interactúa con un mensaje
document.getElementById('color-button').addEventListener('click', function () {
    const colors = ['#1a1a2e', '#16213e', '#0f3460', '#202a44'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.hero').style.backgroundColor = randomColor;
    alert('¡El fondo ha cambiado a un nuevo color futurista!');
});
// Cambia el estado activo en la navegación al hacer scroll
const secciones = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let index = secciones.length;

    while (--index && window.scrollY + 50 < secciones[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
});
// Título con colores dinámicos
const titulo = document.querySelector('header h1');

let colores = ['#f39c12', '#00d9ff', '#28a745', '#ff007f'];
let indice = 0;

function cambiarColor() {
    titulo.style.color = colores[indice];
    titulo.style.textShadow = `0 0 15px ${colores[indice]}`;
    indice = (indice + 1) % colores.length; // Cambia al siguiente color
}

setInterval(cambiarColor, 500); // Cambia el color cada 500ms
