// Sticky Header
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".main_h").addClass("sticky");
  } else {
    $(".main_h").removeClass("sticky");
  }
});

// Mobile Navigation
$(".mobile-toggle").click(function () {
  if ($(".main_h").hasClass("open-nav")) {
    $(".main_h").removeClass("open-nav");
  } else {
    $(".main_h").addClass("open-nav");
  }
});

$(".main_h li a").click(function () {
  if ($(".main_h").hasClass("open-nav")) {
    $(".navigation").removeClass("open-nav");
    $(".main_h").removeClass("open-nav");
  }
});

// navigation scroll lijepo radi materem
$("nav a").click(function (event) {
  var id = $(this).attr("href");
  var offset = 70;
  var target = $(id).offset().top - offset;
  $("html, body").animate(
    {
      scrollTop: target,
    },
    500
  );
  event.preventDefault();
});

// main image
var pics_src = new Array(
  "./images/brooke-cagle-8jp-6SjVibM-unsplash.jpg",
  "./images/menulist_coffee.jpg",
  "./images/roman-bozhko-OXXsAafHDeo-unsplash.jpg"
);
var num = -1;

slideshow_timer();

function slideshow_timer() {
  if (num == 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic").src = pics_src[num];
  setTimeout("slideshow_timer()", 4000);
}

//
var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  slidesPerView: 3.5,
  spaceBetween: 1,
  initialSlide: 0,
  speed: 500,
  loop: true,
});
