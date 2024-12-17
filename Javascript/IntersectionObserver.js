// Seleccionamos la sección y los elementos dentro de ella
const catalogo = document.querySelector('.catalogo');
const boxes = document.querySelectorAll('.box');

// Creamos el observer para la sección completa
const catalogoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Cuando la sección entra en la vista, se activa la animación
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)'; // Se mueve a su posición original
      observer.unobserve(entry.target); // Dejamos de observar la sección una vez animada
    }
  });
}, { threshold: 0.5 }); // Observamos cuando el 50% de la sección es visible

// Observamos la sección
catalogoObserver.observe(catalogo);

// Creamos el observer para las cajas (cada .box)
boxes.forEach(box => {
  const boxObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cuando la caja entra en la vista, se activa la animación
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Observamos cuando el 50% de la caja es visible

  boxObserver.observe(box);
});
