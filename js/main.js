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
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    responsive: [
            {
                breakpoint:1094,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: false,
                }
            },
            {
              breakpoint: 767,
              settings:{
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: false,
              }            
          }
            ]
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

  // scroll
  $('a[href^="#"]').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 700,
      easing: "linear"
    });
    return false;
  });
// scroll to top
$(window).scroll(function() {
  if($(this).scrollTop() > 200) {
    $('.header').addClass('with-bg');
  } else {
    $('.header').removeClass('with-bg');
  };
});
  
// map
//50.00559189620925, 36.22920859707306
function renderMap(coord1, coord2, popupText){

  const map = L.map('map').setView([coord1, coord2], 15);

const customMarker = L.icon({
  iconUrl: '../../Monticello-JQUERY_PROJECT/assets/images/markerIcon.png',

  iconSize:     [106, 106], 
  iconAnchor:   [22, 94], 
  popupAnchor:  [30, -70] 
});

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
}).addTo(map);

L.marker([coord1, coord2], {icon: customMarker}).addTo(map)
    .bindPopup(popupText)
    .openPopup();
}
// link to Ukraine
$('.map-section').on('click', function (event) {
  event.preventDefault();
  // L.remove();
  renderMap(50.00559189620925, 36.22920859707306, 'Найбільша площа Европи');
});
// lonk to hongkong
$('#hongkong').on('click', function (event) {;
  event.preventDefault();
  renderMap(22.31321950088359, 114.18310920613088, 'Hong Kong');
});

// link to new york
$('#newyork').on('click', function (event) {
  event.preventDefault();
  renderMap(40.648013862786186, -73.78004719887124, 'New York');
});



// contacts form visability
function toggleContactBtn(e) {
  e.preventDefault();
  $('#contact .container').toggleClass('active');
}

$('.get-intouch').on('click', function (event) {
  toggleContactBtn(event);
});

$('.contacts-close-btn').on('click', function (event) {
  event.preventDefault();
  $('#contact .container').removeClass('active');
});


// Form validation
const NAME_MIN_LENGHT = 5;
const mediumRegex = new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]+$");
let isValidEmail = false;
let isValidName = false;
function testEmailRegex(value) {
    return mediumRegex.test(value);
}

function checkNameLenght() {
    const valueLenght = window.inputName.value.length;
    const diff = valueLenght < NAME_MIN_LENGHT ? NAME_MIN_LENGHT - valueLenght : 0;

    if(diff) {
        window.nameDiffCount.textContent = diff;
        window.nameLenghtHelp.classList.remove('d-none');
    } else {
        window.nameLenghtHelp.classList.add('d-none');
        isValidName = true;
    }
};

function resetValidation() {
    window.nameHelp.classList.add('d-none');
    window.emailHelp.classList.add('d-none');
}
function resetValue() {
  window.inputName.value = '';
  window.inputEmail.value = '';
}

function validateForm(event) {
    event.preventDefault();
    resetValidation();

    const name = window.inputName.value;
    const email = window.inputEmail.value;

    if(!name) {
        window.nameHelp.classList.remove('d-none');
        return false;
    }
    if(!email) {
        window.emailHelp.classList.remove('d-none');
        return false;
    }

    if(!testEmailRegex(email)) {
        window.emailHelp.classList.remove('d-none');
    }
    if(testEmailRegex(email) && email) {
      isValidEmail = true;
    }
    ((isValidEmail) && (isValidName)) ? ($('.btn-submit').prop('disabled', false)) : ($('.btn-submit').prop('disabled', true));
}

async function formSubmit(event) {
    event.preventDefault();

    const name = window.inputName.value;
    const email = window.inputEmail.value;

    if(!name || !email) {
        return false;
    }


    let apiToken = "6601454304:AAGZE_BwzWfc-VyXuONm3wJq8a9CXkUkOV0";
    let chatId = "-1001867463614";
    let text = `
    <b>Name: </b>${name}  
    <b>Email: </b>${email}
    `;

    let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage`;

    const response = await fetch(urlString, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: 'HTML'
        })
    });

    const resp = await response.json();
    console.log(resp);
    if(resp.ok){
    alert("Ваша заявка прийнята!");
    resetValue();
    $('#contact .container').removeClass('active');
    } else {
      return alert('Щось пішло не так, спробуйте заповнити форму знову!')
    }


}

window.inputName.addEventListener('input', checkNameLenght);
window.inputName.addEventListener('change', validateForm);
window.inputEmail.addEventListener('change', validateForm);
window.contactForm.addEventListener('submit', formSubmit);

// scroll to-up
$(window).scroll(function() {
  var toTop = $('.to-top');
  if ($(this).scrollTop() > 100) {
    toTop.addClass('active');
  } else {
    toTop.removeClass('active');
  }
});
});

