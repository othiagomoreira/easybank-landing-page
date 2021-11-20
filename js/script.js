const menu = document.querySelector('.nav__list');
const btnMobile = document.querySelector('.btn-mobile');
const iconMenu = btnMobile.querySelector('img');

function handleClick() {
  menu.classList.toggle('show-menu');

  if(menu.classList.contains('show-menu')) {
    iconMenu.setAttribute('src', 'images/icon-close.svg');
  }else {
    iconMenu.setAttribute('src', 'images/icon-hamburger.svg');
  }

}

btnMobile.addEventListener('click', handleClick);