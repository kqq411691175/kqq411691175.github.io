function edit(getValue) {
	var list = []; //保存前面三个TD的内容
	$.each($(getValue).prevAll(), function(index) {
		var td = $(getValue).prevAll()[index]; //获取每一个td
		var texts = $(td).text(); //获取每一个td的值
		list.push(texts); //加入到数组中
	});
	var new_list = list.reverse(); //将数组进行倒序(顺序是反的)
	$("#dialog").removeClass('hidden');
	$("#hostname").val(new_list[0]);
	$("#ip").val(new_list[1]);
	$("#port").val(new_list[2]);
	$(getValue).prop('id', 'doClick'); //点击谁就给谁绑定id
}

function submitForm() {
	var tr = $('#doClick').parent(); //找到被点击的按钮的行数
	$(':text').each(function(index, value) { //获取每个input中的值
		var value = $(this).val();
		if(value.trim().length == 0) {
			$(this).css('border-color', 'red');
		} else {
			$(this).css('border-color', 'green');
			$(tr).find('td').eq(index).text(value);
		}
	})
	$('#doClick').prop('id', '');
	$("#dialog").addClass('hidden');
}

function cancel() {
	$('#doClick').prop('id', '');
	$("#dialog").addClass('hidden');
}