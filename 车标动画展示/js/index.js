for(var i=0;i<$('td').length;i++){
	$('td').eq(i).on({
		mouseover:function(){
			$('img').eq($(this).data('index')).css('display','block').prop('class','in');
		},
		mouseout:function(){
			$('img').eq($(this).data('index')).css('display','none').prop('class','im');
		}
	})
}
