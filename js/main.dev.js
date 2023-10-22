"use strict";

$(document).ready(function () {
  $('.hero').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 700,
    slidesToShow: 1,
    vertical: true
  });
  $('.news-list').slick({
    centerMode: true,
    centerPadding: '30px',
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    responsive: [{
      breakpoint: 1380,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
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
  }); // scroll

  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 700,
      easing: "linear"
    });
    return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.header').addClass('with-bg');
    } else {
      $('.header').removeClass('with-bg');
    }

    ;
  }); // map

  var map = L.map('map').setView([50.00559189620925, 36.22920859707306], 15);
  var customMarker = L.icon({
    iconUrl: '../assets/images/marker.png',
    iconSize: [106, 106],
    iconAnchor: [22, 94],
    popupAnchor: [30, -70]
  });
  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
  }).addTo(map);
  L.marker([50.00559189620925, 36.22920859707306], {
    icon: customMarker
  }).addTo(map).bindPopup('Найбільша площа Европи').openPopup(); // 
});