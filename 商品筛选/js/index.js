//a标签点击事件
$('.goodsFiler .intro a').click(function(){
	//被点击的a添加样式,同级兄弟元素移除样式
	$(this).addClass('selected').css('color','red').siblings().removeClass('selected').css('color','blue');
	//获取被点击的a在第几个li中,.chosed中的第几个span添加内容并显示
	$('.goodsFiler .chosed .intro span').eq($(this).closest('li').index()).html($(this).text() + '<em>X</em>').css('display','inline-block');	
	//点击x事件
	$('.goodsFiler .intro em').click(function(){
		//获取被点击的x是.chosed中的第几个span的x
		var index = $(this).parent('span').index();
		//清空被点击的x的父元素并隐藏
		$(this).parent('span').empty().css('display','none')
		//对应索引值的li中的a清除样式
		$('.goodsFiler li:not(".chosed")').eq(index).find('.intro a').css('color','blue').removeClass('selected')
		//判断.clear是否隐藏
		var length = $('.goodsFiler .intro span').not(':empty').length;
		if(length<3){
			$('.clear').remove();
		}
	})
	//判断.clear是否隐藏
	var length = $('.goodsFiler .intro span').not(':empty').length;
	if(length>2){
		$('.clear').remove();
		$('.chosed .intro').append('<a href="#" class="clear">清除筛选条件</a>');
	}
	//点击.clear事件
	$('.clear').click(function(){
		//所有.chosed的span都清空
		$('.goodsFiler .intro span').empty().css('display','none');
		//所有 li中的a都清除样式
		$('.goodsFiler .intro a').removeClass('selected').css('color','blue');
		//设置.clear隐藏
		$(this).remove()
	})
})
