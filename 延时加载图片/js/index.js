function Waitload(num,scrolltop){
	this.num = num;
	this.scrolltop = scrolltop;
	this.x = 0;
	this.rander();
	this.wait();
	this.func();
}
Waitload.prototype.rander = function(){
	$('body').append('<div class="oBox"></div>')
	$('.oBox').css('top',this.scrolltop + 'px');
	for(var i=1;i<=this.num;i++){
		$('.oBox').append('<div class="iBox"><img src="img/p'+i+'.jpg"></div>')
	}
	$('body').append('<section class="login"></section>');
	$('.login').append('<header class="bar">图片预加载<button class="cancle">X</button></header>');
	$('.login').append('<div class="bd"></div>');
	$('.bd').append('<span class="leftsp"><</span>');
	$('.bd').append('<span class="rightsp">></span>');
	$('body').append('<div class="screen"></div>');
	$('.login').myDrag({
		parent:'window',
		rendomPosition:false,
		direction:'all',
		handler:'.bar'
	})
	
}
Waitload.prototype.wait = function(){
	var _this = this;
	function waitLoad(){
		setTimeout(function(){
			$('.oBox img').each(function(){
				if($(window).height() + $(document).scrollTop()>=$(this).offset().top){
					$(this).animate({'opacity':1},1000);
				}else{
					$(this).css('opacity',0);
				}
			})
		})
	}
	$(document).on('scroll',waitLoad);
    $(window).on('resize',waitLoad);
}
Waitload.prototype.func = function(){
	var _this = this;
	getScreenWH();
	loginCenter();
	function getScreenWH(){
		var w = $(window).width() + $(document).scrollLeft();
		var h = $(window).height() + $(document).scrollTop();
		$('.screen').width(w).height(h);
	}
	function loginCenter(){
		var left = ($(window).width() - $('.login').width())/2 + $(window).scrollLeft()
		var top = ($(window).height() - $('.login').height())/2 + $(window).scrollTop()
		$('.login').css({top:top,left:left});
	}
	$(window).resize(function(){
		getScreenWH();
		loginCenter();
	})
	$(document).scroll(function(){
		getScreenWH();
		loginCenter();		
	})
	$('.cancle').click(function(){
		$('.screen').fadeOut(1000)
		$('.login').fadeOut(1300)
		//$('body').css('overflow','auto');
	})
	$('.iBox img').each(function(){
		$(this).click(function(){
			$('.screen').fadeIn(1000);
			$('.login').fadeIn(1300);
			
			_this.x = $(this).parent().index() + 1;
			//$('body').css('overflow','hidden');
			$('.bd').css('background-image','url(img/p'+_this.x+'big.jpg)')
		})
	})
	$('.login').mousemove(function(event){
		if(event.pageX>952){
			$('.leftsp').hide();
			$('.rightsp').show();
		}
		if(event.pageX<952){
			$('.leftsp').show();
			$('.rightsp').hide();
		}
	})
	$('.login').mouseout(function(){
		$('.leftsp').hide();
		$('.rightsp').hide();
	})
	$('.leftsp').click(function(){
		if(_this.x == 1){
			_this.x = _this.num;
		}else{
			_this.x--;
		}
		$('.bd').css('background-image','url(img/p'+_this.x+'big.jpg)')
	})
	$('.rightsp').click(function(){
		if(_this.x == _this.num){
			_this.x = 1;
		}else{
			_this.x++;
		}
		$('.bd').css('background-image','url(img/p'+_this.x+'big.jpg)')
	})
	
}
