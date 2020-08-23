//Create variables here
var dog, happyDog, database, foodS, foodStock = 0, dogImg;
var feedButton, addButton;
var fedTime, lastFed;
var foodObj;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);

	createCanvas(1000,1000);
  
  foodObj = new Food();

  feedButton = createButton("Feed the Dog");
  feedButton.position(700,95);
  feedButton.mousePressed(feedDog);

  addButton = createButton("Add Food");
  addButton.position(800,95);
  addButton.mousePressed(addFood);

  dog = createSprite(250,250,30,30);
  dog.addImage(dogImg);
}

function draw() {  
  background(46,139,87);
  foodObj.display();
  drawSprites();
  textSize(30);
  text("foodStock : "+ foodStock,600,200);

  fill(255,255,254);
  textSize(15);
  
  if(lastFed >= 12)
  {
    text("Last Feed: "+lastFed%12 +" PM",350,30);
  } 
  else if(lastFed === 0)
  {
    text("Last Feed: 12 AM",350,30);
  }
  else
  {
    text("Last Feed: "+lastFed+" AM",350,30);
  }
}

function feedDog()
{
  dog.addImage(happyDog);
  foodObject.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    food:foodObject.getFoodStock(),
    fedTime:hour() 
  })
}

function addFood()
{
  foodStock++;
  database.ref('/').update({
    food:foodStock
  })
}