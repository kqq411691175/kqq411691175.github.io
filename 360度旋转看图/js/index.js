function Around(){
	this.render();
	this.move();
}
//搭建网页结构
Around.prototype.render = function(){
	$('body').append("<div class='container'></div>");
	$('.container').css('background-image','url(images/image1_1.jpg)');
}
//根据鼠标偏移量修改背景图片
Around.prototype.move = function(){
		$('.container').on('click',function(e){
			for(var i=1;i<=18;i++){
				if(e.offsetX>i*10 && e.offsetX<(i+1)*10){
					$('.container').css('background-image','url(images/image1_'+i+'.jpg)');
				}
				if(e.offsetX>(i+18)*10 && e.offsetX<(i+19)*10){
					$('.container').css('background-image','url(images/image1_'+i+'.jpg)');
				}
			}
		})
}
