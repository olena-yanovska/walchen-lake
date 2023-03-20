'use strict';

const form = document.getElementById('submitForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
