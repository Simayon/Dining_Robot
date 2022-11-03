/*Using the preload function to load an image as the background even before loading the canvas*/
function preload() {
  back = loadImage("MapImage.png");
}



/*Initializing two arrays to store the X and Y values of the mousePointer*/
var waypointsX=[];                //stores the value of X position of mouse pointer
var waypointsY=[];                //stores the value of Y position of the mouse pointer



/*Setting up the canvas for Drawing the points on*/
function setup() {
  createCanvas(1000, 1000);      //Creating a canvas of size 2000x2000
  translate(height/2,width/2);
}



var pos;                               //handles 
var i=0;
var resolution = 0.05;                 //1 pixel = 2 m
var aX =0;
var bY =0;
var aY = 0;
var bY =0;
var hypotenuse =0;




function draw() {
  
  background(back);                     //setting up the image file as the background

    for(var i=0;i<waypointsX.length;i++){

      strokeWeight(5);
      point(waypointsX[i], waypointsY[i]);
      strokeWeight(2);
      line(waypointsX[i-1],waypointsY[i-1],waypointsX[i], waypointsY[i])

      strokeWeight(3)
      
      for(var j = waypointsX[j])


    }
}


/*FUNCTION CALLED ON MOUSE CLICK EVENT*/
function mouseClicked() {


  //pushes into the array the value of the current mouse clicked position.
  waypointsX.push(mouseX);
  waypointsY.push(mouseY);

  print(""+waypointsX)
  print(""+waypointsY)
  // prevent default
  return false;
  }