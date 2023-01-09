/* window.onscroll = function () { myFunction() };

let menu = document.querySelector('#menu');
let navbar = document.getElementById("navbar");
let sticky = menu.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        menu.classList.add('sticky');
    } else {
        navbar.classList.remove("sticky");
        menu.classList.remove("sticky");
    }
}; */

const navbar = document.querySelector('#navbar');
const navbarMobile = document.querySelector('.navbar_mobile');
const title_h2 = document.querySelector('#title_h2');
const navbarX = title_h2.offsetTop;
const mediaQueryList_mw428 = window.matchMedia('(min-width:428px)');

navbar.style.transform = `translateX(${window.innerWidth}px)`;

if (mediaQueryList_mw428.matches) {
    navbar.style.paddingTop = `${navbarX * 2}px`;
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
        navbar.style.transition = 'transform 2s';
        navbar.style.transform = `translateX(${window.innerWidth}px)`;
    }
})
