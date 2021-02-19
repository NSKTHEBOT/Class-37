var Db,canvas,allPlayers,Playernumber,gamestate;
var car1,car2,car3,car4,cars;
function setup(){
  Db = firebase.database();
  console.log(Db);
 canvas=createCanvas(displayWidth,displayHeight);
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  if(Playernumber=== 4){
    game.update(1);
  }
  if(gamestate === 1){
    clear();
    game.play();
  }
}

