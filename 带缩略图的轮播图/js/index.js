function Zoombox(num){
	this.num = num;
	this.num2 = num * 2;
	this.index = 0;
	this.count = 0;
	this.rander();
	this.func();
}
//搭建网页结构
Zoombox.prototype.rander = function(){
	//根元素
	$('body').append('<div class="zoombox"></div>');
	//一级目录
	$('.zoombox').append('<div class="zoompic"></div>');
	$('.zoombox').append('<div class="sliderbox"></div>');
	//二级目录
	$('.zoompic').append('<img src="img/1_1.jpg" />');
	$('.sliderbox').append('<div id="btn-left" class="arrow-btn disabled"></div>');
	$('.sliderbox').append('<div class="slider"></div>');
	$('.sliderbox').append('<div id="btn-right" class="arrow-btn"></div>');
	//三级以下目录
	$('.slider').append('<ul></ul>');
	for(var i=1;i<=this.num2;i++){
		if(i>this.num){
			this.index = i - this.num;
		}else{
			this.index = i;
		}
		$('.slider ul').append('<li><a href="img/'+this.index+'_1.jpg"><img src="img/'+this.index+'.jpg"></a></li>')
	}
	$('.slider li').eq(0).addClass('current');
}
//方法实现
Zoombox.prototype.func = function(){
	var _this = this;
	if(this.num2<=5){
		$('#btn-right').addClass('disabled');
	}
	$('#btn-left').click(function(){
		if(_this.count<=0){
			return;
		}
		_this.count--;
		$('.slider ul').animate({'left':'+=121'})
		checkState();
	})
	$('#btn-right').click(function(){
		if(_this.num2<=5 || _this.count>=_this.num2 - 5){
			return;
		}
		_this.count++;
		$('.slider ul').animate({'left':'-=121'})
		checkState();
	})
	function checkState(){
		console.log(_this.count);
		if(_this.count<=0){
			$('#btn-left').addClass('disabled');
		}
		if(_this.count>=_this.num2 - 5){
			$('#btn-right').addClass('disabled');
		}
		if(_this.count>0 && _this.count<_this.num2 - 5){
			$('#btn-left').removeClass('disabled');
			$('#btn-right').removeClass('disabled');
		}
	}
	$('.slider a').click(function(){
		$('.zoompic img').fadeOut('fast').fadeIn('fast').attr({
			'src':$(this).attr('href')
		})
		$('.slider li').removeClass('current');
		$(this).parent().addClass('current');
        return false;
	})
}
