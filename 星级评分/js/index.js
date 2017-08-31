function Grade(){
	this.msg = [
		'很不满意|差的太离谱,与卖家描述的严重不符,非常不满',
		'不满意|部分有破损,与卖家描述的不符,不满意',
		'一般|质量一般,没有卖家描述的那么好',
		'满意|质量不错,与卖家描述的基本一致,还是挺满意的',
		'非常满意|质量非常好,与卖家描述的完全一致,非常满意'
	];
	this.score = -1;
	this.render();
	this.func();
}
//网页结构搭建
Grade.prototype.render = function(){
	$('body').append('<div></div>');
	$('div').append('<span>点击星星就能评分</span>');
	$('div').append('<ul></ul>');
	for(var i=0;i<5;i++){
		$('ul').append('<li></li>');
	}
	$('div').append('<span id="sp1"></span>');
	$('div').append('<p></p>');
}
//事件实现
Grade.prototype.func = function(){
	var _this = this;
	//判断哪个元素添加/移除类
	$.aa = function(index){
		for(var i = 0; i<$('li').length;i++){
			if(i<=index){
				$('li').eq(i).addClass('active')
			}else{
				$('li').eq(i).removeClass('active')
			}
		}
	}
	//元素事件
	$('li').on({
		mouseover:function(){
			$.aa($(this).index());
			var htmlStr = '<i>' + ($(this).index()+1) + '分 ' + _this.msg[$(this).index()].split('|')[0] + '</i>' + '<br />'  + _this.msg[$(this).index()].split('|')[1];
			var left = 	126 +$(this).index()*25;
			$('p').css('left',left).html(htmlStr)
		},
		click:function(){
			var htmlStr = '<i>' + ($(this).index()+1) + '分 ' + '</i>' + _this.msg[$(this).index()].split('|')[1];
			$('#sp1').html(htmlStr);
			$('p').empty();
			_this.score=$(this).index();
		},
		mouseout:function(){
			$.aa(_this.score);
			$('p').empty();
		}
	})
}
