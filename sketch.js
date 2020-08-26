var ball;
var rightEdge,leftEdge;
var playerPaddle;

var gameState = "serve";

function preload(){

}

function setup() {
  createCanvas(600,600);
  
  ball = createSprite(300,300,15,15);
  ball.shapeColor = "red";

  playerPaddle = createSprite(200,580,110,10);
  playerPaddle.shapeColor = "red";

  rightEdge = createSprite(605,300,5,600);
  leftEdge = createSprite(-5,300,5,600);
}

function draw() {

  background(0,100,255);

  playerPaddle.position.x = mouseX;
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(playerPaddle);

  serve();

  drawSprites();
 
}

function serve(){
if(gameState === "serve"&& keyCode === 32){
	ball.velocityX = 3;
	ball.velocityY = 4;

	if(ball.isTouching(playerPaddle)){
		ball.velocityX = ball.velocityY*-1;
	}
}
}
