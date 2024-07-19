document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');
    const menuLinks = document.querySelectorAll('.header__menu a');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
});
