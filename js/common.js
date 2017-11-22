function initMap(){
     var mapEl = document.getElementById('contact_map');
     var image = 'https://codeman23.github.io/interior/img/pinup.png';
     var style = [
         {
             "featureType": "all",
             "elementType": "labels.text.fill",
             "stylers": [
                 {
                     "saturation": 36
                 },
                 {
                     "color": "#000000"
                 },
                 {
                     "lightness": 40
                 }
             ]
         },
         {
             "featureType": "all",
             "elementType": "labels.text.stroke",
             "stylers": [
                 {
                     "visibility": "on"
                 },
                 {
                     "color": "#000000"
                 },
                 {
                     "lightness": 16
                 }
             ]
         },
         {
             "featureType": "all",
             "elementType": "labels.icon",
             "stylers": [
                 {
                     "visibility": "off"
                 }
             ]
         },
         {
             "featureType": "administrative",
             "elementType": "geometry.fill",
             "stylers": [
                 {
                     "color": "#000000"
                 },
                 {
                     "lightness": 20
                 }
             ]
         },
         {
             "featureType": "administrative",
             "elementType": "geometry.stroke",
             "stylers": [
                 {
                     "color": "#000000"
                 },
                 {
                     "lightness": 17
                 },
                 {
                     "weight": 1.2
                 }
             ]
         },
         {
             "featureType": "landscape",
             "elementType": "geometry",
             "stylers": [
                 {
                     "color": "#000000"
                 },
                 {
                     "lightness": 20
                 }
             ]
         },
         {
             "featureType": "poi",
             "elementType": "geometry",
             "stylers": [
                 {
                     "color": "#000000"
                 },
                 {
                     "lightness": 21
                 }
             ]
         },
         {
             "featureType": "road.highway",
             "elementType": "geometry.fill",
             "stylers": [
                 {
                     "color": "#000000"
                 },
                 {
                     "lightness": 17
                 }
             ]
         },
         {
             "featureType": "road.highway",
             "elementType": "geometry.stroke",
             "stylers": [
                 {
                     "color": "#000000"
                 },
                 {
                     "lightness": 29
                 },
                 {
                     "weight": 0.2
                 }
             ]
         },
         {
             "featureType": "road.arterial",
             "elementType": "geometry",
             "stylers": [
                 {
                     "color": "#000000"
                 },
                 {
                     "lightness": 18
                 }
             ]
         },
         {
             "featureType": "road.local",
             "elementType": "geometry",
             "stylers": [
                 {
                     "color": "#000000"
                 },
                 {
                     "lightness": 16
                 }
             ]
         },
         {
             "featureType": "transit",
             "elementType": "geometry",
             "stylers": [
                 {
                     "color": "#000000"
                 },
                 {
                     "lightness": 19
                 }
             ]
         },
         {
             "featureType": "water",
             "elementType": "geometry",
             "stylers": [
                 {
                     "color": "#000000"
                 },
                 {
                     "lightness": 17
                 }
             ]
         }
     ];
     var uluru = {
     lat: 45.023418,
     lng: 38.972636
     };
    
     var map = new google.maps.Map(mapEl, {
     zoom: 14,
     center: uluru,
     styles: style
     });
    
     var marker = new google.maps.Marker({
     position: uluru,
     map: map,
     icon: image
     });
    
};




$(document).ready(function() {

    //Owl carousel для карусель для лого с карточками//
    $(".carousel-eq").owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2,
            },
            580:{
                items:2,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
    });

    //Owl carousel для карусель для лого с карточками//
    //Owl carousel для карусель для лого партнеры//
    $(".carousel-brands").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2,
            },
            580:{
                items:2,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
    });

    //Owl carousel для карусель для лого партнеры//

    $(".mouse-icon").click(function() {
        $("html, body").animate({
            scrollTop : $(".s-adv").offset().top
        }, 1000);
    });

    $(".toggle-mnu").click(function () {
        $(this).toggleClass("on");
        $(this).parent().next().next().find(".main-mnu").slideToggle();
        return false;
    });
    

    //Функция синхронизирующая открытие меню

    $(".main-foot .toggle-mnu").click(function() {
        $("html, body").animate({scrollTop: $(document).height() + 200}, "slow");
        return false;
    });


    //magnific pop up для портфолио работ//

    $(".portfolio-item").each(function (e) {

        var th = $(this);
        th.attr("href", "#portfolio-img-" + e)
            .find(".portfolio-popup")
                .attr("id", "portfolio-img-" + e);
    });

    $(".portfolio-item, a[href='#callback']").magnificPopup({
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300,
        type: "inline"
    });

    //magnific pop up//

    //Cкрипт для вывода форм с названием заданным в html файлк//

    $("a[href='#callback']").click(function () {
        var dataForm= $(this).data("form");
        var dataText= $(this).data("text");
        $(".form-callback h3").text(dataText);
        $(".form-callback [name=admin-data]").val(dataForm);
    });

    //Cкрипт для вывода форм с названием заданным в html файлк//

    $('.mfp-gallery').each(function () {
       $(this).magnificPopup({
           delegate: 'a',
           mainClass: 'mfp-zoom-in',
           type: 'image',
           tLoading: '',
           gallery:{
               enabled:true,
           },
           removalDelay: 300,
           callbacks: {
               beforeChange: function() {
                   this.items[0].src = this.items[0].src + '?=' + Math.random();
               },
               open: function() {
                   $.magnificPopup.instance.next = function() {
                       var self = this;
                       self.wrap.removeClass('mfp-image-loaded');
                       setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
                   }
                   $.magnificPopup.instance.prev = function() {
                       var self = this;
                       self.wrap.removeClass('mfp-image-loaded');
                       setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
                   }
               },
               imageLoadComplete: function() {
                   var self = this;
                   setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
               }
           }
       });
    });

    $('.mfp-certificate').magnificPopup({
        mainClass: 'mfp-zoom-in',
        type: 'image',
        tLoading: '',
        gallery:{
            enabled:true,
        },
        removalDelay: 300,
        callbacks: {
            beforeChange: function() {
                this.items[0].src = this.items[0].src + '?=' + Math.random();
            },
            open: function() {
                $.magnificPopup.instance.next = function() {
                    var self = this;
                    self.wrap.removeClass('mfp-image-loaded');
                    setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
                }
                $.magnificPopup.instance.prev = function() {
                    var self = this;
                    self.wrap.removeClass('mfp-image-loaded');
                    setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
                }
            },
            imageLoadComplete: function() {
                var self = this;
                setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
            }
        }
    });
    //magnific pop up//

    //функция по waypoints/ + скрипт с наберсами(анимац)


    $(".s-adv").waypoint(function() {
        $({blurRadius: 2}).animate({blurRadius: 0}, {
            duration: 400,
            easing: 'swing',
            step: function() {
                $(".s-adv-item h3 span").css({
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                });
            }
        });
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
        $(".s-adv-item h3 span").each(function() {
            var tcount = $(this).data("count");
            $(this).animateNumber({ number: tcount,
                    easing: 'easeInQuad',
                    "font-size": "30px",
                    numberStep: comma_separator_number_step},
                1000);
        });
        this.destroy();
    }, {
        offset: '70%'
    });

    //функция по waypoints/

    //КОД ДЕЛАЕТ ИЗ ТЭГА IMG ТЭГ SVG!!!!!!

    jQuery('img.img_svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

    //КОД ДЕЛАЕТ ИЗ ТЭГА IMG ТЭГ SVG!!!!!!

    //Equalheight плагин для выравнивания длинны айтемов//

    function heightses() {
        $(".s-direct .item-vertical p").height('auto').equalHeights();
        $(".carousel-text").height('auto').equalHeights();
        $(".testimonials-desc").height('auto').equalHeights();
    }
    $(window).resize(function () {
        heightses();
    });

    heightses();


    //Equalheight плагин для выравнивания длинны айтемов//

    //selectize стилизует селектор на форме//

    $("form select").selectize();


    //E-mail Ajax Send ФОРМА ОТПРАВКИ ПИСЬМА
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(".form-callback .success").addClass("active");
            //th.find(".success").addClass("active");
            setTimeout(function() {
                // Done Functions
                $(".form-callback .succes").removeClass("active");
                //th.find(".success").removeClass("active");
                th.trigger("reset");
                $.magnificPopup.close();
            }, 3000);
        });
        return false;
    });

    //E-mail Ajax Send ФОРМА ОТПРАВКИ ПИСЬМА

    //Кнопка для скрола страницы вверх меню//

    $('body').append('<div class="top"><i class="fa fa-angle-double-up">');

    $("body").on("click", ".top", function () { // для append элементов
    //$(".top").click(function() { // для обычных элементов но работает и так
        $("html, body").animate({scrollTop: 0}, "slow");
    });

    // функции для появления и скрытия кнопки при скроллинге//

    $(window).scroll(function () {
        if($(this).scrollTop() > $(this).height()) {
            $(".top").addClass("active");
        } else {
            $(".top").removeClass("active");
        }
    });

    //Кнопка для скрола страницы вверх меню//



});