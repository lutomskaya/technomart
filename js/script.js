var link = document.querySelector('.open-modal-link');
var modal = document.querySelector('.modal-contact');
var close = document.querySelector('.modal-contact-close');
var form = modal.querySelector('.modal-form');
var login = modal.querySelector('[name=name]');
var email = modal.querySelector('[name=email]');
var text = modal.querySelector('[name=textarea]');


link.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.add('modal-show');
});

close.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.remove('modal-show');
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
      }
    }
  });