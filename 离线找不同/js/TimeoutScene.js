function TimeoutScene(){
	Scene.call(this,"images/timeout.jpg");
	
}

TimeoutScene.prototype = Object.create(Scene.prototype);


TimeoutScene.prototype.click = function(x,y){
	if(x>236&&x<365&&y>340&&y<390){
		//重新开始这一关
		gotoGameScene();
	}
}
