// main image
var pics_src = new Array(
  "./images/brooke-cagle-8jp-6SjVibM-unsplash.jpg",
  "./images/armin-lotfi-gURxlcD9I0U-unsplash.jpg",
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

// acordion menu
function Accordion(obj) {
  // `wrap_id`で指定した要素が無かったら、以降は実行しない
  if (!document.querySelector(`#${obj.wrap_id}`)) {
    return false;
  }

  // 関数呼び出し時の引数をもとに変数を定義
  const ElmItems = document.querySelectorAll(
    `#${obj.wrap_id} .${obj.item_class}`
  );
  const ClassAccordionElm = obj.accordion_class;
  const ElmAccordions = document.querySelectorAll(
    `#${obj.wrap_id} .${ClassAccordionElm}`
  );
  const Transition = obj.accordion_transition
    ? obj.accordion_transition
    : ".4s";
  const AttrToggle = obj.toggle_attr ? obj.toggle_attr : "data-active";
  const DefaultOpen = obj.default_is_open ? obj.default_is_open : false;
  let arryAccordionElmHeight = new Array();

  // アコーディオンさせる要素の高さをそれそれ取得して配列に格納
  // その後、`default_is_open`が`false`なら高さを0にする
  Array.from(ElmAccordions).forEach((element) => {
    element.style.height = "auto";
    element.style.overflow = "hidden";
    element.style.transition = Transition;
    arryAccordionElmHeight.push(element.clientHeight);
    if (!DefaultOpen) {
      element.style.height = "0";
    }
  });

  Array.from(ElmItems).forEach((element, index) => {
    // `default_is_open`が`true`なら、
    //     `item_class`にアコーディオンが開いている時に付与する`toggle_attr`の属性を設定する
    //     （アコーディオンが閉じている時は、`toggle_attr`の属性は削除される）
    //     アコーディオンする要素に`height`を設定する（autoから0にすると`transition`を設定してもアニメーションしないから、`height`を数値で設定する）
    if (DefaultOpen) {
      element.setAttribute(AttrToggle, "");
      ElmAccordions[index].style.height = `${arryAccordionElmHeight[index]}px`;
    }

    // `item_class`に`addEventListener`を設定
    element.addEventListener("click", (event) => {
      // クリック時の要素と属性の有無を取得
      // （クリック時に`toggle_attr`の属性を付け外しすることで、アコーディオンが開いているかどうかを判別する）
      let target = event.currentTarget;
      let hasAttr = target.hasAttribute(AttrToggle);
      let elmAccordion;

      // アコーディオンする要素を取得して、`elmAccordion`に格納
      target.childNodes.forEach((childItem) => {
        if (childItem.className == ClassAccordionElm) {
          elmAccordion = childItem;
        }
      });

      // `toggle_attr`の属性の有無でアコーディオンを「開く」か「閉じる」か、どちらかの処理を実行
      if (hasAttr) {
        target.removeAttribute(AttrToggle);
        elmAccordion.style.height = "0";
      } else {
        target.setAttribute(AttrToggle, "");
        elmAccordion.style.height = `${arryAccordionElmHeight[index]}px`;
      }
    }); // / addEventListener
  }); // / forEach
}

// ここで関数を呼び出し
Accordion({
  wrap_id: "first-accordion",
  item_class: "p-accordion__item",
  accordion_class: "p-accordion__content",
  accordion_transition: ".4s",
  toggle_attr: "data-active",
  default_is_open: false,
});

// var swiper = new Swiper(".swiper-container", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   centeredSlides: true,
//   slidesPerView: 4,
//   spaceBetween: 1,
//   initialSlide: 0,
//   speed: 500,
//   loop: true,
// });

// var swiper = new Swiper(".swiper-container", {
//   slidesPerView: 3,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 0,
  initialSlide: 2,
  loop: true,
});
