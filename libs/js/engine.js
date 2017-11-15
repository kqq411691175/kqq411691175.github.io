// 小球总数
var count = 15
var balls = []

// 创建指定数目的小球并放入balls数组
for (var i = 0; i < count; i++) {
    balls.push(new Ball())
}

// 在页面上显示每一个小球
balls.forEach(function(ball, i, arr){
    ball.show()
})

// 让小球不断运动
function move(){
    // 检查小球两两之间是否碰撞
    // 同一小球不会检测自己和自己碰撞
    // 注意内部for循环使用的 k = j+1
    for(var j = 0; j < balls.length; j++){
        for(var k = j + 1; k < balls.length; k++){
            balls[j].testHit(balls[k])
        }
    }
    
    // 让每一个小球都向前走一步
    balls.forEach(function(ball, i, arr){
        ball.step()
    })
    
    requestAnimationFrame(move)
}

requestAnimationFrame(move)