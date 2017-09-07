var main = document.querySelector('main');
main.ondrag = function(event) {
	event.stopPropagation();
	event.preventDefault();
}
main.ondragover = function(event) {
	event.stopPropagation();
	event.preventDefault();
}
main.ondrop = function(event) {
	event.stopPropagation();
	event.preventDefault();
	var files = event.dataTransfer.files;

	for(var i = 0; i < files.length; i++) {
		var file = files[i];
		if(file.type.startsWith('image')) {
			var img = null;
			if(main.children.length > 1) {
				img = document.querySelector('img');
			} else if(main.children.length <= 1) {
				img = document.createElement('img');

				main.appendChild(img);
			}
			img.src = URL.createObjectURL(file);
			document.querySelector('span').style.display = 'none';

		}
	}
}