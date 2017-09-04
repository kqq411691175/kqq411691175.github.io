function Waitload(num,scrolltop){
	this.num = num;
	this.scrolltop = scrolltop;
	this.rander();
	this.wait();
}
Waitload.prototype.rander = function(){
	$('body').append('<div class="oBox"></div>')
	$('.oBox').css('top',this.scrolltop + 'px');
	for(var i=1;i<=this.num;i++){
		$('.oBox').append('<div class="iBox"><img src="img/p'+i+'.jpg"></div>')
	}
}
Waitload.prototype.wait = function(){
	var _this = this;
	function waitLoad(){
		setTimeout(function(){
			$('.oBox img').each(function(){
				console.log($(this).offset().top);
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