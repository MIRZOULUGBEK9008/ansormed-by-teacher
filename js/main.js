const elLoader = document.querySelector('.lds-ripple-wrapper'),
elNav = document.querySelector('.js-header'),
elButton = document.querySelector('.js-menu'),
elOpen = document.querySelector('.menu__img-open'),
elClose = document.querySelector('.menu__img-close');


// Loader
document.addEventListener('DOMContentLoaded', function (){
  setTimeout(function (){
    elLoader.classList.add('lds-ripple-wrapper--none');
  }, 800);
});


// Navbar
if (elButton) {
  elButton.addEventListener('click', function (){
    elNav.classList.toggle('sitenav__inner--open');
    document.body.classList.toggle('body-overflow');
    elOpen.classList
    .toggle('menu__img-open--block')
    elClose.classList
    .toggle('menu__img-close--block')
  });

}