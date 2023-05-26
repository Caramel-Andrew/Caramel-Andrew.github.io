var slide = document.getElementById('led-slider');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var list1 = document.getElementById('list1');
var list2 = document.getElementById('list2');
var list3 = document.getElementById('list3');
var list4 = document.getElementById('list4');
var list5 = document.getElementById('list5');
var bar1 = document.getElementById('bar1');
var bar2 = document.getElementById('bar2');
var bar3 = document.getElementById('bar3');
var bar4 = document.getElementById('bar4');
var bar5 = document.getElementById('bar5');

// クリックイベント

// next.addEventListener('click', nextClick);
// prev.addEventListener('click', prevClick);

// function nextClick() {
//   if (slide.classList.contains('led-slider1') === true) {
//     slide.classList.remove('led-slider1');
//     slide.classList.add('led-slider2');

//     bar1.style.width = "0px";
//     bar1.style.transition = "0.6s ease-out"
//     bar2.style.width = "100%";
//     bar2.style.transition = "0.4s ease-out"
//     count = 0;
//   } else if (slide.classList.contains('led-slider2') === true) {
//     slide.classList.remove('led-slider2');
//     slide.classList.add('led-slider3');

//     bar2.style.width = "0px";
//     bar2.style.transition = "0.6s ease-out"
//     bar3.style.width = "100%";
//     bar3.style.transition = "0.4s ease-out"
//     count = 0;
//   } else if (slide.classList.contains('led-slider3') === true) {
//     slide.classList.remove('led-slider3');
//     slide.classList.add('led-slider4');

//     bar3.style.width = "0px";
//     bar3.style.transition = "0.6s ease-out"
//     bar4.style.width = "100%";
//     bar4.style.transition = "0.4s ease-out"
//     count = 0;
//   } else if (slide.classList.contains('led-slider4') === true) {
//     slide.classList.remove('led-slider4');
//     slide.classList.add('led-slider5');

//     bar4.style.width = "0px";
//     bar4.style.transition = "0.6s ease-out"
//     bar5.style.width = "100%";
//     bar5.style.transition = "0.4s ease-out"
//     count = 0;
//   } else {
//     slide.classList.remove('led-slider5');
//     slide.classList.add('led-slider1');

//     bar5.style.width = "0px";
//     bar5.style.transition = "0.6s ease-out"
//     bar1.style.width = "100%";
//     bar1.style.transition = "0.4s ease-out"
//     count = 0;
//   }
// };

// function prevClick() {
//   if (slide.classList.contains('led-slider1') === true) {
//     slide.classList.remove('led-slider1');
//     slide.classList.add('led-slider5');

//     bar1.style.width = "0px";
//     bar1.style.transition = "0.6s ease-out"
//     bar5.style.width = "100%";
//     bar5.style.transition = "0.4s ease-out"
//     count = 0;
//   } else if (slide.classList.contains('led-slider2') === true) {
//     slide.classList.remove('led-slider2');
//     slide.classList.add('led-slider1');

//     bar2.style.width = "0px";
//     bar2.style.transition = "0.6s ease-out"
//     bar1.style.width = "100%";
//     bar1.style.transition = "0.4s ease-out"
//     count = 0;
//   } else if (slide.classList.contains('led-slider3') === true) {
//     slide.classList.remove('led-slider3');
//     slide.classList.add('led-slider2');

//     bar3.style.width = "0px";
//     bar3.style.transition = "0.6s ease-out"
//     bar2.style.width = "100%";
//     bar2.style.transition = "0.4s ease-out"
//     count = 0;
//   } else if (slide.classList.contains('led-slider4') === true) {
//     slide.classList.remove('led-slider4');
//     slide.classList.add('led-slider3');

//     bar4.style.width = "0px";
//     bar4.style.transition = "0.6s ease-out"
//     bar3.style.width = "100%";
//     bar3.style.transition = "0.4s ease-out"
//     count = 0;
//   } else {
//     slide.classList.remove('led-slider5');
//     slide.classList.add('led-slider4');

//     bar5.style.width = "0px";
//     bar5.style.transition = "0.6s ease-out"
//     bar4.style.width = "100%";
//     bar4.style.transition = "0.4s ease-out"
//     count = 0;
//   }
// };

// インジケーター

// list1.addEventListener('click', click1);
// list2.addEventListener('click', click2);
// list3.addEventListener('click', click3);
// list4.addEventListener('click', click4);
// list5.addEventListener('click', click5);

// function click1() {
//   slide.classList.add('led-slider1');
//   slide.classList.remove('led-slider2');
//   slide.classList.remove('led-slider3');
//   slide.classList.remove('led-slider4');
//   slide.classList.remove('led-slider5');

//   bar1.style.width = "100%";
//   bar1.style.transition = "0.4s ease-out"
//   bar2.style.width = "0px";
//   bar2.style.transition = "0.6s ease-out"
//   bar3.style.width = "0px";
//   bar3.style.transition = "0.6s ease-out"
//   bar4.style.width = "0px";
//   bar4.style.transition = "0.6s ease-out"
//   bar5.style.width = "0px";
//   bar5.style.transition = "0.6s ease-out"

//   count = 0;
// }

// function click2() {
//   slide.classList.remove('led-slider1');
//   slide.classList.add('led-slider2');
//   slide.classList.remove('led-slider3');
//   slide.classList.remove('led-slider4');
//   slide.classList.remove('led-slider5');

//   bar1.style.width = "0px";
//   bar1.style.transition = "0.6s ease-out"
//   bar2.style.width = "100%";
//   bar2.style.transition = "0.4s ease-out"
//   bar3.style.width = "0px";
//   bar3.style.transition = "0.6s ease-out"
//   bar4.style.width = "0px";
//   bar4.style.transition = "0.6s ease-out"
//   bar5.style.width = "0px";
//   bar5.style.transition = "0.6s ease-out"

//   count = 0;
// }

// function click3() {
//   slide.classList.remove('led-slider1');
//   slide.classList.remove('led-slider2');
//   slide.classList.add('led-slider3');
//   slide.classList.remove('led-slider4');
//   slide.classList.remove('led-slider5');

//   bar1.style.width = "0px";
//   bar1.style.transition = "0.6s ease-out"
//   bar2.style.width = "0px";
//   bar2.style.transition = "0.6s ease-out"
//   bar3.style.width = "100%";
//   bar3.style.transition = "0.4s ease-out"
//   bar4.style.width = "0px";
//   bar4.style.transition = "0.6s ease-out"
//   bar5.style.width = "0px";
//   bar5.style.transition = "0.6s ease-out"

//   count = 0;
// }

// function click4() {
//   slide.classList.remove('led-slider1');
//   slide.classList.remove('led-slider2');
//   slide.classList.remove('led-slider3');
//   slide.classList.add('led-slider4');
//   slide.classList.remove('led-slider5');

//   bar1.style.width = "0px";
//   bar1.style.transition = "0.6s ease-out"
//   bar2.style.width = "0px";
//   bar2.style.transition = "0.6s ease-out"
//   bar3.style.width = "0px";
//   bar3.style.transition = "0.6s ease-out"
//   bar4.style.width = "100%";
//   bar4.style.transition = "0.4s ease-out"
//   bar5.style.width = "0px";
//   bar5.style.transition = "0.6s ease-out"

//   count = 0;
// }

// function click5() {
//   slide.classList.remove('led-slider1');
//   slide.classList.remove('led-slider2');
//   slide.classList.remove('led-slider3');
//   slide.classList.remove('led-slider4');
//   slide.classList.add('led-slider5');

//   bar1.style.width = "0px";
//   bar1.style.transition = "0.6s ease-out"
//   bar2.style.width = "0px";
//   bar2.style.transition = "0.6s ease-out"
//   bar3.style.width = "0px";
//   bar3.style.transition = "0.6s ease-out"
//   bar4.style.width = "0px";
//   bar4.style.transition = "0.6s ease-out"
//   bar5.style.width = "100%";
//   bar5.style.transition = "0.4s ease-out"

//   count = 0;
// }

// 自動スライド
// var count = 0;

// setInterval(() => {
//   if (count > 5) {
//     count = 0;
//     nextClick();
//   }
//   count++;
//   console.log(count);
// }, 1000);


// -------------------------------------------------------

// const root = document.querySelector(".js-carousel");
// const container = root.querySelector(".js-carouselContainer");
// const content = root.querySelector(".js-carouselContent");

// // ...
// const items = root.querySelectorAll(".js-carouselItem");
// const footer = root.querySelector(".js-carouselFooter");

// const itemsLength = items.length;
// const lastIndex = itemsLength - 1;
// let currentIndex;

// const nav = createIndicator(itemsLength);
// const indicator = nav.list;
// const indicatorButtons = nav.buttons;

// ...

// function createIndicator(count) {
//   const ol = document.createElement("ol");
//   const buttons = [];
//   for (let i = 0; i < count; i++) {
//     const li = document.createElement("li");
//     const button = createButton(["Carousel-indicatorButton"], i + 1);
//     li.classList.add("Carousel-indicatorItem");
//     li.appendChild(button);
//     ol.appendChild(li);
//     buttons.push(button);
//   }
//   ol.classList.add("Carousel-indicator");

//   return {
//     list: ol,
//     buttons: buttons
//   }
// }

// ...

// function appendNavigations() {
//   const controllersFragment = document.createDocumentFragment();
//   controllersFragment.appendChild(prevButton);
//   controllersFragment.appendChild(nextButton);
//   container.appendChild(controllersFragment);
//   footer.appendChild(indicator);
// }

// function updateIndicatorDisabledProp(index) {
//   if (currentIndex > -1) {
//     indicatorButtons[currentIndex].disabled = false;
//   }
//   indicatorButtons[index].disabled = true;
// }

// function changeItem(index) {
//   if (index === currentIndex) {
//     return;
//   }
//   slideAnim(index);
//   updateControllerDisabledProp(prevButton, "prev", index === 0);
//   updateControllerDisabledProp(nextButton, "next", index === lastIndex);
//   updateIndicatorDisabledProp(index);
//   currentIndex = index;
// }

// function onClickIndicatorButton(event) {
//   const target = event.target;
//   if (target.tagName.toLowerCase() !== "button") {
//     return;
//   }
//   const index = indicatorButtons.indexOf(target);
//   changeItem(index);
// }

// ...

// function init() {
//   prevButton.addEventListener("click", onClickPrevButton, false);
//   nextButton.addEventListener("click", onClickNextButton, false);
//   indicator.addEventListener("click", onClickIndicatorButton, false);
//   appendNavigations();
//   changeItem(0);
// }


// -----------------------------------------------------


// //サムネイルのスライダーの初期化
// let mySwiperThumbs = new Swiper ('.thumbs-slider', {
//   slidesPerView: 6,
//   spaceBetween: 100,
//   //各スライドの進行状況を監視
//   watchSlidesProgress: true,
//   //ビューポートにあるスライドに表示クラスを追加
//   watchSlidesVisibility: true,
//   //カーソルをデフォルトから grab に変更
//   grabCursor: true,
// });

// // フェードエフェクト
// const fade = new Swiper("#fade", {
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   pagination: {
//     el: ".swiper-pagination", //必須の設定：ページネーションのclass指定
//     type: "bullets",
//     clickable: "clickable"
//   },
//   effect: "fade",
//   thumbs: {
//     //サムネイルのスライダーを指定
//     swiper: mySwiperThumbs
//   },
// });


window.addEventListener("DOMContentLoaded", () => {
  // サムネイルのスライダー
  const thumbnail = new Swiper(".js-thumbnail", {
    freeMode: true,
    slidesPerView: 5,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  // メインのスライダー
  const slider = new Swiper(".js-slider", {
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    },
    speed: 9000,
    slidesPerView: 1,
    breakpoints: {
      600:{
        slidesPerView: 2,
      }
    } 
    // thumbs: {
    //   swiper: thumbnail,
    // },
  });
});



window.addEventListener("DOMContentLoaded", () => {
  // サムネイルのスライダー
  const thumbnail = new Swiper(".js-thumbnail2", {
    freeMode: true,
    slidesPerView: 5,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  // メインのスライダー
  const slider = new Swiper(".js-slider2", {
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      reverseDirection: true, // 逆方向有効化
    },
    speed: 9000,
    slidesPerView: 1,
    breakpoints: {
      600:{
        slidesPerView: 2,
      }
    }
    // thumbs: {
    //   swiper: thumbnail,
    // },
  });
});



window.addEventListener("DOMContentLoaded", () => {
  // サムネイルのスライダー
  const thumbnail = new Swiper(".js-thumbnail3", {
    freeMode: true,
    slidesPerView: 5,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  // メインのスライダー
  const slider = new Swiper(".js-slider3", {
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    },
    speed: 9000,
    slidesPerView: 1,
    breakpoints: {
      600:{
        slidesPerView: 2,
      }
    }
    // thumbs: {
    //   swiper: thumbnail,
    // },
  });
});



window.addEventListener("DOMContentLoaded", () => {
  // サムネイルのスライダー
  const thumbnail = new Swiper(".js-thumbnail4", {
    freeMode: true,
    slidesPerView: 5,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  // メインのスライダー
  const slider = new Swiper(".js-slider4", {
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      reverseDirection: true, // 逆方向有効化
    },
    speed: 9000,
    slidesPerView: 1,
    breakpoints: {
      600:{
        slidesPerView: 2,
      }
    }
    // thumbs: {
    //   swiper: thumbnail,
    // },
  });
});



window.addEventListener("DOMContentLoaded", () => {
  // サムネイルのスライダー
  const thumbnail = new Swiper(".js-thumbnail5", {
    freeMode: true,
    slidesPerView: 5,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  // メインのスライダー
  const slider = new Swiper(".js-slider5", {
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    },
    speed: 9000,
    slidesPerView: 1,
    breakpoints: {
      600:{
        slidesPerView: 2,
      }
    }
    // thumbs: {
    //   swiper: thumbnail,
    // },
  });
});