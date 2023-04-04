const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var backgroundImg;
var baseimage;
var playerimage;
function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  
  

    var options={
      isStatic:true
      };

  playerBase = Bodies.rectangle(200, 400, 180, 150, options);
  World.add(world, playerBase);
  //criar corpo do jogador

  

  palyer = Bodies.rectangle(250, 250, 50, 180, options);
  World.add(world, palyer);


}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  rect(palyer.position.x,palyer.position.y,180,150);

  image(playerimage,palyer.position.x,palyer.position.y,50,180);

  //exibir a imagem da base do jogador usando a função image()
  rect(playerBase.position.x,playerBase.position.y,50,180);
  image(baseimage,playerBase.position.x, playerBase.position.y, 180, 150);
  
palyer.scale 
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
