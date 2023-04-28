const sliderUpdate = ({ prevButton, nextButton, slides, slickSlider }) => {
  const disableBtns = lastSlide => {
    prevButton.attr('disabled', true).addClass('slider__btn-disabled');

    slickSlider.on('afterChange', (event, slick, currentSlide) => {
      if (currentSlide === 0) {
        prevButton.attr('disabled', true).addClass('slider__btn-disabled');
      } else {
        prevButton.attr('disabled', false).removeClass('slider__btn-disabled');
      }

      if (currentSlide === slides.length - lastSlide) {
        nextButton.attr('disabled', true).addClass('slider__btn-disabled');
      } else {
        nextButton.attr('disabled', false).removeClass('slider__btn-disabled');
      }
    });
  };

  function checkWindowWidth() {
    if (window.innerWidth <= 767) {
      disableBtns((lastSlide = 0));
    }

    if (window.innerWidth >= 768) {
      disableBtns((lastSlide = 1));
    }

    if (window.innerWidth >= 1280) {
      disableBtns((lastSlide = 2));
    }
  }
  checkWindowWidth();

  window.addEventListener('resize', checkWindowWidth)
};

sliderUpdate({
  slickSlider: $('.projects__swiper'),
  prevButton: $('.projects__prev'),
  nextButton: $('.projects__next'),
  slides: $('.projects__swiper-slide'),
});
