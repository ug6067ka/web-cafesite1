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
//

//main image
var pics_src = new Array(
  "brooke-cagle-8jp-6SjVibM-unsplash.jpg",
  "armin-lotfi-gURxlcD9I0U-unsplash.jpg",
  "roman-bozhko-OXXsAafHDeo-unsplash.jpg"
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

$(".accordion-wrap").on("click", function () {
  $(this).children().eq(1).slideToggle(300);
  $(this).children().eq(0).toggleClass("accordion-no-bar");
  $(this).siblings().find(".accordion-header").removeClass("accordion-gold");
  $(this).siblings().find(".accordion-header i").removeClass("rotate-fa");
  $(this).find(".accordion-header").toggleClass("accordion-gold");
  $(this).find(".fa").toggleClass("rotate-fa");

  $(".accordion-wrap .accordion-text")
    .not($(this).children().eq(1))
    .slideUp(300);
});

$(function () {
  $("div").click(function () {
    $("span").toggleClass("active");
  });
});

//header
// スクロールイベント
window.addEventListener("scroll", function () {
  var headerElement = document.getElementById("header"); // `#header`セレクタを取得
  var rect = headerElement.getBoundingClientRect(); //
  var y = rect.top + window.pageYOffset; // Y方向 (縦)にスクロール量を取得（pageYOffset：windowオブジェクト。現在表示位置のY座標を取得）
  if (y > 0) {
    // 変数yの値が0よりも
    headerElement.classList.remove("hidden"); // 大きければhiddensセレクタを削除する
  } else {
    headerElement.classList.add("hidden"); // そうでなければhiddensセレクタを追加する
  }
});
