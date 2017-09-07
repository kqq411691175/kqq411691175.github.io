function Clock(){
	this.render();
	this.way();
}
Clock.prototype.render = function(){
	$('body').append('<div class="clockBox"></div>');
	$('.clockBox').append('<p class="p1"><span></span>年<span></span>月<span></span>日星期<span></span></p>');
	$('.clockBox').append('<p class="p2"><span></span>时<span></span>分<span></span>秒</p>');
}
Clock.prototype.way = function(){
	
	var _this = this;
	function show(){
		//-------------------------------
		var time = new Date();
		var year = time.getFullYear();
		var month = time.getMonth() + 1;
		var day = time.getDate();
		var week = time.getDay();
		var hour = time.getHours();
		var minute = time.getMinutes();
		var second = time.getSeconds();
		//------------------------------
		month = month<10?"0"+month:month;
		day = day<10?"0"+day:day;
		hour = hour<10?"0"+hour:hour;
		minute = minute<10?"0"+minute:minute;
		second = second<10?"0"+second:second;
		switch (week){
			case 0:
				week = '日'
				break;
			case 1:
				week = '一'
				break;
			case 2:
				week = '二'
				break;
			case 3:
				week = '三'
				break;
			case 4:
				week = '四'
				break;
			case 5:
				week = '五'
				break;
			case 6:
				week = '六'
				break;
		}
		//------------------------------
		$('.p1 span').eq(0).html(year);
		$('.p1 span').eq(1).html(month);
		$('.p1 span').eq(2).html(day);
		$('.p1 span').eq(3).html(week);
		$('.p2 span').eq(0).html(hour);
		$('.p2 span').eq(1).html(minute);
		$('.p2 span').eq(2).html(second);
	}
	//------------------------------------
	show();
	setInterval(show,1000);
}
