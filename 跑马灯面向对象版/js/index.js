function Marquee(width,font,message){
	this.width = width;
	this.message = message;
	this.font = font;
	this.render();
}
//搭建网页结构
Marquee.prototype.render = function(){
	$('body').append("<div class='marq'></div>");
	$('.marq').css({
		"background-color": "black",
		"width": this.width,
		"color": "red"
	})
	$('.marq').html('<p><marquee onstart="this.firstChild.innerHTML+=this.firstChild.innerHTML;"><span unselectable="on">'+this.message+'</span></marquee></p>')
	$('.marq p').css({'font-size': this.font})
}
