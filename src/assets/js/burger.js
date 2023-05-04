const btn = document.querySelector('.menu__burger');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('mobile-menu--opened');
  btn.classList.toggle('menu__burger-opened');

/*   if (document.body.style.overflow !== 'hidden') {
    console.log('true');
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  } */
});