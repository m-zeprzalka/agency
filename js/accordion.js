document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq__item');
  
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        // Zamknięcie wszystkich odpowiedzi
        faqItems.forEach(i => {
          if (i !== item) {
            i.classList.remove('active');
          }
        });
  
        // Przełączanie aktywnej odpowiedzi
        item.classList.toggle('active');
      });
    });
  });
  