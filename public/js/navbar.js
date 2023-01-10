const navbar = document.querySelector('#navbar');
const navbarMobile = document.querySelector('.navbar_mobile');
const title_h2 = document.querySelector('#title_h2');
const navbarX = title_h2.offsetTop;
const mediaQueryList_mw428 = window.matchMedia('(min-width:428px)');
const main = document.querySelector('main');

$(document).ready(() => {
    if (title_h2.textContent == '') {
        main.style.height = '100vh';
    };
});

navbar.style.transform = `translateX(${window.innerWidth}px)`;

if (mediaQueryList_mw428.matches) {
    navbar.style.paddingTop = `${navbarX}px`;
} else {
    navbar.style.paddingTop = `${navbarX}px`;
};

const menu = document.querySelector('#menu');
let clickCount = 0;

menu.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 1 || clickCount % 2 !== 0) {
        navbar.style.transition = 'transform 1s';
        navbar.style.transform = `translateX(0px)`;
    } else if (clickCount % 2 === 0) {
        navbar.style.transition = 'transform 1s';
        navbar.style.transform = `translateX(${window.innerWidth}px)`;
    }
});
