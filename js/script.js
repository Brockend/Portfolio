//new WOW().init();

const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__menu');
const overlay = document.querySelector('.header__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('header__menu_active');
    overlay.classList.toggle('header__overlay_active');
    hamburger.classList.toggle('header__hamburger_active');
    document.querySelector('.body').classList.toggle('body_active');
});