function Clock(){
	//添加样式 使时钟转起来
	var styleEle = document.createElement('style');
	document.head.appendChild(styleEle);
	styleEle.innerHTML = 'html,body{width:100%;height:100%,margin:0}@keyframes rotate{from{transform: rotate(0);}to{transform: rotate(360deg);}}'
	
	
	var dot = new Dot();
	var second = new Second();
	var minute = new Minute();
	var hour = new Hour();
	var dias =[];
	for(var i=0;i<60;i++){
		var dia = new Diamond(i);
		dias.push(dia);
	}
	window.onresize = function(){
		Control.resizeWindow();
		dot.layout();
		second.layout();
		minute.layout();
		hour.layout();
		for(var i=0;i<dias.length;i++){
			dias[i].layout();
		}
//		for(var index in dias){
//			dias[index].layout();
//		}
	}
}
