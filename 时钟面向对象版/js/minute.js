//创建Minute构造函数
function Minute(){
	Second.call(this);
}
Minute.prototype = Object.create(Second.prototype);
Minute.prototype.constructor = Minute;
Minute.prototype.renderSettings = function(){
	var args = {};
	args.zIndex = 8;
	args.during = 60 * 60;
	args.color = 'green';
	var time = new Date();
	var m = time.getMinutes();
	args.delay = (m *60* -1) - new Date().getSeconds();
	return args;
}
Minute.prototype.layoutSettings = function(){
	var args = {};
	args.eleWScale = 0.015;
	args.eleHScale = 0.7;
	args.spanEleWScale = 0.015;
	args.spanEleHScale = 0.4;
	return args;
}