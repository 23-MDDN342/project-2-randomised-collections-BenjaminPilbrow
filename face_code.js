/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function clockFace1(tilt_value, eye_value, mouth_value) {
  
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
let eyeRightOffset = 100;


if (mode == '2') {
  clockColor = 0;
  notchColor = 255;
  handColor = 255;
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






}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
