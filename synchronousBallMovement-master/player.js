class Player{
    constructor(){
        this.name= null;
        this.distance=0;
        this.index=null;

    }
//creating listner for playercount node=fielding in the firebase

getcount(){
    var refer=Db.ref("Playercount");
    refer.on("value",(data)=>{
     Playernumber=data.val();   
    })
}
//update the playercount node
updateCount(count){
    Db.ref("/").update({
        Playercount:count
    })
}
//reading data from players node
static getPlayer(){
    Db.ref("Players").on("value",(data)=>{
     allPlayers=data.val();
    })
    
}
updatePlayer(){
    Db.ref("Players"+this.index).update({
       Name:this.name,
       Distance:this.distance
    })
}

}
