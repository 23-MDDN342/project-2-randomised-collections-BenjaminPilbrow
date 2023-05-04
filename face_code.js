/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

function clockFace1(hourParam, minuteParam, eyeballSize, eyeYOffset, pupilOffset, eyeCorner1, eyeCorner2, clockCorner1, clockCorner2, clockCorner3, clockCorner4, faceMode) {
  
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
  if (faceMode == '2') {
    clockColor = 0;
    shadowColor = 255, 0
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


