function Hour(color) {
    this.fillColor = color || 'red';
    Control.call(this);
}

Hour.prototype = Object.create(Seconds.prototype);

Hour.prototype.calcRenderArgs = function () {
    var args = {};
    args.duration = 43200;
    args.zIndex = 17;

    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes() * -1;
    var s = time.getSeconds() * -1;
    h = (h > 12 ? h - 12 : h) * -1;
    args.delay = h *3600 - 3 * 3600 + m * 60 + s;
    return args;
}

Hour.prototype.calcLayoutArgs = function () {
    var args = {};
    args.radius = Control.radius * 0.7;
    args.width = Control.radius * 0.9;
    args.height = Control.radius * 0.04;
    return args;
}