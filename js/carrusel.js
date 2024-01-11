document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.card-slider');
    let currentIndex = 0;
  
    function showCard() {
      const cardWidth = document.querySelector('.card').offsetWidth;
      const newPosition = -currentIndex * cardWidth;
      slider.style.transform = `translateX(${newPosition}px)`;
    }
  
    function nextCard() {
      currentIndex = (currentIndex + 1) % document.querySelectorAll('.card').length;
      showCard();
    }
  
    function prevCard() {
      currentIndex = (currentIndex - 1 + document.querySelectorAll('.card').length) % document.querySelectorAll('.card').length;
      showCard();
    }
  
    document.querySelector('.next-button').addEventListener('click', nextCard);
    document.querySelector('.prev-button').addEventListener('click', prevCard);
  
    showCard(); // Mostrar la tarjeta inicial
  });
  