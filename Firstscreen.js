class Firstscreen {

    constructor() {
     
      this.button = createButton('ENTER');
            this.title = createElement('h2');
    }
    hide(){
    
      this.button.hide();
           this.title.hide();
    }
  
    display(){
        
      this.title.html("NECRON'S DUNGEON");
      this.title.position(280, 10);
  background(bg1)
     // this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(370, 770);
  2
        /*this.reset.position(displayWidth-100, 20)
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
      player.updateCount(0)
        game.update(0)
      });
    }*/
  }
}