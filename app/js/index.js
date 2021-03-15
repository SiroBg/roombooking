$(document).on('click', 'a[href^="#"]', function (event) {
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('active');
  navMenu.classList.toggle('menu_active')
})

navMenu.addEventListener('click', evt => {
  if(evt.target.classList.contains('menu__link') && evt.currentTarget.classList.contains('menu_active')) {
    hamburgerButton.classList.remove('active');
    navMenu.classList.remove('menu_active')
  }
})
