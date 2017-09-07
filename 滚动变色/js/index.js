$(document).scroll(function(){
	console.log($(document).scrollTop())
	if($(document).scrollTop()<1000){
		$('body').css('background-color','cyan');
	}else if($(document).scrollTop()<2000){
		$('body').css('background-color','red');
	}else if($(document).scrollTop()<3000){
		$('body').css('background-color','blue');
	}else if($(document).scrollTop()<4000){
		$('body').css('background-color','green');
	}else if($(document).scrollTop()<5000){
		$('body').css('background-color','pink');
	}else{
		$('body').css('background-color','yellow');
	}
})
