// nebula-move.js
// Efecto de fondo movible para la nebulosa usando mousemove sobre el body

document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  body.style.backgroundPosition = 'center';

  body.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    // Ajusta los valores para dar un efecto sutil de movimiento
    const posX = 50 + (x - 0.5) * 20; // rango de 40% a 60%
    const posY = 50 + (y - 0.5) * 20; // rango de 40% a 60%
    body.style.backgroundPosition = `${posX}% ${posY}%`;
  });

  // Para móviles: movimiento con touch
  body.addEventListener('touchmove', function(e) {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const x = touch.clientX / window.innerWidth;
      const y = touch.clientY / window.innerHeight;
      const posX = 50 + (x - 0.5) * 20;
      const posY = 50 + (y - 0.5) * 20;
      body.style.backgroundPosition = `${posX}% ${posY}%`;
    }
  });
});
