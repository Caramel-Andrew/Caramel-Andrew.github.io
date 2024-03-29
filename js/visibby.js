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


// 下までスクロール
function scrollend(){
	let elm = document.documentElement;

	// scrollHeight ページの高さ clientHeight ブラウザの高さ　(bottom=一番下までスクロールしたときのtopの値)
	let bottom = elm.scrollHeight - elm.clientHeight;

	// 垂直方向へ移動
	window.scroll(0, bottom);
}

//最下部に到達したときにスクロールボタンを変更
const allHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
const mostBottom = allHeight - window.innerHeight;
window.addEventListener('scroll', ()=> {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= mostBottom) {
        // 最下部に到達したときに実行する処理
    }
});
