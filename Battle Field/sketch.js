var Fighter1 , Fighter2 , Fighters ,bullet_img2,bullet_img1 , bullet1 , bullet2 , BulletGroup1 , BulletGroup2, back_img;
var allPlayers, database;
var playerCount;
var gameState = 0;
var backgroundImg , player1Img , player2Img;
var form, player, game;


function preload(){

  backgroundImg = loadImage("images/background.jpg");
  player1Img = loadImage("images/player1A.png");
  player2Img = loadImage("images/player2.png");
  back_img = loadImage("images/background2.jpg")
  bullet_img1 = loadImage("images/bullet1.png")
  bullet_img2 = loadImage("images/bullet2.png")

}

function setup(){
  canvas = createCanvas(1000 , 500);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
}
function draw(){

  background(back_img);

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
