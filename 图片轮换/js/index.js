$('section').each(function() {
	$(this).mouseover(function() {
		$(this).children('div').stop().animate({
			left: -180
		}, 600)
		$(this).children('.p1').stop().animate({
			bottom: -50
		}, 600)
		$(this).children('.p2').stop().animate({
			bottom: -20
		}, 600)
	})
	$(this).mouseout(function() {

		$(this).children('div').stop().animate({
			left: 0
		}, 600)
		$(this).children('.p1').stop().animate({
			bottom: -20
		}, 600)
		$(this).children('.p2').stop().animate({
			bottom: -50
		}, 600)
		//				$(this).children('div').stop()
	})
})