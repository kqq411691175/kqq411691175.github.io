function StartScene(){
	Scene.call(this,"images/0.jpg");
}

StartScene.prototype = Object.create(Scene.prototype);

StartScene.prototype.click = function(x,y){
	if(x>430&&x<574&&y>239&&y<295){
		//点击了开始游戏按钮
		gotoGameScene();
	}
}
