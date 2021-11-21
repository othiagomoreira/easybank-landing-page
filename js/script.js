const menu = document.querySelector('#nav-menu');
const navLinks = menu.querySelectorAll('.navlinks');

const btnMobile = document.querySelector('#btn-mobile');
const iconMenu = btnMobile.querySelector('img');

function showMenu() {
  menu.classList.toggle('show-menu');

  // Icon menu
  if(menu.classList.contains('show-menu')) {
    iconMenu.src = 'images/icon-close.svg'
  } else {
    iconMenu.src = 'images/icon-hamburger.svg'
  }
}

function linkActive() {
  // Remove All -> Add somente no elemento selecionado
  navLinks.forEach(link => link.classList.remove('active'));
  this.classList.add('active');


  menu.classList.remove('show-menu');
  iconMenu.src = 'images/icon-hamburger.svg'
}

btnMobile.addEventListener('click', showMenu);
navLinks.forEach(link => link.addEventListener('click', linkActive));
