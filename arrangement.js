/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [20];
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));
 
  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // background lines
  for(let i=0; i<4; i++) {
    fill(color(0, 50))
    rect(0+i*275, 0, 140, 500)
    }

  // draw a 7x4 grid of clock faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;

  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
  
        let hourParam = random(0,11); // hour hand
        let minuteParam = random(0,59); // minute hand
        let eyeballSize = random(20,50); // eyeball size
        let eyeYOffset = random(0,10);// eyeY Offset
        let pupilOffset = random(-10,10); // pupil Offset
        let eyeCorner1 = random(10,50); // eye corner 1
        let eyeCorner2 = random(10,50);// eye corner 2
        let clockCorner1 = random(10,100);// clock corner 1
        let clockCorner2 = random(10,100);// clock corner 2
        let clockCorner3 = random(10,100); // clock corner 3
        let clockCorner4 = random(10,100);// clock corner 4
        let faceMode = int(random(1, 3)); // determine which face should be displayed

        push();

        rectMode(CENTER)
        translate(x -240, y - 120);
        scale(0.5)

        // call face function
        clockFace1(hourParam, minuteParam, eyeballSize, eyeYOffset, pupilOffset, eyeCorner1, eyeCorner2, clockCorner1, clockCorner2, clockCorner3, clockCorner4, faceMode);
       
        pop();
      
    }
  }

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
