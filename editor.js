/*
 * This editor shows the possible faces that can be created
 */

const canvasWidth = 960;
const canvasHeight = 500;
const bg_color = [20];
let slider1, slider2, slider3, slider4, slider5;
let slider6, slider7, slider8, slider9, slider10;
let slider11, slider12, slider13, slider14, slider15;
let faceSelector;
let faceGuideCheckbox;

function setup () {

  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  angleMode(DEGREES)

  // create sliders
  slider1 = createSlider(0, 11, 0); // hour hand
  slider2 = createSlider(0, 59, 0); // minute hand
  slider3 = createSlider(10, 50, 25); // eyeball size
  slider4 = createSlider(0, 15, 10); // eyeYoffset
  slider5 = createSlider(-10, 10, 10); // eyeYoffset
  slider6 = createSlider(10, 50, 25); // eye corner 1
  slider7 = createSlider(10, 50, 25); // eye corner 2
  slider8 = createSlider(10, 100, 50); // clock corner 1
  slider9 = createSlider(10, 100, 50); // clock corner 2
  slider10 = createSlider(10, 100, 50); // clock corner 3
  slider11 = createSlider(10, 100, 50); // clock corner 4

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');
  slider6.parent('slider6Container');
  slider7.parent('slider7Container');
  slider8.parent('slider8Container');
  slider9.parent('slider9Container');
  slider10.parent('slider10Container');
  slider11.parent('slider11Container'); 

  faceGuideCheckbox = createCheckbox('', false);
  faceGuideCheckbox.parent('checkbox1Container');

  faceSelector = createSelect();
  faceSelector.option('1');
  faceSelector.option('2');
  faceSelector.option('3');
  faceSelector.value('1');
  faceSelector.parent('selector1Container');
}

function draw () {

  strokeWeight(0.2);

  let mode = faceSelector.value();

  background(bg_color);
  rectMode(CENTER)

  let hourParam = slider1.value(); // hour hand
  let minuteParam = slider2.value(); // minute hand
  let eyeballSize = slider3.value(); // eyeball Size
  let eyeYOffset = slider4.value(); // eyeYOffset
  let pupilOffset = slider5.value(); // eyeYOffset
  let eyeCorner1 = slider6.value(); // eye roundness 1
  let eyeCorner2 = slider7.value(); // eye roundness 2
  let clockCorner1 = slider8.value(); // clock roundness 1
  let clockCorner2 = slider9.value(); // clock roundness 2
  let clockCorner3 = slider10.value(); // clock roundness 3
  let clockCorner4 = slider11.value(); // clock roundness 4

  let show_face_guide = faceGuideCheckbox.checked();

  // Clock face parameters
  let clockSize = 200; // base clock size
  let clockX = width / 2; // clock X location
  let clockY = height / 2; // clock Y location
  let clockColor = color(255); // clock colour
  let shadowColor = color(0, 255); // clock shadow colour
  let shadowOffset = 5; // shadow offset
  let notchColor = color(0); // notch colour
  let notchSize = 10; // notch size
  let handColor = 0; // hand colour
  let eyeX = clockX - 50; // eye X location (reletave to clockX)
  let eyeY = clockY - 90; // eye Y location (reletave to clockY)
  let eyeSize = 70; // eye size
  let eyeRightOffset = 100; // second eye X offset

  // Handle if clock should invert colour
  if (mode == '2') {
    clockColor = 0;
    notchColor = 255;
    handColor = 255;
    shadowColor = 255, 0
 }

  // Left Eye Base
  noStroke()
  fill(clockColor)
  rect(eyeX, eyeY + eyeYOffset, eyeSize, eyeSize + 40, eyeCorner1, eyeCorner2)

  // Left Eye Ball
  fill(notchColor);
  ellipse(eyeX, eyeY -10, eyeballSize, eyeballSize)

  // Left Eye Pupil
  fill(clockColor)
  ellipse(eyeX + pupilOffset, eyeY -10, eyeballSize/2 + 8, eyeballSize/1.5)

  // Right Eye Base
  noStroke()
  fill(clockColor)
  rect(eyeX + eyeRightOffset, eyeY + eyeYOffset, eyeSize, eyeSize + 40, eyeCorner1, eyeCorner2)

  // Right Eye Ball
  fill(notchColor);
  ellipse(eyeX + eyeRightOffset, eyeY -10, eyeballSize, eyeballSize)

  // Right Eye Pupil
  fill(clockColor)
  ellipse(eyeX + pupilOffset + eyeRightOffset, eyeY -10, eyeballSize/2 + 8, eyeballSize/1.5)

  // Draw clock shadow
  fill(shadowColor);
  rect(clockX + shadowOffset, clockY + shadowOffset, clockSize, clockSize, clockCorner1, clockCorner2, clockCorner3, clockCorner4);

  // Draw clock face
  fill(clockColor);
  rect(clockX, clockY, clockSize, clockSize, clockCorner1, clockCorner2, clockCorner3, clockCorner4);

  // Draw hour notches
  strokeWeight(4);
  stroke(notchColor);
  noFill();
  for (let i = 0; i < 12; i++) {
    let angle = i * 30 - 90; // 30 degrees per hour
    let x1 = clockX + cos(angle) * (clockSize / 2 - notchSize);
    let y1 = clockY + sin(angle) * (clockSize / 2 - notchSize);
    let x2 = clockX + cos(angle) * (clockSize / 2);
    let y2 = clockY + sin(angle) * (clockSize / 2);
    line(x1, y1, x2, y2);
  }

  // Draw hour hand
  let hourSize = clockSize / 2;
  let hourAngle = map(hourParam % 12, 0, 12, 0, 360);
  strokeWeight(5);
  stroke(handColor);
  line(clockX, clockY, clockX + cos(hourAngle - 90) * hourSize, clockY + sin(hourAngle - 90) * hourSize);

  // Draw minute hand
  let minuteSize = clockSize / 2.5;
  let minuteAngle = map(minuteParam, 0, 60, 0, 360);
  strokeWeight(5);
  stroke(handColor);
  line(clockX, clockY, clockX + cos(minuteAngle - 90) * minuteSize, clockY + sin(minuteAngle - 90) * minuteSize);

// Face guide
if(show_face_guide) {
  strokeWeight(0.1);
  rectMode(CORNER); 
  noFill()
  stroke(0, 0, 255);
  rect(-10, -10, 20, 20);
  line(  0, -11,  0, -10);
  line(  0,  10,  0, 11);
  line(-11,   0,-10,  0);
  line( 11,   0, 10,  0);
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
