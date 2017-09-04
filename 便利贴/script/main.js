function addNote(key,value){
	//key是便利贴的ID
	//value是便利贴显示的内容
	//当key存在时，id就是key，不存在时创建id
	var id = key || Date.now();
	//当value存在时，内容就是value，不存在时，内容是空字符串
	var content = value || '';
	//创建一个便利贴
	var mainDiv = document.createElement('div');
	mainDiv.classList.add('note');//添加class
	mainDiv.id = id;//设置id
	document.querySelector('main').appendChild(mainDiv);//父元素添加元素
	//标题
	var titleDiv = document.createElement('div');
	titleDiv.classList.add('title');
	mainDiv.appendChild(titleDiv);
	//加号
	var addDiv = document.createElement('div');
	addDiv.classList.add('add');
	addDiv.addEventListener('click',function(){addNote()});//添加事件
	titleDiv.appendChild(addDiv);
	//叉号
	var deleteDiv = document.createElement('div');
	deleteDiv.classList.add('delete');
	deleteDiv.addEventListener('click',function(e){
		localStorage.removeItem(id);
		document.querySelector('main').removeChild(e.target.parentElement.parentElement);
	})
	titleDiv.appendChild(deleteDiv);
	//内容
	var contentDiv = document.createElement('div');
	contentDiv.classList.add('content');
	contentDiv.contentEditable = 'true';
	contentDiv.innerText = content;
	contentDiv.addEventListener('blur',function(e){
		var text = e.target.innerText;
		if (text.trim().length>0) {
            localStorage.setItem(id,text);
        }
	});
	mainDiv.appendChild(contentDiv);
}
