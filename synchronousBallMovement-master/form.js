class Form{
    constructor(){
        //add the small box pop up asking for name 
        this.title=createElement("H1");
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement("H2")
    }
    display(){
      //giving the position and text for the button,title, and input
      this.title.html("Multiplyer car racing game");
      this.title.position(displayWidth/2-50,0);
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      //when mouse is pressed we need to hide the button and the input . They add one player to the player.js
     this.button.mousePressed(()=>{
        this.input.hide();
        this.button .hide();
        //unpate the Playernumber var in player.js and udpate the Udapteplayer so it can add Player field in database. 
        player.name=this.input.value();
        Playernumber+=1;
        player.updatePlayer();
        player.updateCount(Playernumber);
        //greet the person like Welcome(NIKUNj)
        this.greeting.html("Welcome"+player.name);
        this.greeting.position(displayWidth/2-70,displayHeight/4);

        }) ;

    }
   
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.ttitle.hide();
    }
    
}