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
  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(0, 100, 50);
  slider3 = createSlider(0, 100, 50);
  slider4 = createSlider(0, 100, 50);
  slider5 = createSlider(0, 100, 50);
  slider6 = createSlider(0, 100, 50);
  slider7 = createSlider(0, 100, 50);
  slider8 = createSlider(0, 100, 50);
  slider9 = createSlider(0, 100, 50);
  slider10 = createSlider(0, 100, 50);

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

  let s1 = slider1.value();
  let s2 = slider2.value();
  let s3 = slider3.value();
  let s4 = slider4.value();
  let s5 = slider5.value();
  let s6 = slider6.value();
  let s7 = slider7.value();
  let s8 = slider8.value();
  let s9 = slider9.value();
  let s10 = slider10.value();

  let show_face_guide = faceGuideCheckbox.checked();

  let hourParam = 6; // Set the hour parameter (0-11)
let minuteParam = 45; // Set the minute parameter (0-59)



  // Set clock face parameters
  let clockSize = 200;
  let clockX = width / 2;
  let clockY = height / 2;
  let clockColor = color(255);
  let shadowColor = color(0, 50);
  let shadowOffset = 5;
  let notchColor = color(0);
  let notchSize = 10;

  // Draw clock shadow
  noStroke()
  fill(shadowColor);
  ellipse(clockX + shadowOffset, clockY + shadowOffset, clockSize);

  // Draw clock face
  fill(clockColor);
  ellipse(clockX, clockY, clockSize);

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
  stroke(0);
  line(clockX, clockY, clockX + cos(hourAngle - 90) * hourSize, clockY + sin(hourAngle - 90) * hourSize);

  // Draw minute hand
  let minuteSize = clockSize / 2.5;
  let minuteAngle = map(minuteParam, 0, 60, 0, 360);
  strokeWeight(3);
  stroke(0);
  line(clockX, clockY, clockX + cos(minuteAngle - 90) * minuteSize, clockY + sin(minuteAngle - 90) * minuteSize);



  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
