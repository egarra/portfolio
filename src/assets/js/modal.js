const handleModal = (trigger) => {
  const btn = document.querySelector(trigger);
  const overflow = document.querySelector('.overflow');
  const closeBtn = document.querySelector('.modal__btn');
  const modal = document.querySelector('.modal');
  const scrollWidth = window.innerWidth - document.documentElement.clientWidth + 'px';
  console.log('hell')
  function returnPadding() {
    setTimeout(() => {
      document.documentElement.style.overflow = '';
      document.documentElement.style.paddingRight = '';
    }, 400);
  }

  btn.addEventListener('click', () => {
    overflow.classList.remove('visually-hidden');
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = scrollWidth;
  });

  closeBtn.addEventListener('click', () => {
    overflow.classList.add('visually-hidden');

    returnPadding();
  });

  overflow.addEventListener('click', e => {
    if (e.target === modal) return;
    overflow.classList.add('visually-hidden');

    returnPadding();
  });

  function closeByEsc(e) {
    if (e.code === 'Escape') {
      overflow.classList.add('visually-hidden');


      returnPadding();
    }
  }
  window.addEventListener('keydown', closeByEsc);
}

handleModal('.menu__contact-btn');
handleModal('.contacts__btn');
handleModal('.burger__btn');

