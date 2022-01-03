//Inputs
float Size_Of_Sphere =400;
float Speed_Of_Rotation = 1;
float Blink_Speed = 1;
float hue = 42.5;
float saturation =255;
float brightness = 255;
int No_of_Dots = 1000;
int loop_Duration = 1000;


//Main Code

float s = Size_Of_Sphere;
float sp = Speed_Of_Rotation;
float bs = Blink_Speed;
float h = hue;
float sat = saturation;
float b = brightness;
int n = No_of_Dots;
int fr;
pointy[] p;
void setup() {
  fullScreen(P3D);
  p = new pointy[n];
  for (int i = 0; i<n; i++) {
    p[i] = new pointy();
  }
  fullScreen(P3D);
  fill(0);
}
void draw() {
  noStroke();
  colorMode(HSB);
  background (0, 5);
  translate (width/2, height/2);
  sphere (s);
  rotateX(fr*0.01*sp);
  rotateY(fr*0.01*sp);
  stroke(h,sat, b);
  for (int i = 0; i<n; i++) {
    p[i].show();
  }
  if(fr<loop_Duration){
    fr++;
  }
  else{
    fr=int(random(-100,100));
  }
}

class pointy {
  float x, y, z, a, b, r=s;
  pointy() {
    a = random(0, PI);
    b = random(0, TWO_PI);
    x = r*sin(a)*cos(b);
    y = r*sin(a)*sin(b);
    z = r*cos(a);
  }
  void show() {
    strokeWeight(5+8*sin(x+y+z+fr*0.1*bs));
    point(x, y, z);
  }
}
