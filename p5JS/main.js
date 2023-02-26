function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5)
}

function draw() {
  translate(width / 2, height / 2);
  background(8, 58, 71);
  fill(240, 160, 25);
  ellipse(0, 0, 500, 500);
  fill(0);
  stroke(0);
  beginShape();
  vertex(-250,0)
  for(let i = -250; i< 250; i+=100){
    let view = noise(i);
    vertex(i,200*view*random(-1,1));
  }
  vertex(250,0)
  endShape(CLOSE);
}
