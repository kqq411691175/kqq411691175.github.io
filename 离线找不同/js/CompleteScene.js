function CompleteScene(){
	Scene.call(this,"images/complete.jpg");
}

CompleteScene.prototype = Object.create(Scene.prototype);

CompleteScene.prototype.click = function(x,y){
	if(x>241&&x<360&&y>346&&y<388){
		gotoGameScene();
	}
}
