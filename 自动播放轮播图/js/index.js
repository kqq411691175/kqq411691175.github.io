function Slideshow(num, width, height) {
	this.num = num;
	this.width = width;
	this.height = height;
	this.index = 0;
	this.render();
	this.slide();
}
//搭建网页结构
Slideshow.prototype.render = function() {
	$('body').append('<div id="slideBox"></div>');
	$('#slideBox').css({
		"width": this.width,
		"height": this.height
	})
	$('#slideBox').append('<div class="imgBox"></div>')
	$('#slideBox').append('<div class="indicators"></div>')
	$('#slideBox').append('<div class="buttons"></div>')
	for(var i = 1; i <= this.num; i++) {
		$('.imgBox').append('<img src="img/' + i + '.jpg" alt="">')
		$('.indicators').append('<span>' + i + '</span>')
	}
	$('.imgBox img').eq(0).addClass('show');
	$('.indicators span').eq(0).addClass('current');
	$('.buttons').append('<span id="prev">&lt;</span>');
	$('.buttons').append('<span id="next">&gt;</span>');
}
//轮播效果
Slideshow.prototype.slide = function() {
	var _this = this;
	var timer = setInterval(changeIndex, 2000);

	function changeIndex() {
		_this.index = _this.index == _this.num - 1 ? 0 : _this.index + 1;
		changeImage();
	}

	function changeImage() {
		$('img').eq(_this.index).fadeIn('fast').siblings().fadeOut('fast');
		$('.indicators span').eq(_this.index).addClass('current').siblings().removeClass('current');
	}
	//点击事件
	$('#prev').click(function() {
		_this.index = _this.index == 0 ? _this.num - 1 : _this.index - 1;
		changeImage();
	})
	$('#next').click(function() {
		changeIndex();
	})
	//悬停事件
	$('.indicators span').hover(function() {
		clearInterval(timer);
		_this.index = $(this).index();
		changeImage();
	}, function() {
		timer = setInterval(changeIndex, 2000);
	})
	$('.buttons span').hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(changeIndex, 2000);
	})
}