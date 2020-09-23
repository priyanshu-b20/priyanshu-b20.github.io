var player;
var play;
var name;
window.onload = function(){
    player = document.getElementById('txt');
    play = document.getElementById('sub');
    player.style.top = innerHeight/2-80 + 'px';
    player.style.left = innerWidth/2-150 + 'px';
    play.style.top = innerHeight/2 + 'px';
    play.style.left = innerWidth/2-150 + 'px';
    
}
function play_game(){
    name = document.getElementById('txt').value;
    if(name==''||name==undefined){
        player.placeholder = 'Enter Name!';
    }else{
        player.style.display = 'none';
        play.style.display = 'none';
        flag = 2;
    }
    
}
var flag = 0;
    var ball = {
        x : innerWidth/2,
        y : innerHeight/2,
        xspeed : 4,
        yspeed : -3
    };
var score =0;
    var yn = false;
    var y_ = innerHeight/2-50;
    function opp(){
            rect(width-20,y_,20,100);
            if(ball.x > width/2){
                if(ball.y > y_){
                    if(y_ >= height-100)return;
                    y_+=5;
                }
                if(ball.y < y_){
                    if(y_ <= 0)return;
                    y_-=5;
                }
            }

    }
var balls=3;
var arcade;
var frame;
var scoret=0;
var ballc = 3;
    var y = innerHeight/2-50;
    function setup(){
        createCanvas(window.innerWidth,window.innerHeight);
        arcade = loadFont('ARCADECLASSIC.TTF');
        frame= 8;
        textFont(arcade);
    }
    function end(){
        if(keyIsDown(UP_ARROW)){
            draw();
        }
        return;
    }
    function draw(){
        if(flag==2){
            textSize(100);
            fill(255);
            text(name,width/2-textWidth(name)/2,height/2);
            setTimeout(function(){
                background(0);
            },1000);
            flag = 1;
        }
        if(flag==1 && ballc >0){
            background(0);
            stroke(255);
            fill(255);
            fill(255);
            strokeWeight(10);
            point(ball.x,ball.y);

            line(width/2,0,width/2,height);
            strokeWeight(0);
            textSize(22);

//            text(name,100,100);
            textSize(18)
            rect(width/2-40,0,80,25);
            rect(width/2-40,height-25,80,25)
            strokeWeight(10);
            stroke(0);
            var k=0;
            for(var j = 0 ; j < ballc ; j++){
                k+=26.66;
                point((width/2-52)+k,height-10);
            }
            stroke(255);
        
            fill(0);
            strokeWeight(0);
            var sc = '';
            sc = score.toString();
            text(score,width/2-textWidth(sc)/2,20);
            fill(255);
            if(ball.x < 0||ball.x > width){
                ballc--;
                xspeed = 4;
                yspeed = -3;
                ball.x = width/2;
                ball.y = height/2;
            }
            if((ball.x > width-20 && ball.y >= y_ && ball.y <= y_+100 ) || (ball.x < 20 && ball.y >= y && ball.y <= y+100 )){
                ball.xspeed*=(-1);
            }
            if(ball.y > height || ball.y < 0){
                ball.yspeed*=(-1);
            }
            ball.x+=ball.xspeed;
            ball.y+=ball.yspeed;
            strokeWeight(0);
            rect(0,y,20,100);
            if(keyIsDown(UP_ARROW)){
                if(y<=0)return;
                y-=5;
            }
            if(keyIsDown(DOWN_ARROW)){
                if(y>=height-100)return;
                y+=5;
            }
                    if(scoret == frame){score++;frame+=8;}
            opp();
            scoret++;
        }
        if(ballc <= 0){
            if(flag!=5){            
            background(0);
            fill(255);
            textSize(100);
            text("END GAME!",width/2-textWidth("END GAME!")/2,height/2);
            setTimeout(function(){
                flag = 5;
            },2000);
            
        
            }
            else{
                background(0);
                var str = name+" your score: "+score;
                text(str,width/2-textWidth(str)/2,height/2)
            }
        }
        
    }
