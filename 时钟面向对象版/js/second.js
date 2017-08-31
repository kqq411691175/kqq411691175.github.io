//时钟的秒针
function Second(){
	Control.call(this);
}
Second.prototype = Object.create(Control.prototype);
Second.prototype.constructor = Second;
//继续为second的原型添加方法 该方法是为了创建标签时修改标签的初始状态
Second.prototype.renderSettings = function(){
	var args = {};
	args.zIndex = 9;
	args.color = 'red';
	args.during = 60;
	var time = new Date();
	var s = time.getSeconds();
	args.delay = s * -1;
	return args;
}

Second.prototype.render = function(){
	Control.prototype.render.call(this);
	var args = this.renderSettings();
	//this.ele负责旋转
	this.ele.style.zIndex = args.zIndex;
	this.ele.style.backgroundColor = 'initial'
	this.ele.style.animation = 'rotate linear infinite ' + args.during + 's';
	this.ele.style.animationDelay = args.delay + 's';
	//this.spanEle负责显示
	this.spanEle = document.createElement('span');
	//扩展此函数的功能
	this.spanEle.style.backgroundColor = args.color;
	this.spanEle.style.display = 'block';
	
	
	this.ele.appendChild(this.spanEle);
}
Second.prototype.layoutSettings = function(){
	var args = {};
	args.eleWScale = 0.01;
	args.eleHScale = 0.8;
	args.spanEleWScale = 0.01;
	args.spanEleHScale = 0.5;
	return args;
}
Second.prototype.layout = function(){
	Control.prototype.layout.call(this);
	//this.ele负责旋转
	var r = Control.radius;
	var args = this.layoutSettings();
	this.ele.style.width = r*args.eleWScale + 'px';
	this.ele.style.height = r*args.eleHScale + 'px';
	this.ele.style.left = Control.clientWidth / 2 - r*args.eleWScale/2 + 'px';
	this.ele.style.top = Control.clientHeight / 2 - r*args.eleHScale/2 + 'px';
	//this.spanEle负责显示
	this.spanEle.style.width = r*args.spanEleWScale + 'px';
	this.spanEle.style.height = r*args.spanEleHScale + 'px';
	this.spanEle.style.borderRadius = r*args.spanEleWScale + 'px';
}