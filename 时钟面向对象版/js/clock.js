function Clock() {
    var i = 0;
    var style = document.createElement('style');
    document.head.appendChild(style);

    style.sheet.insertRule('html{height:100%}',i++);
    style.sheet.insertRule('body{height:100%;margin:0;padding:0;}',i++);
    style.sheet.insertRule('@keyframes rotate{0%{transform:rotate(0);}100%{transform:rotate(360deg);}}')

    var dot = new Dot();
    var seconds = new Seconds();
    var minute = new Minute('blue');
    var hour = new Hour('green');

    var diamonds = [];
    for (var i = 0; i < 60; i++) {
        diamonds.push(new Diamond(i,i%5 == 0 ? 0.02 : 0));
    }

    window.onresize = function() {
        // 屏幕大小改变，重新布局
        Control.windowResized();
        dot.layout();
        seconds.layout();
        minute.layout();
        hour.layout();

        for (var i = 0; i < 60; i++) {
            diamonds[i].layout();            
        }
    }
}