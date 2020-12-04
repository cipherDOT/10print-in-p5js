let x;
let y; 
let rez;

// 10 print in javascript with p5 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  x = 0;
  y = 0;
  rez = 20;
}

function draw() {
  stroke(20);
  strokeWeight(3);
  n = random(0, 1);
  if (n > 0.5) {
    // stroke(220);
    line(x, y, x + rez, y + rez);
  } else if (n < 0.5) {
    // stroke(47);
    line(x, y + rez, x + rez, y);
  }
  x += rez;

  if (x > width) {
    x = 0;
    y += rez;
  }
  if ( x > width && y > height) {
    noLoop();
  }
}

