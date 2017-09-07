function Countdown(hour,minute,year,month,day,){
	var time = new Date();
	this.year = year || time.getFullYear();
	this.month = month || time.getMonth() + 1;
	this.day = day || time.getDate();
	this.hour= hour || time.getHours();
	this.minute = minute || 0;
	this.second = 0;
	var str = this.year+","+this.month+","+this.day+","+this.hour+":"+this.minute+":00";
	this.time = new Date(str);
	this.render();
}
Countdown.prototype.render = function(){
	$('body').append('<div class="countBox"></div>')
	$('.countBox').append('<p class="p1">距离<span></span>年<span></span>月<span></span>日<span></span>时<span></span>分<span></span>秒 还有:</p>')
	$('.countBox').append('<p class="p2"><span></span>年<span></span>月<span></span>日<span></span>时<span></span>分<span></span>秒</p>')
	$('.countBox .p1 span').eq(0).html(this.year)
	$('.countBox .p1 span').eq(1).html(this.mounth)
	$('.countBox .p1 span').eq(2).html(this.day)
	$('.countBox .p1 span').eq(3).html(this.hour)
	$('.countBox .p1 span').eq(4).html(this.minute)
	$('.countBox .p1 span').eq(5).html(this.second)
	
	var _this = this;
	var timelag = this.time.getTime() - Date.now();
	
	
	
	function show(){
		var timelag = _this.time.getTime() - Date.now();
		var yearlag = Math.floor(timelag/(365*24*60*60*1000))
		var monthlag = Math.floor(timelag/(30*24*60*60*1000))
		var daylag = Math.floor(timelag/(24*60*60*1000))
		var hourlag = Math.floor(timelag%(24*60*60*1000)/(60*60*1000))
		var minutelag = Math.floor(timelag%(60*60*1000)/(60*1000))
		var secondlag = Math.floor(timelag%(60*1000)/1000)
		$('.countBox .p2 span').eq(0).html(yearlag)
		$('.countBox .p2 span').eq(1).html(monthlag)
		$('.countBox .p2 span').eq(2).html(daylag)
		$('.countBox .p2 span').eq(3).html(hourlag)
		$('.countBox .p2 span').eq(4).html(minutelag)
		$('.countBox .p2 span').eq(5).html(secondlag)
		if(timelag <= 0){
			clearInterval(x);
			$('.countBox .p2 span').eq(0).html("-")
			$('.countBox .p2 span').eq(1).html("-")
			$('.countBox .p2 span').eq(2).html("-")
			$('.countBox .p2 span').eq(3).html("-")
			$('.countBox .p2 span').eq(4).html("-")
			$('.countBox .p2 span').eq(5).html("-")
		}
	};
	show();
	var x = setInterval(show,1000);
}
