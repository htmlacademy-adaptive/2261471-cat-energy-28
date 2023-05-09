// Убирает карту-картинку при наличии JS
let imgMap = document.querySelector('.contacts__map-image');

imgMap.classList.remove('contacts__map-image--nojs');

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
