const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var datetime;
var bg = "sunrise1.png";
//var bg = "sunrise1.png";
var bg ="sunrise3.png";
var bg ="sunrise4.png";
var bg ="sunrise5.png";
var bg ="sunrise6.png";
var bg = "sunset7.png";
var bg = "sunset8.png";
var bg = "sunset9.png";
var bg = "sunset10.png";
var bg = "sunset11.png";
var bg = "sunset12.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);

    
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 
    //change the data in JSON format and store it in variable responseJSON
    var responseJSON = await response.json();

    
    //fetch datetime from responseJSON
    var datetime = responseJSON.datetime;
    

    // slice the datetime to extract hour
    var hour = datetime.slice(11,13);

    
    if(hour>=4 && hour<6 ){
        bg = "sunrise1.png";
    }
    else if(hour>=7 && hour<9){
        bg="sunrise3.png"
    }
    else if(hour>=10 && hour<=11){
        bg ="sunrise4.png"
    }
    else if(hour>=12 && hour<=13){
        bg ="sunrise5.png"
    }
    else if(hour>=14 && hour<=15){
        bg ="sunrise6.png"
    }
    else if(hour>=16 && hour<=17){
        bg ="sunset7.png"
    }
    else if(hour>=18 && hour<=19){
        bg ="sunset8.png"
    }
    else if(hour>=20 && hour<=21){
        bg ="sunset9.png"
    }
    else if(hour>= 22 && hour<=23){
        bg ="sunset10.png";
    }
else if(hour >=00 && hour<=01){
    bg = "sunset11.png";
}
else{
    bg = "sunset12.png";
}
     
    backgroundImg = loadImage(bg);
}
