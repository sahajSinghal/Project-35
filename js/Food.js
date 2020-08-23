class Food
{
    constructor()
    {
        
    }
    

    getFoodStock()
    {
        var foodRef = database.ref('food');
        foodRef.on("value",function(data){
            foodStock = data.val();
        })
    }

    updateFoodStock(food)
    {
        database.ref('/').update({
            foodStock:food
        });
    }

    display()
    {
        var x = 80, y = 100;
        imageMode(CENTER);
        var milkImg = loadImage("images/Milk.png");
        image(milkImg,720,220,70,70);
        if(foodStock != 0)
        {
            for(var i = 0; i<=foodStock;i++)
            {
                if(i%10 === 0)
                {
                    x = 80;
                    y = y+50;
                }
                image(milkImg,x,y,50,50);
                x = x+30;
            }
        } 
    }
}