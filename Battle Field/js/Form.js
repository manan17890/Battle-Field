class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton("PLAY")
        this.greeting = createElement('h2')
        this.title = createElement('h1');
        this.reset = createButton("RESET")
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();    
    }
    display(){

        this.title.html("BATTLE FIELD")
        this.title.position(235 , 40)
        this.title.style('font-size', '70px');
        
        this.input.position(390 , 200)
        this.input.style('width', '200px');
        this.input.style('height', '20px');

        this.button.position(440 , 250)
        this.button.style('width', '100px');
        this.button.style('height', '40px');

        this.reset.position(900 , 450)

        this.button.mousePressed(() =>{

        this.input.hide()
        this.button.hide()
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(370, 200);
        this.greeting.style('font-size', '50px');
        
       

        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
          });






    }







































}