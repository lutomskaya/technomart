var modalCart = document.querySelector('.modal-cart');
var modalButtonCart = document.querySelectorAll('.product-actions-buy');
var modalCartClose = document.querySelector('.modal-cart-close');

var link = document.querySelector('.open-modal-link');
var modal = document.querySelector('.modal-contact');
var close = document.querySelector('.modal-contact-close');
var form = document.querySelector('.modal-form');
var login = document.querySelector('.contact-form-name');
var email = document.querySelector('.contact-form-email');

var mapPopup = document.querySelector('.map-popup');
var mapButton = document.querySelector('.open-modal-map');
var closeMapPopup = document.querySelector('.map-popup-close');



if (modalButtonCart !== null) {
modalButtonCart.forEach(function(item) {
  item.addEventListener('click', function() {
    modalCart.classList.add('modal-cart-show');
  });
});}

if (modalCartClose !== null) {
modalCartClose.addEventListener('click', function() {
  modalCart.classList.remove('modal-cart-show');
});} 

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.add('modal-show');

    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
});

close.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.remove('modal-show');
    modal.classList.remove('modal-error');
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
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

var buttonSlider = document.querySelectorAll('.features-slide-link');
var firstSlide = document.querySelector('.first-slide');
var secondSlide = document.querySelector('.second-slide');
var slidePrv = document.querySelector('.slide-prv');
var slideNext = document.querySelector('.slide-next');

for (var i = 0; i < buttonSlider.length; i++) {
  buttonSlider[i].onclick = function () {
     
      var buttonCurrent = document.querySelector('.button-current');
      buttonCurrent.classList.remove('button-current');
      this.classList.add('button-current');
  
      if (secondSlide.classList.contains('slider-current')) {
          secondSlide.classList.remove('slider-current');
          firstSlide.classList.add('slider-current')
      } else {
          firstSlide.classList.remove('slider-current');
          secondSlide.classList.add('slider-current');
      }
     
  }
};

slidePrv.addEventListener('click', function() {
  if (secondSlide.classList.contains('slider-current')) {
      secondSlide.classList.remove('slider-current');
      firstSlide.classList.add('slider-current')
  } else {
      firstSlide.classList.remove('slider-current');
      secondSlide.classList.add('slider-current');
  }
 
});

slideNext.addEventListener('click', function() {
  if (secondSlide.classList.contains('slider-current')) {
      secondSlide.classList.remove('slider-current');
      firstSlide.classList.add('slider-current')
  } else {
      firstSlide.classList.remove('slider-current');
      secondSlide.classList.add('slider-current');
  }
 
});

var buttonService = document.querySelectorAll('.service-slider-item');
var serviceSlide = document.querySelectorAll('.service-slide-item');

for (var i = 0; i < buttonService.length; ++i) {
	buttonService[i].addEventListener('click', function (event) {
		event.preventDefault(event);
        for (var j = 0; j < buttonService.length; ++j) {
          buttonService[j].classList.remove('slider-item-active');        
        }
        for (var h = 0; h < buttonService.length; ++h) {
            if (buttonService[h] == this) {
              buttonService[h].classList.add('slider-item-active');
                for (var k = 0; k < serviceSlide.length; ++k) {
                    serviceSlide[k].classList.remove('service-slide-active');
                }
                serviceSlide[h].classList.add('service-slide-active');
            }
        }
	})
};

