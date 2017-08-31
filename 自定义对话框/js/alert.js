function Alert(message,callback){
	this.message = message;
	this.callback = callback;
	this.show();
}
//显示蒙层
Alert.prototype.showMask = function(){
	var mask = document.createElement('div');
	mask.classList.add('modal-mask');
	document.body.appendChild(mask);
	document.body.style.overflow = 'hidden';
}
//显示模态框
Alert.prototype.showBody = function(){
	//模态框
	var modalBody = document.createElement('div');
	modalBody.classList.add('modal-body');
	document.body.appendChild(modalBody);
	//消息部分
	var modalMessage = document.createElement('div');
	modalMessage.classList.add('modal-message');
	modalMessage.innerText = this.message;
	modalBody.appendChild(modalMessage);
	//分割线
	var split = document.createElement('div');
	split.classList.add('modal-horizontal-split');
	modalBody.appendChild(split);
	//按钮区域
	var buttons = document.createElement('div');
	buttons.classList.add('modal-button-box');
	modalBody.appendChild(buttons);
	this.btnBox = buttons;
}
Alert.prototype.showButtons = function(){
	var button = document.createElement('div');
	button.classList.add('modal-button');
	button.innerText = '确定';
	this.btnBox.appendChild(button);
	var _this = this;
	button.onclick = function(){
		//关闭模态框
		_this.close();
		//执行回调
		if(typeof _this.callback == 'function'){
			_this.callback();
		}
	}
}

Alert.prototype.close = function(){
	var mask = document.querySelector('.modal-mask');
	var modalBody = document.querySelector('.modal-body');
	document.body.removeChild(mask);
	document.body.removeChild(modalBody);
	document.body.style.overflow = 'auto';
}
Alert.prototype.show = function(){
	this.showMask();
	this.showBody();
	this.showButtons();
}
