$(window).mousemove(function(e){
	for(var i=0;i<$('span').length;i++){
		var r1 = Math.random()*150 - 75;
		var r2 = Math.random()*150 - 75;
		var r3 = Math.random();
		$('span').eq(i).css({
			'top':e.pageY + r1,
			'left':e.pageX + r2,
			'transform':'scale('+r3+')',
			'background-color':'hsl('+r3*360+',100%,50%)'
		})
	}
})
