[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/TMOxyln0)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10649341&assignment_repo_type=AssignmentRepo)
## 2023 MDDN342 Assignment 2: Randomised Collections
**This is where you talk about your project!**

>FINAL READ ME


For this project I aimed to create a selection of simple parameterised clock faces that could produce a range of randomised results. 

The faces use the hour and minute hand to act as an abstracted form of mouth which can change expersion depending on what value is selected. The clock also includes some eyes on top to provide a bit of personality and give life to the face. The face can randomly switch between two colour modes and has a range of values that are selected randomly to change each output, see below for a list of these parameters.


Randomised Parameters:

hourParam = random(0,11); // hour hand
minuteParam = random(0,59); // minute hand
eyeballSize = random(20,50); // eyeball size
eyeYOffset = random(0,10);// eyeY Offset
pupilOffset = random(-10,10); // pupil Offset
eyeCorner1 = random(10,50); // eye corner 1
eyeCorner2 = random(10,50);// eye corner 2
clockCorner1 = random(10,100);// clock corner 1
clockCorner2 = random(10,100);// clock corner 2
clockCorner3 = random(10,100); // clock corner 3
clockCorner4 = random(10,100);// clock corner 4
faceMode = int(random(1, 3)); // determine which face should be displayed