/*
 * This editor shows the possible faces that can be created
 */

const canvasWidth = 960;
const canvasHeight = 500;
const bg_color = [71, 222, 219];
let slider1, slider2, slider3, slider4, slider5;
let slider6, slider7, slider8, slider9, slider10;
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
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 50, 25); // eye corner 1
  slider6 = createSlider(0, 50, 25); // eye corner 2
  slider7 = createSlider(0, 100, 50); // clock corner 1
  slider8 = createSlider(0, 100, 50); // clock corner 2
  slider9 = createSlider(0, 100, 50); // clock corner 3
  slider10 = createSlider(0, 100, 50); // clock corner 4

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

  let hourParam = slider1.value(); // Set the hour parameter (0-11)
  let minuteParam = slider2.value(); // Set the minute parameter (0-59)
  let s3 = slider3.value();
  let s4 = slider4.value();
  let eyeCorner1 = slider5.value(); // Eye roundness 1
  let eyeCorner2 = slider6.value(); // Eye roundness 2
  let clockCorner1 = slider7.value(); // Clock roundness 1
  let clockCorner2 = slider8.value(); // Clock roundness 2
  let clockCorner3 = slider9.value(); // Clock roundness 3
  let clockCorner4 = slider10.value(); // Clock roundness 4

  let show_face_guide = faceGuideCheckbox.checked();




  // Set clock face parameters
  let clockSize = 200;
  let clockX = width / 2;
  let clockY = height / 2;
  let clockColor = color(255);
  let shadowColor = color(0, 50);
  let shadowOffset = 5;
  let notchColor = color(0);
  let notchSize = 10;
  let handColor = 0;





  let eyeX = clockX - 50;
  let eyeY = clockY - 90;
  let eyeSize = 70;


  let eyeOffset = 100;


  if (mode == '2') {
    clockColor = 0;
    notchColor = 255;
    handColor = 255;
 }




  // Left Eye Base
  noStroke()
  fill(clockColor)
  rect(eyeX, eyeY, eyeSize, eyeSize + 30, eyeCorner1, eyeCorner2)

  // Left Eye Ball
  fill(notchColor);
  ellipse(eyeX, eyeY -10, 50, 50)

  // Left Eye Pupil
  fill(clockColor)
  ellipse(eyeX -20, eyeY -10, 30, 40)


  // Right Eye Base
  noStroke()
  fill(clockColor)
  rect(eyeX + eyeOffset, eyeY, eyeSize, eyeSize + 30, eyeCorner1, eyeCorner2)

  // Right Eye Ball
  fill(notchColor);
  ellipse(eyeX + eyeOffset, eyeY -10, 50, 50)

  // Right Eye Pupil
  fill(clockColor)
  ellipse(eyeX -20 + eyeOffset, eyeY -10, 30, 40)



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


  
//  if (mode == '3') {
//    simplePurpleFace();
//  }


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
