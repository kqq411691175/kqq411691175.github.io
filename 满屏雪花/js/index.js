function Snow(r,num,timer){
	this.r = r || 1;
	this.num = num;
	this.timer = timer;
	this.show();
}
Snow.prototype.show = function(){
	for(var i=0;i<this.num;i++){
		$('body').append('<div class="snowDiv"></div>');
		$('.snowDiv').eq(i).css({
			'position':'absolute',
			'top':Math.random()*$(document).height() - this.r*2,
			'left':Math.random()*$(document).width() - this.r*2,
			'width':this.r*2,
			'height':this.r*2,
			'border-radius':'50%'
		})
		$('.snowDiv').eq(i).css('background-color','rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()+')')
	}
	this.move();
}
Snow.prototype.move = function(){
	var _this = this;
	function flash(){
		for(var i=0;i<_this.num;i++){
			$('.snowDiv').eq(i).css({
				'top':Math.random()*$(document).height() - _this.r*2,
				'left':Math.random()*$(document).width() - _this.r*2
			})
		}
	}
	setInterval(flash,this.timer);
}
