function Music(){
	this.musics = $("audio");
	
	this.bgCount = 0;
}


Music.prototype.playClick = function(){
	
	//先把背景音乐声音调小
	this.pauseBgm(400);
	
	this.musics[1].play();
}

Music.prototype.playPass = function(){
	this.pauseBgm(6000);
	
	this.musics[3].play();
}

Music.prototype.playTimeout = function(){
	this.pauseBgm(4000);
	
	this.musics[4].play();
}

Music.prototype.playComplete = function(){
	this.pauseBgm(6000);
	
	this.musics[2].play();
}


Music.prototype.pauseBgm = function(time){
	this.musics[0].volume = 0;
	
	this.bgCount++;
	
	setTimeout(function(){
		if(--this.bgCount <= 0){
			this.musics[0].volume = 1;
		}
	}.bind(this),time);
}








