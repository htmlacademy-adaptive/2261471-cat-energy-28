let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Убирает карту-картинку при наличии JS
let imgMap = document.querySelector('.contacts__map-image');

imgMap.classList.add('contacts__map-image--nojs');

// Добавляет интерактивную карту
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [59.968425, 30.315028],
      zoom: 17,
      controls: ["zoomControl"]
    });

    var myPlacemark = new ymaps.Placemark([59.968510, 30.317776], {
      hintContent: 'HTML-Academy',
      balloonContent: 'тут Ваш адрес'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/map-pin.svg',
      iconImageSize: [57, 53],
      iconImageOffset: [-25, -45]
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
  }
