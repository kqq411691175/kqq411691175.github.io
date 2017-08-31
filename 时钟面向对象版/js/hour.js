//创建Hour构造函数
function Hour(){
	Second.call(this);
}
Hour.prototype = Object.create(Second.prototype);
Hour.prototype.constructor = Hour;
Hour.prototype.renderSettings = function(){
	var args = {};
	args.zIndex = 7;
	args.color = 'blue';
	args.during = 60 * 60 * 12;
	var time = new Date();
	var h = time.getHours();
	args.delay = (h *60*60* -1) - new Date().getMinutes()*60 - new Date().getSeconds();
	return args;
}
Hour.prototype.layoutSettings = function(){
	var args = {};
	args.eleWScale = 0.02;
	args.eleHScale = 0.5;
	args.spanEleWScale = 0.02;
	args.spanEleHScale = 0.3;
	return args;
}