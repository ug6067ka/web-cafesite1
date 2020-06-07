// const mySwiper = new Swiper(".swiper-container", {
//   // Optional parameters
//   //   direction: "vertical",
//   loop: true,
//   effct: "coverflow",

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination"
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar"
//   }
// });

var pics_src = new Array(
  "img_mainpage.png",
  "img2_mainpage.png",
  "img3_mainpage.png"
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

document.addEventListener("DOMContentLoaded", () => {
  var plusButton = document.querySelector(".btn-wrapper");
  var imgInfo = document.querySelector(".img-info");
  var closeButton = document.querySelector(".img-info__close-btn");
  // after clicking, turn on img-info
  plusButton.addEventListener("click", function () {
    // add class name "img-info--active" to imgInfo
    imgInfo.classList.add("img-info--active");
  });

  // after clicking, turn off img-info
  closeButton.addEventListener("click", function () {
    // remove class name "img-info--active" to imgInfo
    imgInfo.classList.remove("img-info--active");
  });
});

$(function () {
  $(".accordion li a").on("click", function () {
    $(this).next().slideToggle();
    // activeが存在する場合
    if ($(this).children(".accordion_icon").hasClass("active")) {
      // activeを削除
      $(this).children(".accordion_icon").removeClass("active");
    } else {
      // activeを追加
      $(this).children(".accordion_icon").addClass("active");
    }
  });
});
