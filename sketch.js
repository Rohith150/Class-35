var hypnoticBall, database;
var position;
var form, player, game;

var gameState = 0;
var playerCount = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(1000,600);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){



}
