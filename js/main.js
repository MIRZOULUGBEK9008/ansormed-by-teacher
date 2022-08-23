const elLoader = document.querySelector('.lds-ripple-wrapper');


// Loader
document.addEventListener('DOMContentLoaded', function (){
  setTimeout(function (){
    elLoader.classList.add('lds-ripple-wrapper--none');
  }, 800);
});
