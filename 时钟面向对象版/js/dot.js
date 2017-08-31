//时钟中间的小圆点
//派生类继承基类的三部曲
function Dot(){                      //1.创建构造函数
	Control.call(this);              //属性的继承
}
Dot.prototype = Object.create(Control.prototype)   //2.原型的继承
Dot.prototype.constructor = Dot;                   //3.构造函数的添加
//继承的概念:派生类将拥有基类所有属性和方法,并且可以扩展自己的属性和方法.

//重写基类方法
Dot.prototype.render = function(){
	Control.prototype.render.call(this);              //基类的方法被派生类调用
	this.ele.style.borderRadius = '50%';
	this.ele.style.zIndex = 10;
}
Dot.prototype.layout = function(){
	Control.prototype.layout.call(this);
	//设置大小和位置
	var r = Control.radius * 0.02;
	this.ele.style.width = r*2 + 'px';
	this.ele.style.height = r*2 + 'px';
	this.ele.style.top = Control.clientHeight/2 - r + 'px';
	this.ele.style.left = Control.clientWidth/2 - r + 'px';
}
