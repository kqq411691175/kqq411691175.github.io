$('#tianjia').click(function() {
	$('.chooseImg').append("<img src='img/baikuang.png' />");
	$('.chooseImg').append("<input type='file' name='photo1' accept='image/*' autocomplete='off' />");
	$('.chooseImg').append(' ');
	$.addEvent();
})
$.addEvent = function() {
	$('img').each(function() {
		$(this).click(function() {
			$(this).next().click();
		})
	})
	$('input[type="file"]').each(function() {
		$(this).change(function() {
			var file = this.files[0];
			if(file.type.startsWith('image')) {
				//previousSibling上一个节点
				//给input的上一个节点image的src属性赋予新值
				this.previousElementSibling.src = URL.createObjectURL(file);
			}
		})
	})
}