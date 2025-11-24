function setup() {
  createCanvas(600, 400);
  background('#52606D');
}
function draw() {

  stroke('#000000');
  strokeWeight(1);
  
//배경
  
  fill('#F1C25D');
  rect(0, 0, 200, 150);

  fill('#F1C25D');
  rect(250,25, 90,150); 

  fill('#9AB2C2');
  circle(120, 250, 180);
  
  fill('#9AB2C2');
  circle(200, 200, 290);
  
  line(30, 50, 30, 250);
  
  
  fill('#F1C25D');
  rect(350, 200, 400, 400); 
  
  fill('#9AB2C2');
  circle(500, 50, 200); 
  
  line(530, 400, 530, 250);
  

  // 귀
  stroke('#6B4900');
  strokeWeight(3);
  fill('#E08546');
  triangle(80, 20, 75, 150, 180, 130);

  stroke('#6B4900');
  strokeWeight(3);
  fill('#E7D9CF');
  triangle(95, 50, 90, 146, 170, 130);

  stroke('#7E5600');
  strokeWeight(3);
  fill('#E08546');
  triangle(320, 20, 325, 150, 220, 130);

  stroke('#6B4900');
  strokeWeight(3);
  fill('#E7D9CF');
  triangle(305, 50, 310, 146, 230, 130);

  // 얼굴
  stroke('#7E5600');
  strokeWeight(3);
  fill('#E08546');
  triangle(200, 300, 75, 150, 325, 150);

  stroke('#7E5600');
  strokeWeight(0);
  fill('#E08546');
  triangle(200, 100, 75, 152, 325, 152);

  // 눈
  stroke('#7E5600');
  strokeWeight(3);
  line(120, 180, 180, 180);

  stroke('#7E5600');
  strokeWeight(3);
  line(280, 180, 220, 180);

  // 코
  stroke('#7E5600');
  strokeWeight(3);
  fill('#FFFFFF');
  triangle(200, 300, 150, 238, 250, 238);

  stroke('#7E5600');
  strokeWeight(3);
  fill('#1F1A1A');
  triangle(200, 300, 170, 265, 230, 265);  
  
  
}