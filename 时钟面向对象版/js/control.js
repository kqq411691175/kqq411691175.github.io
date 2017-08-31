//作为一个基类,让点/时分秒/都直接继承或间接继承control
function Control(){
	this.render();
	this.layout();
}
//创建标签的方法
Control.prototype.render = function(){
	this.ele = document.createElement('div');
	this.ele.style.backgroundColor = 'black';
	this.ele.style.position = 'absolute';
	document.body.appendChild(this.ele);
}
//布局页面的方法(位置和大小)
Control.prototype.layout = function(){
	//因为每个创建出来的元素位置不可预知
	//所以此方法用来继承
}
//获取窗口尺寸大小的方法
Control.resizeWindow = function(){           //这个方法为什么不添加在原型里? 
	//添加在原型中的方法需要实例化对象调用,
	//构造函数的方法不需要实例化对象调用,直接用构造函数调用
	Control.clientWidth = document.documentElement.clientWidth;
	Control.clientHeight = document.documentElement.clientHeight;
	Control.radius = Math.min(Control.clientWidth,Control.clientHeight);	
}
Control.resizeWindow();

//documentElement 属性可返回文档的根节点。
//document.body是DOM中Document对象里的body节点， document.documentElement是文档对象根节点(html)的引用。
//document.body.scrollHeight是body元素的滚动高度，document.documentElement.scrollHeight为页面的滚动高度
//DOM把层次中的每一个对象都称之为节点，就是一个层次结构，你可以理解为一个树形结构，就像我们的目录一样，一个根目录，根目录下有子目录，子目录下还有子目录