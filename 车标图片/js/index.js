$('td').each(function(){
	$(this).hover(function(){
		$(this).find('img').css('opacity','1')
	},function(){
		$(this).find('img').css('opacity','0.2')
	})
})
