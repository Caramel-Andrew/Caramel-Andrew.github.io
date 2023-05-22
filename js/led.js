//表示場所
const wrap = document.querySelector('.js-wrap');

//動かす要素
const itemNode = document.querySelectorAll('.js-item');
const itemArray = Array.from(itemNode);

//加速度
const itemAcc = itemArray.map((item) => {
  const acc = item.dataset.acc.split(',');
  const accTsX = Number(acc[0]); //translateX
  const accTsY = Number(acc[1]); //translate
  const accRtX = Number(acc[2]); //rotateX
  const accRtY = Number(acc[3]); //rotateY
  return { accTsX, accTsY, accRtX ,accRtY };
});

//ポインターの位置、座標
let pointerX = 0;
let pointerY = 0;
let x = 0;
let y = 0;

//最小値、最大値
const minmax = (num) => {
  return Math.min( 0.5, Math.max(-0.5,num)); //-0.5以上0.5以下
}

const coordinate = () => {
  //表示場所の位置
  const wrapReact = wrap.getBoundingClientRect();
  //ポインターが表示場所のどの位置にあるか。中心を(0,0)とする為に0.5引く
  x = (pointerX - wrapReact.left) / wrapReact.width - 0.5;
  y = (pointerY - wrapReact.top) / wrapReact.height - 0.5;
  //最小値、最大値の確認（touchイベント用）
  x = minmax(x);
  y = minmax(y);
}

//マウスの位置
wrap.addEventListener('mousemove', e => {
  pointerX = e.clientX;
  pointerY = e.clientY;
  coordinate();
});

//要素のstyle属性（座標 x 30（微調整）x 加速度）
const styling = () => {
  itemNode.forEach((item, index) => {
    const tsX = x * 30 * itemAcc[index].accTsX + "%";
    const tsY = y * 30 * itemAcc[index].accTsY + "%";
    const rtX = y * 30 * itemAcc[index].accRtX + "deg";
    const rtY = x * 30 * itemAcc[index].accRtY + "deg";
    item.style.transform = "translateX(" + tsX + ") translateY(" + tsY + ") rotateX( " + rtX + ") rotateY(" + rtY + ")";
  });
}

//表示場所にマウスが入ったら
let tick;
wrap.addEventListener('mouseenter', e => {
  tick = () => {
    styling();
    requestAnimationFrame( tick );
  }
  requestAnimationFrame( tick );
});

//表示場所からマウスが出たら
wrap.addEventListener('mouseleave', e => {
  tick = () => {
    cancelAnimationFrame( tick )
  }
});

//スマホ対応（touchイベント）------------------

//触れている位置
wrap.addEventListener('touchmove', e => {
  pointerX = e.touches[0].clientX;
  pointerY = e.touches[0].clientY;
  coordinate();
});

//スクロールの制御
const handleTouchMove = (event) => {
  event.preventDefault();
}

//表示場所に指が触れたら
wrap.addEventListener('touchstart', e => {
  document.addEventListener('touchmove', handleTouchMove, { passive: false }); //スクロールの禁止
  tick = () => {
    styling();
    requestAnimationFrame( tick );
  }
  requestAnimationFrame( tick );
});

//指が離れたら
wrap.addEventListener('touchend', e => {
  document.removeEventListener('touchmove', handleTouchMove, { passive: false }); //スクロールの許可
  tick = () => {
    cancelAnimationFrame( tick )
  }
});



var slide = document.getElementById('led-slider');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var list1 = document.getElementById('list1');
var list2 = document.getElementById('list2');
var list3 = document.getElementById('list3');
var list4 = document.getElementById('list4');
var list5 = document.getElementById('list5');

// クリックイベント

next.addEventListener('click', nextClick);
prev.addEventListener('click', prevClick);

function nextClick() {
  if (slide.classList.contains('led-slider1') === true) {
    slide.classList.remove('led-slider1');
    slide.classList.add('led-slider2');
    list1.classList.remove('filledbar');
    list2.classList.add('filledbar');
    count = 0;
  } else if (slide.classList.contains('led-slider2') === true) {
    slide.classList.remove('led-slider2');
    slide.classList.add('led-slider3');
    list2.classList.remove('filledbar');
    list3.classList.add('filledbar');
    count = 0;
  } else if (slide.classList.contains('led-slider3') === true) {
    slide.classList.remove('led-slider3');
    slide.classList.add('led-slider4');
    list3.classList.remove('filledbar');
    list4.classList.add('filledbar');
    count = 0;
  } else if (slide.classList.contains('led-slider4') === true) {
    slide.classList.remove('led-slider4');
    slide.classList.add('led-slider5');
    list4.classList.remove('filledbar');
    list5.classList.add('filledbar');
    count = 0;
  } else {
    slide.classList.remove('led-slider5');
    slide.classList.add('led-slider1');
    list5.classList.remove('filledbar');
    list1.classList.add('filledbar');
    count = 0;
  }
};

function prevClick() {
  if (slide.classList.contains('led-slider1') === true) {
    slide.classList.remove('led-slider1');
    slide.classList.add('led-slider5');
    list1.classList.remove('filledbar');
    list5.classList.add('filledbar');
    count = 0;
  } else if (slide.classList.contains('led-slider2') === true) {
    slide.classList.remove('led-slider2');
    slide.classList.add('led-slider1');
    list2.classList.remove('filledbar');
    list1.classList.add('filledbar');
    count = 0;
  } else if (slide.classList.contains('led-slider3') === true) {
    slide.classList.remove('led-slider3');
    slide.classList.add('led-slider2');
    list3.classList.remove('filledbar');
    list2.classList.add('filledbar');
    count = 0;
  } else if (slide.classList.contains('led-slider4') === true) {
    slide.classList.remove('led-slider4');
    slide.classList.add('led-slider3');
    list4.classList.remove('filledbar');
    list3.classList.add('filledbar');
    count = 0;
  } else {
    slide.classList.remove('led-slider5');
    slide.classList.add('led-slider4');
    list5.classList.remove('filledbar');
    list4.classList.add('filledbar');
    count = 0;
  }
};

// インジケーター

list1.addEventListener('click', click1);
list2.addEventListener('click', click2);
list3.addEventListener('click', click3);
list4.addEventListener('click', click4);
list5.addEventListener('click', click5);

function click1() {
  slide.classList.add('led-slider1');
  slide.classList.remove('led-slider2');
  slide.classList.remove('led-slider3');
  slide.classList.remove('led-slider4');
  slide.classList.remove('led-slider5');

  list1.classList.add('filledbar');
  list2.classList.remove('filledbar');
  list3.classList.remove('filledbar');
  list4.classList.remove('filledbar');
  list5.classList.remove('filledbar');
  count = 0;
}

function click2() {
  slide.classList.remove('led-slider1');
  slide.classList.add('led-slider2');
  slide.classList.remove('led-slider3');
  slide.classList.remove('led-slider4');
  slide.classList.remove('led-slider5');

  list1.classList.remove('filledbar');
  list2.classList.add('filledbar');
  list3.classList.remove('filledbar');
  list4.classList.remove('filledbar');
  list5.classList.remove('filledbar');
  count = 0;
}

function click3() {
  slide.classList.remove('led-slider1');
  slide.classList.remove('led-slider2');
  slide.classList.add('led-slider3');
  slide.classList.remove('led-slider4');
  slide.classList.remove('led-slider5');

  list1.classList.remove('filledbar');
  list2.classList.remove('filledbar');
  list3.classList.add('filledbar');
  list4.classList.remove('filledbar');
  list5.classList.remove('filledbar');
  count = 0;
}

function click4() {
  slide.classList.remove('led-slider1');
  slide.classList.remove('led-slider2');
  slide.classList.remove('led-slider3');
  slide.classList.add('led-slider4');
  slide.classList.remove('led-slider5');

  list1.classList.remove('filledbar');
  list2.classList.remove('filledbar');
  list3.classList.remove('filledbar');
  list4.classList.add('filledbar');
  list5.classList.remove('filledbar');
  count = 0;
}

function click5() {
  slide.classList.remove('led-slider1');
  slide.classList.remove('led-slider2');
  slide.classList.remove('led-slider3');
  slide.classList.remove('led-slider4');
  slide.classList.add('led-slider5');

  list1.classList.remove('filledbar');
  list2.classList.remove('filledbar');
  list3.classList.remove('filledbar');
  list4.classList.remove('filledbar');
  list5.classList.add('filledbar');
  count = 0;
}

// 自動スライド
var count = 0;

setInterval(() => {
  if (count > 5) {
    count = 0;
    nextClick();
  }
  count++;
  console.log(count);
}, 1000);