var introSlider = new Swiper('.intro__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="slider__dot button ' + className + '">' + '</span>';
    },
  },
});

var bestsellerSlider = new Swiper('.bestsellers__slider', {
  slidesPerView: 'auto',
  spaceBetween: 1,
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});

var noveltySlider = new Swiper('.novelty__slider', {
  slidesPerView: 'auto',
  spaceBetween: 1,
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});

var specialOffersSlider = new Swiper('.special-offers__slider', {
  slidesPerView: 'auto',
  spaceBetween: 1,
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});

var brandsSlider = new Swiper('.brands__slider', {
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 20,
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--prev',
  },
});

(function () {
  var searchForm = document.querySelector('.search__form');
  var subscriptionForm = document.querySelector('.subscription__form');

  var determineValue = function (form) {
    var inputs = form.querySelectorAll('input');

    var onFieldInput = function (evt) {
      if (evt.target.value === '') {
        if (evt.target.classList.contains('form__input--filled')) {
          evt.target.classList.remove('form__input--filled');
        }
      } else if (!(evt.target.classList.contains('form__input--filled'))) {
        evt.target.classList.add('form__input--filled');
      }
    }

    var addInputListener = function (input) {
      input.addEventListener('input', onFieldInput);
    }

    for (var i = 0; i < inputs.length; i++) {
      addInputListener(inputs[i]);
    }
  }

  if (searchForm) {
    determineValue(searchForm);
  }

  if (subscriptionForm) {
    determineValue(subscriptionForm);
  }
})();
