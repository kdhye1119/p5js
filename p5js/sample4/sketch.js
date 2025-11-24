let c1, c2;
let t = 0;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100); // 파스텔 톤으로만 하고싶어서 ai를 좀 썼습니다.
  c1 = color(random(0, 360), random(20, 40), random(90, 100));
  c2 = color(random(0, 360), random(20, 40), random(90, 100));
}


function draw() {

  
  
  
  background('#52606D');
  stroke('#000000');
  strokeWeight(1);
  
  //배경
  
  // 색 바꾸기
  let mix = lerpColor(c1, c2, t);
  fill(mix);
  rect(0, 0, 600, 400);
  t += 0.5;
  if (t >= 1) {
    c1 = c2;
    c2 = color(random(45, 60), random(20, 40), random(90, 100)); 
    t = 0;
  } 
  
  let a = sin(frameCount * 0.03) * 100+10;
  fill(38, 61, 93,a);
  rect(0, 0, 200, 150);
  
  let y = sin(frameCount * 0.03) * 100 + 150;
  fill('#F1C25D');
  rect(250, y-100, 90, y); 
  let si = sin(frameCount * 0.05) * 80 + 210;
  fill('#9AB2C2');
  circle(120, 250, si - 20); 
  
  fill('#9AB2C2');
  circle(300, 200, si);
  
  let len = sin(frameCount * 0.05) * 100;
  let y2 = 250 + len;
  line(30, 50, 30, y2);
  
  
  fill(38, 61, 93,a);
  rect(350, 200, 400, 400); 
  
  fill('#9AB2C2');
  circle(500, 50, si + 90); 
  
  line(530, y2, 530, 250);
  
  let x = sin(frameCount * 0.03) * 100 + 100;

  // 귀
  stroke('#6B4900');
  strokeWeight(3);
  fill('#E08546');
  triangle(
    80 + x, 20,
    75 + x, 150,
    180 + x, 130
  );

  stroke('#6B4900');
  strokeWeight(3);
  fill('#E7D9CF');
  triangle(
    95 + x, 50,
    90 + x, 146,
    170 + x, 130
  );

  stroke('#7E5600');
  strokeWeight(3);
  fill('#E08546');
  triangle(
    320 + x, 20,
    325 + x, 150,
    220 + x, 130
  );

  stroke('#6B4900');
  strokeWeight(3);
  fill('#E7D9CF');
  triangle(
    305 + x, 50,
    310 + x, 146,
    230 + x, 130
  );

  // 얼굴
  stroke('#7E5600');
  strokeWeight(3);
  fill('#E08546');
  triangle(
    200 + x, 300,
    75 + x, 150,
    325 + x, 150
  );

  stroke('#7E5600');
  strokeWeight(0);
  fill('#E08546');
  triangle(
    200 + x, 100,
    75 + x, 152,
    325 + x, 152
  );

  // 눈
  stroke('#7E5600');
  strokeWeight(3);
  line(
    120 + x, 180,
    180 + x, 180
  );

  stroke('#7E5600');
  strokeWeight(3);
  line(
    280 + x, 180,
    220 + x, 180
  );

  // 코
  stroke('#7E5600');
  strokeWeight(3);
  fill('#FFFFFF');
  triangle(
    200 + x, 300,
    150 + x, 238,
    250 + x, 238
  );

  stroke('#7E5600');
  strokeWeight(3);
  fill('#1F1A1A');
  triangle(
    200 + x, 300,
    170 + x, 265,
    230 + x, 265
  );  
  
}

function keyPressed() {
  // 저장
  if (key === 's') {
    saveGif('mySketch', 10);
  }
  
}