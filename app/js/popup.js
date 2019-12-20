'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var registratonBtn = document.querySelector('.footer-reg');
  var freeRegPopup = document.querySelector('.free-reg-popup');
  var freeRegPopupCloseBtn = document.querySelector('.free-reg-popup__close-btn'); 
  var overlay = document.querySelector('.certificate-overlay');



  var openPopup = function () {
    overlay.classList.remove('visually-hidden');
    freeRegPopup.classList.remove('visually-hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function (evt) {
    freeRegPopup.classList.add('visually-hidden');
    overlay.classList.add('visually-hidden');

    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onDocumentClick = function (evt) {
    if (evt.target === overlay) {
      closePopup();
    }
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  registratonBtn.addEventListener('click', openPopup);
  overlay.addEventListener('click', onDocumentClick);
  freeRegPopupCloseBtn.addEventListener('click', closePopup);

})();
