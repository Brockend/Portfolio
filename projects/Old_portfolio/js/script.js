const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
    hamburger.classList.add('hamburger_inactive');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu_active');
    hamburger.classList.remove('hamburger_inactive');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('menu_active');
    hamburger.classList.remove('hamburger_inactive');
});

const counters = document.querySelectorAll('.skills__card-percent');
const lines = document.querySelectorAll('.skills__card-orangeline');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML; 
});