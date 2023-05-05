const burger = ({trigger, content, parent}) => {
  const btn = document.querySelector(trigger);
  const menu = document.querySelector(content);
  const list = document.querySelector(parent);

  btn.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu--opened');
    btn.classList.toggle('menu__burger-opened');
    document.body.classList.toggle('body-overflow-hidden');
  });

  list.addEventListener('click', e => {
    if (e.target.closest('.burger__item')) {
      menu.classList.toggle('mobile-menu--opened');
      document.body.classList.toggle('body-overflow-hidden');
      btn.classList.toggle('menu__burger-opened');
    }
  });
};

burger({
  trigger: '.menu__burger',
  content: '.mobile-menu',
  parent: '.burger__list'
});
