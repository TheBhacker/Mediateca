  // Gráfico 1: Frecuencia de alquiler por género
  const ctxGenero = document.getElementById('chartGenero').getContext('2d');
  new Chart(ctxGenero, {
    type: 'bar',
    data: {
      labels: ['Cine', 'Documental', 'Música', 'Novel·la'],
      datasets: [{
        label: 'Frecuencia de Alquiler',
        data: [93, 126, 180, 217],
        backgroundColor: ['#6200ea', '#03a9f4', '#8bc34a', '#ffc107'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        title: { display: true, text: 'Frecuencia de Alquiler por Género' }
      }
    }
  });

  // Gráfico 2: Alquileres por departamento
  const ctxDepartamento = document.getElementById('chartDepartamento').getContext('2d');
  new Chart(ctxDepartamento, {
    type: 'pie',
    data: {
      labels: ['Biblioteca', 'Imatge i so', 'Serveis'],
      datasets: [{
        data: [30, 76, 19],
        backgroundColor: ['#03a9f4', '#8bc34a', '#ffc107'],
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Alquileres por Departamento' }
      }
    }
  });

  // Gráfico 3: Servicios menos alquilados
  const ctxServicios = document.getElementById('chartServicios').getContext('2d');
  new Chart(ctxServicios, {
    type: 'line',
    data: {
      labels: ['Departament', 'Lloguer-Sales', 'Lloguer-Material'],
      datasets: [{
        label: 'Frecuencia',
        data: [35, 42, 107],
        borderColor: '#6200ea',
        backgroundColor: 'rgba(98, 0, 234, 0.2)',
        borderWidth: 2,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        title: { display: true, text: 'Servicios Menos Alquilados' }
      }
    }
  });

  // Gráfico 4: Distribución por temática
  const ctxTematica = document.getElementById('chartTematica').getContext('2d');
  new Chart(ctxTematica, {
    type: 'doughnut',
    data: {
      labels: ['Històric-Artístic', 'Actualitat', 'Cultural', 'Educació'],
      datasets: [{
        data: [25, 40, 20, 15], // Ejemplo de datos
        backgroundColor: ['#e91e63', '#03a9f4', '#8bc34a', '#ffc107'],
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Distribución por Temática' }
      }
    }
  });