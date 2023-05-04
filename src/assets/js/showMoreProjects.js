const showMoreProjects = ({wrapper, trigger, arr}) => {
  const sectionWrapper = document.querySelector(wrapper);
  const btn = document.querySelector(trigger);
  const cards = document.querySelectorAll(arr);

  sectionWrapper.addEventListener('click', e => {

    if (e.target.closest('.projects-mobile__btn')) {
      cards.forEach(card => {
        if (card.classList.contains('mobile-visually-hidden')) {
          card.classList.remove('mobile-visually-hidden');

          window.scrollBy({
            top: 400,
            behavior: 'smooth',
          });

          btn.classList.add('mobile-visually-hidden');
        }
      });
    }
  });
};
showMoreProjects({
    wrapper: '.projects-mobile__wrapper',
    trigger: '.projects-mobile__btn',
    arr: '.projects-mobile__item'
});
