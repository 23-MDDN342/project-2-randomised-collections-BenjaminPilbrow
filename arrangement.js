/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [71, 222, 219];
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

  // draw a 7x4 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
  
        let hourParam = random(0,11); // Set the hour parameter (0-11)
        let minuteParam = random(0,59); // Set the minute parameter (0-59)
        let eyeballSize = random(10,50); // Eyeball Size
        let eyeYOffset = random(0,15);// eyeYOffset
        let pupilOffset = random(-10,10); // eyeYOffset
        let eyeCorner1 = random(10,50); // Eye roundness 1
        let eyeCorner2 = random(10,50);// Eye roundness 2
        let clockCorner1 = random(10,100);// Clock roundness 1
        let clockCorner2 = random(10,100);// Clock roundness 2
        let clockCorner3 = random(10,100); // Clock roundness 3
        let clockCorner4 = random(10,100);// Clock roundness 4
       

        push();
        //translate(x, y);
        //scale(w/25, h/25);
        
        clockFace1(hourParam, minuteParam, eyeballSize, eyeYOffset, pupilOffset, eyeCorner1, eyeCorner2, clockCorner1, clockCorner2, clockCorner3, clockCorner4);
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
