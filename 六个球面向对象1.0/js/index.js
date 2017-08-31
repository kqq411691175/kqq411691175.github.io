function Circleball(num,size,r,turn,degn){
	this.num = num;
	this.r = r;
	this.angle = Math.PI/num*2;
	this.size = size;
	this.deg = 0;
	this.turn = turn;
	this.degn = degn;
	this.render();
	this.resize();
	if(this.turn){
		this.rotate();
	}
	this.stop();
}
Circleball.prototype.render = function(){
	for(var i=0;i<this.num;i++){
		$('body').append('<div class="ball"></div>');
		$('.ball').eq(i).css({
			'width':this.size,
			'height':this.size,
			'border-radius':'50%',
			'text-align':'center',
			'position':'absolute',
			'top':$(window).height()/2 + this.r*Math.sin(this.angle*i),
			'left':$(window).width()/2 + this.r*Math.cos(this.angle*i),
			'background-color':'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')' 
		})
	}
}
Circleball.prototype.rotate = function(){	
	var _this = this;	
	function rotate(){
		_this.deg +=_this.degn;
		for(var i=0;i<_this.num;i++){
			$('.ball').eq(i).css({
				'top':$(window).height()/2 + _this.r*Math.sin(_this.deg+_this.angle*i),
				'left':$(window).width()/2 + _this.r*Math.cos(_this.deg+_this.angle*i)
			});
		}
		requestAnimationFrame(rotate);
	}
	requestAnimationFrame(rotate);
	
}
Circleball.prototype.resize = function(){
	var _this = this;
	window.onresize = function(){
		for(var i=0;i<_this.num;i++){
			$('.ball').eq(i).css({
				'background-color':'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')', 
				'top':$(window).height()/2 + _this.r*Math.sin(_this.deg+_this.angle*i),
				'left':$(window).width()/2 + _this.r*Math.cos(_this.deg+_this.angle*i)
			})
		}
	}
}
Circleball.prototype.readin = function(arr){
	if(arr instanceof Array == false){
		alert('请传入一个数组,数组长度与小球数量一致')
	}else if(arr.length != this.num){
		alert('请传入一个数组,数组长度与小球数量一致')
	}else{
		for(var i=0;i<this.num;i++){
			$('.ball').eq(i).html(arr[i]);
		}		
	}
}
Circleball.prototype.stop = function(){
	var _this = this;
	window.onclick = function(){
		var ran = Math.floor(Math.random()*$('.ball').length);
		alert($('.ball').eq(ran).html());
		$('.ball').eq(ran).remove();
		_this.num--;
		_this.angle = Math.PI/_this.num*2;
		for(var i=0;i<$('.ball').length;i++){
			$('.ball').eq(i).css({
				'background-color':'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')', 
				'top':$(window).height()/2 + _this.r*Math.sin(_this.deg+_this.angle*i),
				'left':$(window).width()/2 + _this.r*Math.cos(_this.deg+_this.angle*i)
			})
		}
		if($('.ball').length == 0){
			location.reload();
		}
	}
}
