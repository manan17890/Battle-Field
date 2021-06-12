class Player{
    constructor(){
    this.name = null;
    this.index = null;
    this.lives = 5;

    }
    getCount(){

    var playerCountRef = database.ref('playerCount')
    playerCountRef.on("value" , (data) =>{
    playerCount = data.val()
    })
}
    updateCount(count){
    database.ref('/').update({
     playerCount: count
    })
}
    update(){

        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
           name:this.name,
           lives:this.lives

        });
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
        allPlayers = data.val()
        })
    }


}