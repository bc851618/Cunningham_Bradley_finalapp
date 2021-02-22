var gui;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
  
  d = select('.div-block');
  d.position(0,0);
  
  gui = new Gui();
  let gui_setup = new dat.GUI();
  
  gui_setup.add(gui,'scale',1,15).step(1);
  
  
  gui_setup.add(gui,'distanceX',1,100).step(1);
  
  gui_setup.add(gui,'distanceY',1,100).step(1);
  
  gui_setup.addColor(gui,'bColor').onChange(update);
  
  gui_setup.addColor(gui,'color').onChange(update);
  
  gui_setup.add(gui, 'xSpeed', 1000, 1000000).step(100);
  
  gui_setup.add(gui, 'ySpeed', 1000, 1000000).step(100);
  
  gui_setup.add(gui, 'zSpeed', 1000, 1000000).step(100);
  
  gui_setup.add(gui, 'showDescription').onChange(description);
  
 // gui_setup.add(gui, 'shape', {ellipse: ellipse, rect: rect, square: square, triangle: triangle });
  
  
  
  //noFill();
  //scribble = new Scribble();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
 
  background(gui.bColor);
  shapes();
}


function shapes(){
  for (var x = 0; x <= width; x += gui.distanceX) {
    for (var y = 0; y <= windowHeight; y += gui.distanceY) {
      fill(gui.color);
     ellipse(x, y, random(255),gui.scale);
      noStroke();
      
      rotateX(millis() / gui.xSpeed);
      rotateY(millis() / gui.ySpeed);
      rotateZ(millis() / gui.zSpeed); 
}       
}  
}

function description(){
  if(gui.showDescription){
    d.style('display', 'block');
  } else{
    d.style('display','none');
  }
}


function Gui(){
  
  this.bColor = '#ffffff';
  this.color = '#f7a3a3';
  this.scale = 1;
  this.distanceX=92;
  this.distanceY=68;
  this.xSpeed = 1000;
  this.ySpeed = 1000;
  this.zSpeed = 1000;
 
  //this.shape = ellipse;
  this.showDescription = true;
}

function update() {
  redraw();
}