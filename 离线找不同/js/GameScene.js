function GameScene(gameData){
	Scene.call(this,gameData.pic);
	
	this.difArray = gameData.different;
	
	this.difCount = this.difArray.length;
	
	this.time = gameData.time;
}

GameScene.prototype = Object.create(Scene.prototype);

GameScene.prototype.click = function(x,y){
	console.log(x+","+y);
	
	for (var i = 0;i<this.difArray.length;i++) {
		var xd = x - this.difArray[i].centerX;
		var yd = y - this.difArray[i].centerY;
		var distance = Math.sqrt(xd*xd+yd*yd);
		if(distance<=this.difArray[i].r){
			var mark = $("<div class='mark'></div>").appendTo("#game");
			mark.css("position","absolute");
			mark.css("left",this.difArray[i].centerX-this.difArray[i].r+"px");
			mark.css("top",this.difArray[i].centerY-this.difArray[i].r+"px");
			mark.width(this.difArray[i].r*2);
			mark.height(this.difArray[i].r*2);
			
			$("#difCount").text(--this.difCount);
			if(this.difCount <= 0){
//				alert("过关了");
				
				//停止计时器
				timer.stopCount();
				
				setTimeout(function(){
					//清空剩余不同标签
					$("#difCount").text("");
					
					if(currentSatge == gameData.length-1){
						//播放通关音乐
						soundControl.playComplete();
					}else{
						//播放过关音乐
						soundControl.playPass();
					}
					
					//进入下一关
					gotoNextScene();
				}.bind(this),1000);
				
				
			}
		}
	}
	
}

GameScene.prototype.show = function(){
	Scene.prototype.show.call(this);
	
	setTimeout(function(){
		//等场景完全出现
		$("#difCount").text(this.difArray.length);
		timer.startCount(this.time);
	}.bind(this),500)
	
	
}
