
	function calcRem() {
    var html = document.querySelector('html')
    var width = document.documentElement.clientWidth
    var ui = 750
    html.style.fontSize = width / ui * 16 + 'px'
}
calcRem()
window.onresize = function() {
    calcRem()
}

