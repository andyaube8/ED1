function setup() {
  createCanvas(innerWidth, innerWidth);
  strokeWeight(5);
  background(255)
}

function draw() {
  frameRate(1);

  var margin = 20;
  var width = innerWidth - 2*margin;
  var height = innerWidth - 2*margin;
  var space = (5);
  var shift = (2);

  var numSquares = 3;
  var sideLen = width/numSquares;

  translate(margin,margin);
  for(var y=0; y < height; y = y + sideLen){
    for(var x=0; x < width; x = x + sideLen){
      if(x == sideLen && y == sideLen){
        fill(0,0,0);
        stroke(255,255,255)
      }
      else {
        fill(random(200,255),random(200,255),random(200,255),255);
        stroke(0,0,0);
      }

      quad(x+space+random(-shift, shift), y+space+ random(-shift, shift), x+sideLen-space+random(-shift, shift),y+space+random(-shift, shift), x+sideLen-space+random(-shift, shift),y+sideLen-space+random(-shift, shift), x+space+random(-shift, shift),y+sideLen-space+random(-shift, shift));
    }
  }
   // noLoop();
}
