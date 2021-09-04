var garden,rabbit,apple,redL,orangeL,leaf;
  var gardenImg,rabbitImg,appleImg,redLImg,orangeLImg,leafImg;

    function preload()
   {
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    appleImg = loadImage("apple.png"); 
    redLImg = loadImage("redImage.png")
    orangeLImg = loadImage("orangeLeaf.png")
  }

    function setup()
   {
    createCanvas(400,400);
 
    // Moving background
    garden=createSprite(200,200);
    garden.addImage(gardenImg);
  
    //creating  rabbit
    rabbit = createSprite(180,340,30,30);
    rabbit.scale =0.09;
    rabbit.addImage(rabbitImg);  
   }






   function draw() 
  {
   background(0);
  
   rabbit.x = World.mouseX
 
   edges= createEdgeSprites();
   rabbit.collide(edges);
  
   drawSprites();
  
   var select_sprites = Math.round(random(1,2));

   if(frameCount % 80 == 0 )
  {
   if(select_sprites == 1 )
  {
   createApples();
  }
   else if(select_sprites == 2 )
  {
   createOrangeLeaf();
  }
   else if(select_sprites == 3 )
  {
   createRedLeaf();
  }
   else if(select_sprites == 4 )
  {
   createLeaf()
  }
  }
  
  }

   function createApples()
  {
   apple = createSprite(random(50,350),40,10,10);
   apple.addImage("staying",appleImg)
   apple.velocityY=10;
   apple.scale=0.09;
   apple.lifetime=0.01;
  }

   function createOrangeLeaf()
  {
   var orangeL = createSprite(random(100,250),40,10,10);
   orangeL.addImage("staying",orangeLImg)
   orangeL.velocityY=8;
   orangeL.scale=0.09;
   orangeL.lifetime=50;
  }

   function createRedLeaf()
  {
   redL = createSprite(random(90,330),40,10,10);
   redL.addImage("staying",redLImg)
   redL.velocityY=8;
   redL.scale=0.9;
   redL.lifetime=50;
  }

   function createLeaf()
  {
   leaf = createSprite(random(150,260),40,10,10);
   leaf.addImage("falling",leafImg);
   leaf.velocityY=8;
   leaf.scale=0.9;
   redL.lifetime=50;

  }














 
