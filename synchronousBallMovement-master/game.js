class Game{
    constructor(){}

    getState(){
        var gameStateRef  = Db.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gamestate = data.val();
        })
    }
    update(state){
        Db.ref('/').update({
          gamestate: state
        });
      }
    
       async start(){
        if(gamestate === 0){
            //new player name
            player = new Player();
            //wait till get a proper value; null,0,1,2,3,4; and return to the PlayerNumber 
            var playerCountRef = await Db.ref('playerCount').once("value");
            //if playernumber value is 0,1,2,3,4 then this function work.
            if(playerCountRef.exists()){
              Playernumber = playerCountRef.val();
              player.getCount();
            }
            //display a form the name and input and button and greeting
            form = new Form()
            form.display();
          }
    car1 = createSprite(100,200);
    //car1.addImage(car1img)
    car2 = createSprite(300,200);
    //car2.addImage(car2img)
    car3 = createSprite(500,200);
    //car3.addImage(car3img)
    car4 = createSprite(700,200);
    //car4.addImage(car4img)
    
    cars = [car1, car2, car3, car4];
       }


       play(){
           form.hide();
           Player.getPlayer();
           if(allPlayers !== undefined){
               var index=0;
               var x=175;
               var y;
               //foreach loop syntax;we are using it to travarse the array
               for (var plr in allPlayers){
                   index=index+1
                   x=x+200;
                   y=displayHeight-allPlayers[plr].distance;
                   cars[index-1].x=x;
                   cars[index-1].y=y;
                   camera.position.x=displayWidth/2;
                   camera.position.y=cars[index-1].y

               }
           }
           if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.updatePlayer();
          }
       }
}