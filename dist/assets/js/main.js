$(window).on('load', function(){

    function fix_s(){
      if($(window).width() > 767){
        var b = $('.main').outerHeight() - $(window).height();
        if ($(window).scrollTop() >= b ) {
          $(".sidebar-box").addClass('stop');
          $(".sidebar-box").removeClass("fix");
        }
        else {
          $('.sidebar-box').removeClass('stop'); 
          $(".sidebar-box").addClass("fix");
        }
        $(window).scroll(function() {
          if ($(this).scrollTop() >= b ) {
            $(".sidebar-box").addClass('stop');
            $(".sidebar-box").removeClass("fix");
          }
          else {
            $('.sidebar-box').removeClass('stop'); 
            $(".sidebar-box").addClass("fix");
          }
        });
      }
    }
  
    setTimeout(function(){
  
      $(".loader").hide();
  
      fix_s();
      
    },1000);
  
  
  });
  
  $(document).ready(function () {
      
    function fix_s(){
        if($(window).width() > 767){
          var b = $('.main').outerHeight() - $(window).height();
          if ($(window).scrollTop() >= b ) {
            $(".sidebar-box").addClass('stop');
            $(".sidebar-box").removeClass("fix");
          }
          else {
            $('.sidebar-box').removeClass('stop'); 
            $(".sidebar-box").addClass("fix");
          }
          $(window).scroll(function() {
            if ($(this).scrollTop() >= b ) {
              $(".sidebar-box").addClass('stop');
              $(".sidebar-box").removeClass("fix");
            }
            else {
              $('.sidebar-box').removeClass('stop'); 
              $(".sidebar-box").addClass("fix");
            }
          });
        }
    }

    $(window).resize(function(){
      fix_s();
    }); 
  
    $(".header .btn-search").on('click' , function(){
      if($(this).hasClass('close')){
        $(".header-search input").val('');
      }
      $(this).toggleClass('close');
      $(".header-search").toggleClass('active');
    });
  
    $(".btn-menu").on('click' , function(){
      $(this).toggleClass('show');
      $("#menu").toggleClass('show');
    });
    
    $(".menu-item .title .pointer").on('click' , function(){
      $(this).toggleClass('active');
      $(this).parent().next(".box").slideToggle();
    });
  
    $(".btn-callback").on('click' , function(){
      $("#model-window__callback").show();
    });
  
    $(".btn-sms").on('click' , function(){
      $("#model-window__write").show();
    });
    
    $(".model-window .popup").on('click', function () {
      event.stopPropagation();
    });
    
    $(".model-window .close,.model-window").on('click' , function(){
      $(".model-window").hide();
    });
  
    $(".sidebar-nav .title .pointer").on('click' , function(){
      $(this).toggleClass('active');
      $(this).parent().parent().toggleClass("active");
      $(".sidebar-list").slideToggle();
      jcf.replaceAll();
    });
  
    $(".content-section table").wrap("<div class='scroll_table'></div>");
    $(".section-wrap.gray").append("<i></i>");
    
    // wow
  
    var myWow = new WOW(
      {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       -400,
        mobile:       true,      
        live:         true,
        scrollContainer: null
      }
    );
    myWow.init();
  
  
    // jcf
  
    jcf.setOptions('Select', {
      wrapNative: false, 
      wrapNativeOnMobile : false,
      fakeDropInBody : false,
      useCustomScroll : false
    });
    
    jcf.replaceAll();
  
  
    // btn up
    
    $('.btn-up').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 1500);
      return false;
    });
  
  
    // tabs
  
    (function($){				
      jQuery.fn.lightTabs = function(options){
    
        var create_work_Tabs = function(){
          var tabes = this,
          i = 0;
          
          var showPage = function(i){
            $(tabes).children(".article-tabs__title").children("li").removeClass("active");
            $(tabes).children(".article-tabs__title").children("li").eq(i).addClass("active");
            $(tabes).children(".article-tabs__items").children(".item").hide().removeClass("active");
            $(tabes).children(".article-tabs__items").children(".item").eq(i).show().addClass("active");
          }
                    
          showPage(0);				
          
          $(tabes).children(".article-tabs__title").children("li").each(function(index, element){
            $(element).attr("data-page", i);
            i++;                        
          });
          
          $(tabes).children(".article-tabs__title").children("li").click(function(){
            showPage(parseInt($(this).attr("data-page")));
          });				
        };		
        return this.each(create_work_Tabs);
      };	
    })(jQuery);
    
    $(".article-tabs").lightTabs();
  
  
    // accordion
  
    $('.accordion > li:eq(0) .title').addClass('active').next().slideDown();
  
    $('.accordion .title').click(function(j) {
        var dropDown = $(this).parents('li').find('.text-wrap');
  
        $(this).parents('.accordion').find('.text-wrap').not(dropDown).slideUp();
  
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).parents('.accordion').find('.title.active').removeClass('active');
            $(this).addClass('active');
        }
  
        dropDown.stop(false, true).slideToggle();
  
        j.preventDefault();
    });
  
  
    // slick
  
    let project_slider = $('.project-slider');
    let technolog_slider = $('.technolog-slider');
    let clients_slider = $('.clients-section .clients-slider');
    let project_section = $('.project-section');
    let article_slider = $(".article-slider ul");
    let services_slider = $(".services-slider ul");
    let history_data = $(".history-data");
    let history_for = $(".history-info");
    let history_foto = $(".history-foto .list");
    let awards_slider = $(".awards-slider");
  
    history_for.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      fade: true,
      swipe:false,
      asNavFor: '.history-data'
    });
  
    history_data.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite:false,
      asNavFor: '.history-info',
      dots: false,
      centerMode: false,
      arrows: true,
      focusOnSelect: true,
      cssEase: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      nextArrow: '<i class="arrow-right slick-arrow"></i>',
      prevArrow: '<i class="arrow-left slick-arrow"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
        
  
    project_slider.slick({
      infinite: true,
      dots:false,
      speed: 800,
      slidesToShow:1,
      slidesToScroll: 1,
      arrows:true,
      fade:true,
      cssEase: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      nextArrow: '<i class="arrow-right  slick-arrow_w"></i>',
      prevArrow: '<i class="arrow-left slick-arrow_w"></i>'
    });
  
    project_slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        let bg_img =  $('.slick-current').find(".project-bg").attr('src');
        project_section.css('background-image', 'url("' + bg_img + '")');
    });
  
    technolog_slider.slick({
      infinite: true,
      dots:false,
      speed: 1200,
      slidesToShow:4,
      slidesToScroll: 1,
      arrows:true,
      cssEase: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      nextArrow: '<i class="arrow-right slick-arrow"></i>',
      prevArrow: '<i class="arrow-left slick-arrow"></i>',
      responsive: [
      {
        breakpoint:1199,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint:400,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    });
    
    clients_slider.slick({
      infinite: true,
      dots:false,
      speed: 1000,
      autoplay: true,
      slidesToShow:7,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      arrows:true,
      cssEase: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      nextArrow: '<i class="arrow-right slick-arrow"></i>',
      prevArrow: '<i class="arrow-left slick-arrow"></i>',
      responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint:400,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    });
  
    $('.banner-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.banner-nav'
    });
  
    article_slider.slick({
      infinite: true,
      dots:false,
      speed: 800,
      slidesToShow:2,
      slidesToScroll: 1,
      arrows:true,
      fade:false,
      cssEase: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      nextArrow: '<i class="arrow-right  slick-arrow"></i>',
      prevArrow: '<i class="arrow-left slick-arrow"></i>',
      responsive: [
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  
    history_foto.slick({
      infinite: true,
      dots:false,
      speed: 800,
      slidesToShow:3,
      slidesToScroll: 1,
      arrows:true,
      fade:false,
      responsive: [
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint:400,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  
    services_slider.slick({
      infinite: true,
      dots:false,
      speed: 800,
      slidesToShow:2,
      slidesToScroll: 1,
      arrows:true,
      fade:false,
      cssEase: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      nextArrow: '<i class="arrow-right  slick-arrow"></i>',
      prevArrow: '<i class="arrow-left slick-arrow"></i>',
      responsive: [
        {
          breakpoint:600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  
    awards_slider.slick({
      infinite: true,
      dots:true,
      speed: 1600,
      slidesToShow:1,
      slidesToScroll: 1,
      arrows:false,
      fade:true,
      cssEase: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
    });
    
  
    $('.banner-nav').slick({
      slidesToShow: 9,
      slidesToScroll: 1,
      asNavFor: '.banner-slider',
      vertical:true,
      verticalSwiping:true,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1390,
          settings: {
            slidesToShow: 7,
          }
        }
      ]
    });
  
    function slick_services(){
      if($(window).width() < 1023){
  
        $('.services-list').not('.slick-initialized').slick({
          infinite: true,
          dots:false,
          speed: 700,
          slidesToShow:2,
          arrows:true,
          fade:false,
          adaptiveHeight: true,
          nextArrow: '<i class="arrow-right slick-arrow slick-arrow_w"></i>',
          prevArrow: '<i class="arrow-left slick-arrow slick-arrow_w"></i>',
          responsive: [
            {
              breakpoint: 670,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
          
        }); 
      } else{
        $(".services-list.slick-initialized").slick("unslick");
      }
    }
  
    slick_services();
  
    $(window).on('resize', function(){
      slick_services();
    });
  
  
  });
  
  
  
  if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;
        
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
  }