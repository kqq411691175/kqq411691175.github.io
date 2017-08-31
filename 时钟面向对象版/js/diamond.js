//时钟面板diamond
function Diamond(minute){
	//minute 是第几个点
	
	this.minute = minute;
	this.angle = (2*Math.PI)*minute/60;
	Control.call(this);
}
Diamond.prototype = Object.create(Control.prototype);
Diamond.prototype.constructor = Diamond;
//重写基类方法
Diamond.prototype.render = function(){
	Control.prototype.render.call(this);
}
Diamond.prototype.layout = function(){
	Control.prototype.layout.call(this);
	var a = this.minute % 5 == 0 ? 0.02:0.01;
	this.ele.style.width = a*Control.radius + 'px';
	this.ele.style.height = a*Control.radius + 'px';
	
	this.ele.style.borderRadius = '50%';
	// 位置 
	this.ele.style.left = Control.clientWidth / 2 + Control.radius / 2.2 * Math.cos(this.angle) - Control.radius * a / 2 + 'px';
	this.ele.style.top = Control.clientHeight / 2 + Control.radius / 2.2 * Math.sin(this.angle) - Control.radius * a / 2 + 'px';
}