function Diamond(minite, sizeRatio) {
    this.minite = minite;
    this.sizeRatio = sizeRatio || 0.01;
    this.arc = 6 * this.minite * Math.PI / 180;
    // 调用Control的构造函数(调用了render和layout方法)
    Control.call(this);
}

Diamond.prototype = Object.create(Control.prototype);

Diamond.prototype.render = function () {
    Control.prototype.render.call(this);
    this.element.style.borderRadius = '50%';
    this.element.style.zIndex = '10';
}

Diamond.prototype.layout = function () {
    // 根据比例计算半径
    var size = Control.radius * this.sizeRatio;

    // 设置宽高
    this.element.style.width = size * 2 + 'px';
    this.element.style.height = size * 2 + 'px';

    var top = Control.radius * 0.9 * Math.sin(this.arc);
    var left = Control.radius * 0.9 * Math.cos(this.arc);

    this.element.style.top = Control.clientHeight / 2 + top - size + 'px';
    this.element.style.left = Control.clientWidth / 2 + left - size + 'px';
}