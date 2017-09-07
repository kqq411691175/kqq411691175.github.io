$('button:eq(0)').click(function() {
	$('input').prop("checked", true);
})
$('button:eq(1)').click(function() {
	$('input').each(function() {
		$(this).prop("checked", !$(this).prop("checked"))
	})
})
$('button:eq(2)').click(function() {
	$('input').each(function() {
		$(this).prop("checked", false)
	})
})