document.documentElement.classList.add('js');
document.getElementById('anio').textContent = new Date().getFullYear();

// Gráfico PID: se dibuja una vez al cargar y se puede repetir
const pid = document.getElementById('pid');
function dibujar() {
  pid.classList.remove('anima');
  void pid.getBoundingClientRect(); // reinicia la animación
  pid.classList.add('anima');
}
dibujar();
document.getElementById('repetir').addEventListener('click', dibujar);

// Cada proyecto aparece una sola vez al entrar en pantalla
const proyectos = document.querySelectorAll('.proyecto');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  proyectos.forEach((p) => io.observe(p));
} else {
  proyectos.forEach((p) => p.classList.add('visible'));
}
