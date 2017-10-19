function Timer(){
	
}

//time用于传递计时时间。
Timer.prototype.startCount = function(time){
	
	this.time = time;
	$("#timeout").text(this.time/1000);
	this.timer = setInterval(function(){
		this.time-=1000;
		$("#timeout").text(this.time/1000);
		if(this.time<=0){
			//alert("时间到");
			this.stopCount();
			$("#difCount").text("");
			
			//播放超时音乐
			soundControl.playTimeout();
			//前往超时场景
			gotoTimeoutScene();
			
		}
	}.bind(this),1000);
}

Timer.prototype.stopCount = function(){
	clearInterval(this.timer);
	$("#timeout").text("");
	
}
