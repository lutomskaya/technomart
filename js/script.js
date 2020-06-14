var link = document.querySelector('.open-modal-link');
var modal = document.querySelector('.modal-contact');
var close = document.querySelector('.modal-contact-close');
var form = modal.querySelector('.modal-form');
var login = modal.querySelector('[name=name]');
var email = modal.querySelector('[name=email]');
var text = modal.querySelector('[name=textarea]');
var mapPopup = document.querySelector('.map-popup');
var mapButton = document.querySelector('.open-modal-map');
var closeMapPopup = document.querySelector('.map-popup-close');


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

mapButton.addEventListener('click', function (event) {
    event.preventDefault();
    mapPopup.classList.add('map-modal-show');
}); 

closeMapPopup.addEventListener('click', function (event) {
  event.preventDefault();
  mapPopup.classList.remove('map-modal-show');
});  

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("map-modal-show")) {
      mapPopup.classList.remove("map-modal-show");
    }
  }
});