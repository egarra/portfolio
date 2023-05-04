import { handleModal } from "./modal";

const btn = document.querySelector('.menu__burger');
const menu = document.querySelector('.mobile-menu');
const list = document.querySelector('.burger__list');
const contactBtn = document.querySelector('.burger__btn');

btn.addEventListener('click', () => {
  menu.classList.toggle('mobile-menu--opened');
  btn.classList.toggle('menu__burger-opened');
  document.body.classList.toggle('body-overflow-hidden');
});

list.addEventListener('click', (e) => {
  if (e.target.closest('.burger__item')) {
    menu.classList.toggle('mobile-menu--opened');
    document.body.classList.toggle('body-overflow-hidden');
    btn.classList.toggle('menu__burger-opened');
  }
});

/* contactBtn.addEventListener('click', () => {
  menu.classList.toggle('mobile-menu--opened');
  btn.classList.toggle('menu__burger-opened');
  document.body.classList.toggle('body-overflow-hidden');
  handleModal('.burger__btn')
}); */