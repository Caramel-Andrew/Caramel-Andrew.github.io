$(function(){
	
	var
	winW = $(window).width(),
	winH = $(window).height(),
	nav = $('#mainnav ul a'),
	curPos = $(this).scrollTop();
	
	if (winW > 800){
		var headerH =0;
	}
	else{
		var headerH =70;
	}
	
	$(nav).on('click', function(){
	var $el = $(this),
		id = $el.attr('href');
		$('html, body').animate({
		scrollTop: $(id).offset().top - headerH
		}, 500);
		if (winW < 890){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
		return false;
	});
	
	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});
});

var _window = $(window),
    _header = $('#header'),
    heroBottom;

_window.on('scroll',function(){     
    heroBottom = $('#mainImg').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('fixed');   
    }
    else{
        _header.removeClass('fixed');  
    }
});

_window.trigger('scroll');


$('.carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,//スライドを画面に3枚見せる
	speed: 500,//スライドのスピード。初期値は300。
	dots: true,//下部ドットナビゲーションの表示
	variableWidth: true,//幅の違う画像の高さを揃えて表示
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.slider').slick({
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	speed: 500,//スライドのスピード。初期値は300。
	slidesToShow: 3,//スライドを画面に3枚見せる
	slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	centerMode: true,//要素を中央ぞろえにする
	variableWidth: true,//幅の違う画像の高さを揃えて表示
	dots: true,//下部ドットナビゲーションの表示
});

// // ページ遷移後にスムーススクロール
// jQuery(function($) {
//   // 関数jumpを定義
//   var jump=function(e) {

//   // #で始まるURLの場合
// 	var target = document.getElementById("servicelogo");

//   // 変数targetの位置までスクロール
//   $('html, body').animate({
//     scrollTop: $(target).offset().top
//     },800,function() {
//       // スクロールしたあとにハッシュを変更
//       location.hash = target;
//     });
//   };

//   // ハッシュがページを開いたときに動作しないように、htmlとbodyを削除
//   $('html, body').hide();

//   $(document).ready(function() {
//     // #から始まるリンクをクリックした場合、関数jumpを実行
//     $('a[href^=#]').bind('click', jump);

//     // URLにハッシュがあれば以下を実行
//     if (location.hash){
//       // 0秒後に実行
//       setTimeout(function(){
//         // 一度、ページの一番上まで移動して、html、bodyを表示。その後関数jumpを実行
//         $('html, body').scrollTop(0).show();
//         jump();
//       }, 0);
//     }else{
//       // #がURLにない場合、そのままhtml、bodyを表示
//       $('html, body').show();
//     }
//   });
// });


// $(function(){
// 	//現在のページURLのハッシュ部分を取得
// 	const hash = location.hash;

// 	//ハッシュ部分がある場合の条件分岐
// 	if(hash){
// 		//ページ遷移後のスクロール位置指定
// 		$("html, body").stop().scrollTop(0);
// 		//処理を遅らせる
// 		setTimeout(function(){
// 			//リンク先を取得
// 			const target = $(hash),
// 			//リンク先までの距離を取得
// 			position = target.offset().top;
// 			//指定の場所までスムーススクロール
// 			$("html, body").animate({scrollTop:position}, 500, "swing");
// 		});
// 	}
// });

// $(function(){
// 	const element = window.location.hash = "servicelogo"
// 	element.scrollIntoView();
// });