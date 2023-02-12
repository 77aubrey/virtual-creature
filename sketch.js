let myX;
let myY;

function setup() {
  createCanvas(600, 600);
  mouseX = width / 3;
  mouseY = height / 2;
}

function draw() {
  background(0,67,112);

  let s = second();
  let m = minute();
  let h = hour();

  fill(255, 213, 233);
  myX = mouseX;
  myY = mouseY;

  scale(2.1);

  rect(95, 120, 100, 110, 24); // body (xytopleft, width, height, edges)
  triangle(s + 160, 20, 190, 60, 150, 60); // R-Ear
  triangle(130 - s, 20, 135, 60, 100, 60); // L-Ear
  triangle(105, 125, 80, 140, 110, 185); // LWing
  triangle(190, 125, 210, 145, 178, 185); // RWing
  ellipse(145, 90, 120, 90); // head
  fill(230, 230, 230, 100); // belly color
  ellipse(145, 182, 65, 75); // belly
  fill(240, 250, 240); // eyes
  ellipse(172, 85, 55, 55); // R eye
  ellipse(122, 85, 55, 55); // L eye
  strokeWeight(2);
  line(95, 80, 198, 80); // line-eyes
  strokeWeight(1);
  fill(20, 20, 20); // pupils
  ellipse(myX / 24 + 160, myY / 24 + 80, 8, 8); // R pupil
  ellipse(myX / 24 + 110, myY / 24 + 80, 8, 8); // L pupil
  fill(255, 200, 148); // mouth color
  triangle(145, 132, 155, 107, 135, 107); // mouth
  fill(255,200, 148); // feet color
  triangle(125, 225, 144, 250, 106, 250); // Lfoot
  triangle(165, 225, 184, 250, 146, 250); // Rfoot
  fill(35, 200, 200); // bowtie

  triangle(110, 160, 145, 145, 110, 135); // Lbow
  triangle(180, 160, 180, 135, 145, 145); // Rbow

  textSize(22);
  text(h + ":", 115, 190);
  fill(0, 162, 193, 251);
  if (m < 10) {
    text("0" + m, 145, 190);
  } else {
    text(m, 145, 190);
  }
  let adj = (s < 10) * 5;
  fill(154, 224, 255);
  text(s, 133 + adj, 40);
  // print(adj);
  fill(0, 102, 153, 251);
  if (mouseIsPressed) {
    fill(100, 100, 100); // eyes
    ellipse(172, 85, 55, 55); // R eye
    ellipse(122, 85, 55, 55); // L eye
  }
}
