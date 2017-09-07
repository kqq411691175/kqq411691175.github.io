for(var i=0;i<$('td').length;i++){
	$('td').eq(i).mouseover(function(){
		$('#zhanshi').html($(this).html());
	})
}
