const navbar = document.querySelector('.navbar');
const menu = document.querySelector('#menu-icon');


menu.onclick = function (){
menu.classList.toggle('bx-x');
navbar.classList.toggle('open');


};