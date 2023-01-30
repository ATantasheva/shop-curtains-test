//слайдер на главной

$(document).ready(function() {
   //счетчик слайдов
   var currentSlide;
var slidesCount;
var sliderCounter = document.createElement("div");
sliderCounter.classList.add("slider__counter");

var updateSliderCounter = function (slick, currentIndex) {
  currentSlide = slick.slickCurrentSlide() + 1;
  slidesCount = slick.slideCount;
  $(sliderCounter).text(currentSlide + "/" + slidesCount);
};

$(".slider1").on("init", function (event, slick) {
  $(".slider1").append(sliderCounter);
  updateSliderCounter(slick);
});

$(".slider1").on("afterChange", function (event, slick, currentSlide) {
  updateSliderCounter(slick, currentSlide);
});
   $('.slider1').slick({
      dots:false,
      arrows: true,
      //adaptiveHeight: true,
      slidesToShow: 1,
      speed: 1000,
      easing: 'linear',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnFocus: false,
      pauseOnHover: false,
      draggable: true,
      swipe: true,
waitForAnimate: true,
//centerMode: true,
//variableWidth: true,
responsive: [ //адаптив
   {
      breakpoint: 380,
      settings: {
         arrows: false,
         dots:true,
      }
   }
],
   });
   });
//==========================================================================================================
   //слайдер - блок лучшие предложения
   $(document).ready(function() {
      //счетчик слайдов
      var currentSlide;
   var slidesCount;
   var sliderCounter = document.createElement("div");
   sliderCounter.classList.add("slider__counter");
   
   var updateSliderCounter = function (slick, currentIndex) {
     currentSlide = slick.slickCurrentSlide() + 1;
     slidesCount = slick.slideCount;
     $(sliderCounter).text(currentSlide + "/" + slidesCount);
   };
   
   $(".slider2").on("init", function (event, slick) {
     $(".slider2").append(sliderCounter);
     updateSliderCounter(slick);
   });
   
   $(".slider2").on("afterChange", function (event, slick, currentSlide) {
     updateSliderCounter(slick, currentSlide);
   });
      $('.slider2').slick({
         arrows: true,
         //adaptiveHeight: true,
         slidesToShow: 4,
         slidesToScroll: 4,
         speed: 1000,
         easing: 'linear',
         infinite: true,
         autoplay: false,
         autoplaySpeed: 3000,
         pauseOnFocus: false,
         pauseOnHover: false,
         draggable: true,
         swipe: true,
   waitForAnimate: true,
   //centerMode: true,
   //variableWidth: true,
   responsive: [ //адаптив
      {
         breakpoint: 379.98,
         settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            //centerMode: true,
   //variableWidth: true,  
    infinite: false,
         }
      }
   ],
      });
      });
//==========================================================================================
      //меню бургер
      $(document).ready(function() {
         $('.icon-menu').click(function(event){
            $('.icon-menu, .menu__mob, .header__list_pc, .header__search').toggleClass('active');
            $('body').toggleClass('lock');
            $('.header-item-mob, .mobail-logo__body').toggleClass('active1');
         })
      });

      $(document).ready(function () {
         // при событии клик на меню
         $('.header-item-mob, .mobail-logo__body').click(function (event) {
         //если у меню класс active1 то
            if  ( $('.header-item-mob, .mobail-logo__body')==(".active1")){
               // бургер и хедер удалить класс актив
            $('.icon-menu, .menu__mob, .header__list_pc, .header__search').removeClass('active');
      // отключаем блокировку
            $('body').removeClass('lock');}
      // иначе 
            else {
               // обратно присваиваем класс актив и блочим боди
               $('.icon-menu, .menu__mob, .header__list_pc, .header__search').toggleClass('active');
               $('body').toggleClass('lock');
            }
         
         });
      });
      
      //клик вне области
         $(document).mouseup( function(e){ // событие клика по веб-документу
            var div = $( ".menu__mob, .icon-menu" ); // тут указываем ID элемента
            if ( !div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
                  $('.icon-menu, .menu__mob, .header__list_pc, .header__search').removeClass('active');
                  $('body').removeClass('lock');
            }
         });
   //========================================================================================================
   //слайдер - блок УСЛУГИ
   $(document).ready(function() {
      //счетчик слайдов
      var currentSlide;
   var slidesCount;
   var sliderCounter = document.createElement("div");
   sliderCounter.classList.add("slider__counter");
   
   var updateSliderCounter = function (slick, currentIndex) {
     currentSlide = slick.slickCurrentSlide() + 1;
     slidesCount = slick.slideCount;
     $(sliderCounter).text(currentSlide + "/" + slidesCount);
   };
   
   $(".slider3").on("init", function (event, slick) {
     $(".slider3").append(sliderCounter);
     updateSliderCounter(slick);
   });
   
   $(".slider3").on("afterChange", function (event, slick, currentSlide) {
     updateSliderCounter(slick, currentSlide);
   });
      $('.slider3').slick({
         arrows: true,
         //adaptiveHeight: true,
         slidesToShow: 3,
         slidesToScroll: 3,
         speed: 1000,
         easing: 'linear',
         infinite: true,
         autoplay: false,
         autoplaySpeed: 3000,
         pauseOnFocus: false,
         pauseOnHover: false,
         draggable: true,
         swipe: true,
   waitForAnimate: true,
   //centerMode: true,
   //variableWidth: true,
   responsive: [ //адаптив
      {
         breakpoint: 379.98,
         settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            
            //centerMode: true,
   //variableWidth: true,  
    infinite: false,
         }
      }
   ],
      });
      });
//=======================================================================================================
//слайдер - блок АКЦИИ
$(document).ready(function() {
   //счетчик слайдов
   var currentSlide;
var slidesCount;
var sliderCounter = document.createElement("div");
sliderCounter.classList.add("slider__counter");

var updateSliderCounter = function (slick, currentIndex) {
  currentSlide = slick.slickCurrentSlide() + 1;
  slidesCount = slick.slideCount;
  $(sliderCounter).text(currentSlide + "/" + slidesCount);
};

$(".slider4").on("init", function (event, slick) {
  $(".slider4").append(sliderCounter);
  updateSliderCounter(slick);
});

$(".slider4").on("afterChange", function (event, slick, currentSlide) {
  updateSliderCounter(slick, currentSlide);
});
   $('.slider4').slick({
      arrows: true,
      //adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      easing: 'linear',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnFocus: false,
      pauseOnHover: false,
      draggable: true,
      swipe: true,
waitForAnimate: true,
//centerMode: true,
//variableWidth: true,
responsive: [ //адаптив
   {
      breakpoint: 379.98,
      settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots:true,
         //centerMode: true,
//variableWidth: true,  
 //infinite: false,
      }
   }
],
   });
   });