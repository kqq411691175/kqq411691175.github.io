function Dot() {
    Control.call(this);
}

Dot.prototype = Object.create(Control.prototype);
Dot.prototype.constructor = Dot;

Dot.prototype.render = function () {
    Control.prototype.render.call(this);
    this.element.style.borderRadius = '50%';
    this.element.style.zIndex = '20';
}

Dot.prototype.layout = function () {
    var size = Control.radius * 0.05;
    this.element.style.width = size * 2 + 'px';
    this.element.style.height = size * 2 + 'px';

    this.element.style.top = Control.clientHeight / 2 - size + 'px';
    this.element.style.left = Control.clientWidth / 2 - size + 'px';
}