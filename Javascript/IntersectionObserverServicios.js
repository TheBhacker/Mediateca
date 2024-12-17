// Seleccionamos la sección de Servicios
const servicios = document.querySelector('#servicios');

// Creamos el observer para la sección de servicios
const serviciosObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Cuando la sección entra en la vista, se activa la animación
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)'; // Se mueve a su posición original
      observer.unobserve(entry.target); // Dejamos de observar la sección una vez animada
    }
  });
}, { threshold: 0.5 }); // Observamos cuando el 50% de la sección es visible

// Observamos la sección de servicios
serviciosObserver.observe(servicios);

// Para los servicios individuales, si tienen la animación de entrada
const servicioItems = document.querySelectorAll('.servicio');

servicioItems.forEach(servicio => {
  const servicioObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cuando el servicio entra en la vista, se activa la animación
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Observamos cuando el 50% del servicio es visible

  servicioObserver.observe(servicio);
});
