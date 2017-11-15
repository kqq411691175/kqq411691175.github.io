// 开发工程师 -> 系统分析师（设计师） -> 架构师
// ------------------------------
//         反复修改
//         重构

// 小球的构造函数
function Ball(){
    // 小球的半径，从20到80的随机数
    this.radius = Math.random() * 50 + 20
    // 小球的填充颜色HSL
    this.fillColor = {hue: Math.random() * 360, 
                    saturation: 1, 
                    lightness: 0.5}
    
    // 每步最大移动距离的2倍
    this.stepLength = 4
    // 保证stepLeft和stepTop的值都不等0
    while(!this.stepLeft || !this.stepTop){
        // 每次移动时向左或右移动的距离
        this.stepLeft = Math.random() * this.stepLength - this.stepLength / 2
        // 每次移动时向下或向上移动的距离
        this.stepTop = Math.random() * this.stepLength - this.stepLength / 2
    }
    
    // 保存和当前小球重叠在一起小球
    this.hits = []
    this.times = 0
}

// 创建小球并显示到页面上，小球的位置和颜色都是随机的
Ball.prototype.show = function() {
    // 小球的直径
    var d = this.radius * 2
    // 小球左上角允许的范围
    var w = $(window).width() - d
    var h = $(window).height() - d
    
    console.log('w: %f, h: %f', w, h)
    
    // 小球的标签元素
    this.$ele = $('<div></div>').css({
        'width': d + 'px',
        'height': d + 'px',
        'background-color': $.Color(this.fillColor),
        'border-radius': '50%',
        'position': 'absolute',
        'left': w * Math.random() + 'px',
        'top': h * Math.random() + 'px' 
    }).appendTo('body')
}

// 让小球向前走一步，如果遇到窗口边缘则反弹
Ball.prototype.step = function(){
    // 小球左上角坐标
    var coords = this.$ele.offset()
    var d = this.radius * 2
    var w = $(window).width() - d
    var h = $(window).height() - d
    
    // 小球下一步的位置
    var nextLeft = coords.left + this.stepLeft
    var nextTop = coords.top + this.stepTop
    
    // 小球是否遇到窗口边缘
    if(nextLeft <= 0 || nextLeft >= w){
        // 反射，即改变运动方向
        this.stepLeft *= -1
    }
    if(nextTop <= 0 || nextTop >= h){
        this.stepTop *= -1
    }
    
    // 小球的新坐标
    coords.left += this.stepLeft
    coords.top += this.stepTop
    
    // 让小球移到新坐标
    this.$ele.offset(coords)
}

// 测试小球之间的碰撞
Ball.prototype.testHit = function(ball){
    // 两个小球左上角的坐标
    var thisCoords = this.$ele.offset()
    var ballCoords = ball.$ele.offset()
    
    // 两个小球圆心坐标差
    var a = (thisCoords.left + this.radius) - (ballCoords.left + ball.radius)
    var b = (thisCoords.top + this.radius) - (ballCoords.top + ball.radius)
    
    // 两个小球圆心之间的距离
    var distance = Math.sqrt(a * a + b * b)
    // 两个小球外缘之间的距离
    var md = distance - this.radius - ball.radius
    
    // ball小球是否在当前小球的重叠小球中
    var index = this.hits.indexOf(ball)
    
    // ball小球在当前小球的重叠小球中，并且已经远离10px
    if(index > -1 && md > 10){
        // 从重叠小球中把ball删掉，并将index标记为-1
        this.hits.splice(index)
        index = -1
    }
    
    // ball小球不在重叠小球数组中，并且两个小球碰撞在一起
    // 如果ball小球已经在重叠小球数组中，即使两个小球碰撞在一起
    // 也不会执行下面的代码
    if(index == -1 && md <= 0){
        // 将ball小球添加到重叠小球数组中
        this.hits.push(ball)
        
        // this.fillColor.hue = Math.random() * 360
        // this.$ele.css('background-color', $.Color(this.fillColor))
        // ball.fillColor.hue = Math.random() * 360
        // ball.$ele.css('background-color', $.Color(ball.fillColor))
        
        // this.$ele.text(++this.times)
        // ball.$ele.text(++ball.times)
        
        // 解决两个小球正面或侧面碰撞
        if(this.stepLeft * ball.stepLeft < 0){
            this.stepLeft *= -1
            ball.stepLeft *= -1
        }
        if(this.stepTop * ball.stepTop < 0){
            this.stepTop *= -1
            ball.stepTop *= -1
        }
        
        // 解决两个小球追尾（同向运动）
        if(this.stepLeft * ball.stepLeft > 0 && 
            this.stepTop * ball.stepTop > 0){
            
            // 判断哪个方向移动的更快
            // 将移动快的方向上的“速度”交换一下
            // 将移动慢的方向上的速度变成反向运动
            if(this.stepLeft + ball.stepLeft > this.stepTop + ball.stepTop){
                var a = this.stepLeft
                this.stepLeft = ball.stepLeft
                ball.stepLeft = a
                
                if(this.stepLeft < ball.stepLeft){
                    this.stepTop *= -1
                }
                else{
                    ball.stepTop *= -1
                }
            }
            else{
                var a = this.stepTop
                this.stepTop = ball.stepTop
                ball.stepTop = a  
                
                if(this.stepTop < ball.stepTop){
                    this.stepLeft *= -1
                }
                else{
                    ball.stepLeft *= -1
                }
            }
        }
    }
}