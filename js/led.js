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