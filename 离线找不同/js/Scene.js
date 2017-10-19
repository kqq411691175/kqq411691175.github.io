function Scene(pic){
	//this.pic = pic;
	
	this.$ele = $("<img src='"+pic+"'/>");
	
	this.$ele.css("width","100%");
	this.$ele.css("height","100%");
}


Scene.prototype.click = function(x,y){
	console.log(x+","+y);
}


Scene.prototype.show = function(){
	this.$ele.appendTo("#game");
}

Scene.prototype.dismiss = function(){
	this.$ele.slideUp(500,function(){
		this.$ele.remove();
	}.bind(this));
}




