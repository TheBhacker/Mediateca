// Inicializar Barba.js
barba.init({
    transitions: [
      {
        name: 'wipe-transition',
        leave(data) {
          // Animación de salida para la página actual
          return new Promise(resolve => {
            data.current.container.classList.add('fade-out');
            setTimeout(resolve, 1000); // Duración de la animación de salida
          });
        },
        enter(data) {
          // Animación de entrada para la página nueva
          data.next.container.classList.add('fade-in');
          data.next.container.setAttribute('transition-style', 'in:wipe:down'); // Añadir el estilo para la animación wipe
        }
      }
    ]
  });
  