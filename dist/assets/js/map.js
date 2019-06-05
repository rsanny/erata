$(window).on('load' , function(){

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.803841, 37.531595],
                zoom: 7
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'InterTrust',
                balloonContent: 'г. Москва, ул. Усиевича, д. 3'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../assets/img/marker.png',
                // Размеры метки.
                iconImageSize: [36, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });
    
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    
    });
    
});
