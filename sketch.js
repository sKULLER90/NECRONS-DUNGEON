var bg1
var bg2
var fs

function preload()
{
  bg1=loadImage("dungeondoor.jpg")
  bg2=loadImage("DungeonEntranceRoom.jpg")

}

function setup() {
	createCanvas(800, 800);

    fs = new Firstscreen()


  
}


function draw() {
 
  background(0);
  fs.display()

 
}



