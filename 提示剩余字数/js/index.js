function Hintchar(num){
	this.num = num;
	this.render();
	this.way();
}
Hintchar.prototype.render = function(){
	$('body').append('<div class="hintchar"></div>');
	$('.hintchar').append('<p class="hintp1">分享一些新鲜事</p>');
	$('.hintchar').append('<p class="hintp2">还可以上输入<span>'+this.num+'</span>个字</p>');
	$('.hintchar').append('<textarea name="" rows="5" cols="30"></textarea>');
	$('.hintchar').append('<p class="hintp3"></p>');
}
Hintchar.prototype.way = function(){
	var _this = this;
	var total = this.num*2;
	$('.hintchar textarea').keyup(function(){
		var content = $(this).val();
		
		var length = 0;
		for(var i = 0;i<content.length;i++){
			if(content.charCodeAt(i)>255){
				length += 2;
			}else{
				length += 1;
			}
		}
		console.log(length);
		var x = Math.floor((total - length)/2)
		
		if(x>0){
			$('.hintp2 span').html(x);
		}else{
			$('.hintp2 span').html('0');
		}
		if(length>40){
			$('.hintp3').html('超出字数限制');
			$('.hintchar textarea').css('border-color','red');
		}else{
			$('.hintp3').empty();
			$('.hintchar textarea').css('border-color','green');
		}
	})
}