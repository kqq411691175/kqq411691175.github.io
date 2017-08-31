function Minute(color) {
    this.fillColor = color || 'red';
    Control.call(this);
}

Minute.prototype = Object.create(Seconds.prototype);

Minute.prototype.calcRenderArgs = function () {
    var args = {};
    args.duration = 3600;
    args.zIndex = 18;

    var time = new Date();
    var m = time.getMinutes() * -1;
    var s = time.getSeconds() * -1;
    args.delay = m * 60 - 15 * 60 + s;

    return args;
}

Minute.prototype.calcLayoutArgs = function () {
    var args = {};
    args.radius = Control.radius * 0.88;
    args.width = Control.radius * 1.13;
    args.height = Control.radius * 0.03;
    return args;
}