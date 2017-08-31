function Seconds(color) {
    this.fillColor = color || 'red';
    Control.call(this);
}

Seconds.prototype = Object.create(Control.prototype);

Seconds.prototype.calcRenderArgs = function () {
    var args = {};
    args.duration = 60;
    args.zIndex = 19;

    var time = new Date();
    var s = time.getSeconds() * -1;
    args.delay = s - 15;

    return args;
}

Seconds.prototype.calcLayoutArgs = function () {
    var args = {};
    args.radius = Control.radius * 0.95;
    args.width = Control.radius * 1.15;
    args.height = Control.radius * 0.02;
    return args;
}

Seconds.prototype.render = function () {
    Control.prototype.render.call(this);

    var args = this.calcRenderArgs();

    // 外层的div
    this.element.style.backgroundColor = 'initial';
    this.element.style.animationName = 'rotate';
    this.element.style.animationIterationCount = 'infinite';
    this.element.style.animationTimingFunction = 'linear';
    this.element.style.animationDuration = args.duration + 's';
    this.element.style.animationDelay = args.delay + 's';

    // 内层的span
    this.childEle = document.createElement('span');
    this.childEle.style.display = 'block';
    this.childEle.style.backgroundColor = this.fillColor;
    this.element.appendChild(this.childEle);
}

Seconds.prototype.layout = function () {
    var args = this.calcLayoutArgs();

    this.element.style.width = args.radius * 2 + 'px';
    this.element.style.height = '10px';
    this.element.style.top = Control.clientHeight / 2 - 5 + 'px';
    this.element.style.left = Control.clientWidth / 2 - args.radius + 'px';

    this.childEle.style.width = args.width + 'px';
    this.childEle.style.height = args.height + 'px';
    this.childEle.style.borderRadius = args.height/2 + 'px';
    this.childEle.style.marginTop = 5 - args.height/2 + 'px';
}