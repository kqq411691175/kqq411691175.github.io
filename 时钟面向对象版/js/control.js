// 基础类(父类) 用于被子类继承
// 该类中实现两个方法，render和layout，render用于渲染页面，layout用于布局
// Control 基础控件类
function Control() {
    this.render();
    this.layout();
}

Control.prototype.render = function(){
    // 创建一个标签，用于显示
    this.element = document.createElement('div');
    this.element.style.backgroundColor = 'black';
    this.element.style.position = 'absolute';
    document.body.appendChild(this.element);
}

Control.prototype.layout = function(){};

// 记录当前屏幕的宽高，用于计算子类的尺寸和位置
Control.windowResized = function(){
    Control.clientWidth = document.documentElement.clientWidth;
    Control.clientHeight = document.documentElement.clientHeight;
    Control.radius = Math.min(Control.clientHeight,Control.clientWidth)/2;
}

Control.windowResized();