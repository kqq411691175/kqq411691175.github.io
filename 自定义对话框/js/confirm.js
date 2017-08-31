function Confirm(message,cb1,cb2){
	Alert.call(this,message,cb1);
	this.cb2 = cb2;
}
Confirm.prototype = Object.create(Alert.prototype);
Confirm.prototype.constructor = Confirm;
Confirm.prototype.showButtons = function(){
	var leftButton = document.createElement('div');
	leftButton.classList.add('modal-left-button');
	leftButton.innerText = '取消';
	this.btnBox.appendChild(leftButton);
	
	var split = document.createElement('div');
	split.classList.add('modal-vertical-split');
	this.btnBox.appendChild(split);
	
	var rightButton = document.createElement('div');
	rightButton.classList.add('modal-right-button');
	rightButton.innerText = '确定';
	this.btnBox.appendChild(rightButton);
	
	_this = this;
	leftButton.onclick = function(){
		_this.close();
		if(typeof _this.callback == 'function'){
			_this.callback();
		}
	}
	rightButton.onclick = function(){
		_this.close();
		if(typeof _this.cb2 == 'function'){
			_this.cb2();
		}
	}
}
