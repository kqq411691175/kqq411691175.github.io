function Moveball(x,y,r){
	this.x = x;
	this.y = y;
	this.r = r;
	this.rander();
	this.w = false;
	this.s = false;
	this.a = false;
	this.d = false;
	this.move();
}
Moveball.prototype.rander = function(){
	$('body').append('<div class="moveBall"></div>');
	$('.moveBall').css({
		'position':'absolute',
		'top':this.y,
		'left':this.x,
		'width':this.r*2,
		'height':this.r*2,
		'border-radius':'50%'
	})
	$('.moveBall').css('background-color','rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()+')')
	this.ball = $('.moveBall');
}
Moveball.prototype.moveup = function(){
	if(this.ball.offset().top > 0){
		this.ball.css('top',this.ball.offset().top - 5 + 'px')
	}
}
Moveball.prototype.movedown = function(){
	if(this.ball.offset().top < $(document).height() - this.r*2){
		this.ball.css('top',this.ball.offset().top + 5 + 'px')
	}
}
Moveball.prototype.moveleft = function(){
	if(this.ball.offset().left > 0){
		this.ball.css('left',this.ball.offset().left - 5 + 'px')
	}
}
Moveball.prototype.moveright = function(){
	if(this.ball.offset().left < $(document).width() - this.r*2){
		this.ball.css('left',this.ball.offset().left + 5 + 'px')
	}
}
Moveball.prototype.moveupleft = function(){
	if(this.ball.offset().top > 0 && this.ball.offset().left > 0){
		this.ball.css({
			'top':this.ball.offset().top - 5,
			'left':this.ball.offset().left - 5
		})
	}
}
Moveball.prototype.moveupright = function(){
	if(this.ball.offset().top > 0 && this.ball.offset().left < $(document).width() - this.r*2){
		this.ball.css({
			'top':this.ball.offset().top - 5,
			'left':this.ball.offset().left + 5
		})
	}
}
Moveball.prototype.movedownleft = function(){
	if(this.ball.offset().top < $(document).height() - this.r*2 && this.ball.offset().left > 0){
		this.ball.css({
			'top':this.ball.offset().top + 5,
			'left':this.ball.offset().left - 5
		})
	}
}
Moveball.prototype.movedownright = function(){
	if(this.ball.offset().top < $(document).height() - this.r*2 && this.ball.offset().left < $(document).width() - this.r*2){
		this.ball.css({
			'top':this.ball.offset().top + 5,
			'left':this.ball.offset().left + 5
		})
	}
}
Moveball.prototype.move = function(){
	var _this = this;
	$('body').keydown(function(e){
		switch (e.key){
			case 'w':
				_this.w = true;
				break;
			case 's':
				_this.s = true;
				break;
			case 'a':
				_this.a = true;
				break;
			case 'd':
				_this.d = true;
				break;
		}
		
		if(_this.w){
			_this.moveup();
		}
		if(_this.s){
			_this.movedown();
		}
		if(_this.a){
			_this.moveleft();
		}
		if(_this.d){
			_this.moveright();
		}
		if(_this.w && _this.a){
			_this.moveupleft();
		}
		if(_this.w && _this.d){
			_this.moveupright();
		}
		if(_this.s && _this.a){
			_this.movedownleft();
		}
		if(_this.s && _this.d){
			_this.movedownright();
		}
	})
	$('body').keydown(function(e){
		switch (e.key){
			case 'w':
				_this.w = false;
				break;
			case 's':
				_this.s = false;
				break;
			case 'a':
				_this.a = false;
				break;
			case 'd':
				_this.d = false;
				break;
		}
	})
}