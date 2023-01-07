window.onscroll = function () { myFunction() };

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
}