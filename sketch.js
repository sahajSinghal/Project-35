//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImg;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

	createCanvas(500,500);
  
  dog = createSprite(250,250,30,30);
  dog.addImage(dogImg,250,250,30,30);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(happyDog,250,250,30,30);
  }

  drawSprites();
  //add styles here
  textSize(30);
  fill("green"); 
  stroke("red");
  text(foodS,100,300);
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x)
{
  if(x <= 0)
  {
    x = 0;
  }
  else
  {
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
