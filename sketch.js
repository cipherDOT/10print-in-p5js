let x;
let y;
let rez;
let c = 0;
// 10 print in javascript with p5
// latest update:
//      it changes the strokeWeight in the order [0, 1, 2, 3] as
//      <class count> variable c increases every loop and <random m> chooses teal sometimes for stroke!

function setup() {
    createCanvas(windowWidth, windowHeight);
    // background(11, 66, 79);
    // background(105,105,105);
    // background(0);
    background(20);
    // background(51);
    x = 0;
    y = 0;
    rez = 20;
}

function draw() {
    for (let i = 0; i < 10; i++) {
        stroke(51);
        strokeWeight(c % 4);
        n = random(1);
        m = random(1);
        if (m > 0.7) {
            stroke(0, 128, 128);
        }
        if (n > 0.5) {
            line(x, y, x + rez, y + rez);
        } else {
            line(x, y + rez, x + rez, y);
        }
        x += rez;

        if (x > width) {
            x = 0;
            y += rez;
        }
        if (x > width && y > height) {
            noLoop();
        }
        c++;
    }
}
