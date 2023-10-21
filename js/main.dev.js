"use strict";

$(document).ready(function () {
  $('.products-list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    responsive: [{
      breakpoint: 1380,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true
      }
    }, {
      breakpoint: 968,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }]
  });
  $('.partners-list').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }]
  });

  function toggleMenu(e) {
    e.preventDefault();
    $('body').toggleClass('fixed');
    $('.hamburger').toggleClass('is-active');
    $('.header .nav_list').toggleClass('active');
    $('.header').toggleClass('menu-open');
    $('.footer').toggleClass('active');
  }

  $('.hamburger').on('click', function (event) {
    toggleMenu(event);
  });
  var backgroundImages = ['linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage1_desktop-2x.jpg)', 'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage2_desktop-2x.jpg)', 'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage3_desktop-2x.jpg)'];
  var backgroundImagesTablet = ['linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage1_tablet-2x.jpg)', 'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage2_tablet-2x.jpg)', 'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage3_tablet-2x.jpg)'];
  var backgroundImagesMobile = ['linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage1_mobile-2x.jpg)', 'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage2_mobile-2x.jpg)', 'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage3_mobile-2x.jpg)'];
  var textContents = ['find your own style', 'expand your horizons', 'discover new options'];
  var currentIndex = 0;
  $('#btn-next').on('click', function (event) {
    var windowWidth = $(window).width();

    if (windowWidth > 1199) {
      $('.hero').css('background-image', backgroundImages[currentIndex]);
    } else if (windowWidth < 1200 && windowWidth > 767) {
      $('.hero').css('background-image', backgroundImagesTablet[currentIndex]);
    } else {
      $('.hero').css('background-image', backgroundImagesMobile[currentIndex]);
    }

    ;
    $('.hero .section-title').text(textContents[currentIndex]);
    currentIndex = (currentIndex + 1) % backgroundImages.length;
  });
  $('#btn-prev').on('click', function (event) {
    var windowWidth = $(window).width();

    if (windowWidth > 1199) {
      $('.hero').css('background-image', backgroundImages[currentIndex]);
    } else if (windowWidth < 1200 && windowWidth > 767) {
      $('.hero').css('background-image', backgroundImagesTablet[currentIndex]);
    } else {
      $('.hero').css('background-image', backgroundImagesMobile[currentIndex]);
    }

    ;
    $('.hero .section-title').text(textContents[currentIndex]);
    currentIndex > 0 ? currentIndex = (currentIndex - 1) % backgroundImages.length : currentIndex = backgroundImages.length - 1;
  });
  $('#btn-current').on('click', function (event) {
    var windowWidth = $(window).width();
    currentIndex = Math.ceil(backgroundImages.length / 2);

    if (windowWidth > 1199) {
      $('.hero').css('background-image', backgroundImages[currentIndex]);
    } else if (windowWidth < 1200 && windowWidth > 767) {
      $('.hero').css('background-image', backgroundImagesTablet[currentIndex]);
    } else {
      $('.hero').css('background-image', backgroundImagesMobile[currentIndex]);
    }

    ;
    $('.hero .section-title').text(textContents[currentIndex]);
  });
});