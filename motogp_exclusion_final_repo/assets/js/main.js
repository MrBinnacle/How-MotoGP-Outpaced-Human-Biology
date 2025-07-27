document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('powerChart')?.getContext('2d');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [1975, 1985, 1995, 2005, 2010, 2015, 2020, 2025],
      datasets: [{
        label: 'Power-to-Weight Ratio (hp/lb)',
        data: [0.315, 0.41, 0.53, 0.62, 0.67, 0.68, 0.70, 0.72],
        borderColor: '#e74c3c',
        backgroundColor: 'rgba(231, 76, 60, 0.2)',
        tension: 0.4,
        pointRadius: 4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              family: 'Georgia',
              size: 14
            }
          }
        },
        title: {
          display: true,
          text: 'MotoGP Power Evolution (1975–2025)',
          font: {
            size: 18
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Year'
          }
        },
        y: {
          title: {
            display: true,
            text: 'hp/lb'
          },
          beginAtZero: false,
          suggestedMin: 0.2,
          suggestedMax: 0.8
        }
      }
    }
  });
});
