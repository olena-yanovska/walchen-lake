'use strict';

// eslint-disable-next-line
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.scroll-buttons__counter',
    type: 'fraction',
    formatFractionCurrent: function(number) {
      return number;
    },
  },

  navigation: {
    nextEl: '.scroll-buttons__right',
    prevEl: '.scroll-buttons__left',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const form = document.getElementById('submit-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
