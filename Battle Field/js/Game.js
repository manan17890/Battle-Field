class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })

    }

    update(state){

    database.ref('/').update({
    gameState : state
    })    
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }

        Fighter1 = createSprite(220 , 420);
        Fighter1.addImage("Fighter1" , player1Img);
        Fighter1.scale = 0.65;

        Fighter2 = createSprite(780 , 410);
        Fighter2.addImage("Fighter2" , player2Img);
        Fighter2.scale = 0.2;

        BulletGroup1 = createGroup();
        BulletGroup2 = createGroup();        
        
    
        Fighters = [Fighter1 , Fighter2];
    }    
    
   
    
    
    play(){

        form.hide()

        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            background("white")
            image(backgroundImg , 0 , 0 , 1000 , 500)

            var x = 250;
            var y = 200;
        }    
        
        if(keyIsDown("enter")){
            createBullet1()
        }

        function createBullet1() {
            var bullet1 = createSprite(230, 420, 60, 10);
            bullet1.addImage(bullet_img1);
            bullet1.x = Fighter1.x + 39
            bullet1.y=Fighter1.y +10;
            bullet1.velocityX = +4;
            bullet1.lifetime = 700;
            bullet1.scale = 0.1;
            BulletGroup1.add(bullet1);
             
        }

        function createBullet2() {
            var bullet2 = createSprite(780, 420, 60, 10);
            bullet2.addImage(bullet_img2);
            bullet2.x = Fighter2.x - 39
            bullet2.y=Fighter2.y + 10;
            bullet2.velocityX = -4;
            bullet2.lifetime = 700;
            bullet2.scale = 0.1;
            BulletGroup2.add(bullet2);
             
        }

        

    drawSprites();
    }
    }
    