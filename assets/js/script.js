const advertisingTopSwiper = new Swiper('.advertising-top-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  autoplay: {
    delay: 4000,
  },
});

const blocksAdSwiper = new Swiper('.blocks-ad-slider', {
  loop: true,
  slidesPerView: 3,
  autoHeight: true,
  pagination: {
    el: '.blocks-ad-pagination',
    type: 'bullets',
  },
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: '.swiper-blocks-ad-next',
    prevEl: '.swiper-blocks-ad-prev',
  },
});

const paymentSwiper = new Swiper('.payment-slider', {
  loop: true,
  autoHeight: true,
  spaceBetween: 5,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    728: {
      slidesPerView: 3,
    },
    425: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  }
});

const adSwiper = new Swiper('.ad-slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoHeight: true,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
  }
});

let menuToggle = $('.header-menu-toggle');
menuToggle.on('click', function (event) {
  event.preventDefault();
  $('.header-menu').slideToggle();
});

$(".still-btn").click(function (e) {
  e.preventDefault();
  $('.still').slideToggle();
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
});


$('.sections-wrap').click(function (e) {
  e.preventDefault();
  if (!$(this).hasClass('active-link')) {
    $(this).siblings().removeClass('active-link');
    $(this).addClass('active-link');
  }
});

