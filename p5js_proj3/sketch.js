 // 컵 변수 정의
let coffeeHeight1 = 75;
let coffeeHeight2 = 71;

// 빨대 변수 정의
let strawCoffeeHeight = 0; 
let strawAnimation = false;
let strawSpeed = 8;
let strawDirection = 1;
let t = 0;

function setup() {
  createCanvas(600, 400);
}


function draw() {
  background('#CBDCEB');
  noMoving();
  Moving();
  
}

function noMoving(){
  // 머리카락
  fill(50); 
  // 왼쪽 머리카락
  rect(232, 190, 80, 140); 
  // 오른쪽 머리카락
  rect(287, 190, 80, 140); 
  
  
  // 과잠
  fill(30, 40, 70); 
  

  // 몸통 
  rect(200, 300, 200, 140, 20); 
  rect(width / 2 - 40, 280, 80, 20); 
  fill(255); 
  strokeWeight(5)
  stroke('#DD0303');
  textSize(35); 
  textAlign(CENTER, CENTER);
  text('S', width / 2 +38, 350); 
  strokeWeight(1)
  stroke(0);
  fill(255); 
  rect(385, 300, 45, 120, 10); // 오른쪽 팔
  rect(175, 300, 45, 120, 10); // 왼쪽 팔

  
  // 귀
  fill(255, 220, 180);
  ellipse(248, 210, 30, 50);
  ellipse(600-248, 210, 30, 50);
  
  // 얼굴
  ellipse(width / 2, 210, 100, 140); 

  // 모자
  fill(30, 40, 70); 
  rect(235, 140, 130, 70, 80);
  noStroke();
  rect(235, 160, 130, 50, 10);
  fill(30, 40, 70);
  stroke(0);
  rect(230, 200, 140, 25); 
  
  // 모자 로고
  fill(255); 
  noStroke();
  textSize(35); 
  textAlign(CENTER, CENTER);
  text('M', width / 2, 175);
  textSize(18); 
  textAlign(CENTER, CENTER);
  text('e n t', width / 2, 180);
  textSize(18); 
  textAlign(CENTER, CENTER);
  text('.', width / 2+18, 153);
  stroke(0);

  // 코
  fill('#E6A24BAA'); 
  triangle(width / 2 - 5, 230, width / 2 + 5, 230, width / 2, 240); 
  
  // 단추
  fill(255); 
  ellipse(width / 2, 330, 10, 10);
  ellipse(width / 2, 360, 10, 10);
  ellipse(width / 2, 390, 10, 10);
}






function Moving(){
  // 변수의정의
  let mouthX = width/2;
  let mouthY = 250;
  let mouthW = 20;
  let mouthH = 10;
  let cupX = mouseX;
  let cupY = mouseY;
  let strawX = cupX - 30;
  let strawY = cupY - 30;

  
  // 입
  if (strawX > mouthX - mouthW/2 && strawX < mouthX + mouthW/2 &&
      strawY > mouthY - mouthH/2 && strawY-25 < mouthY + mouthH/2) {
    fill('#D62121');
    ellipse(mouthX, mouthY+10, 10, 10);
  } else {
    fill('#D62121');
    arc(mouthX, mouthY, 30, 30, 0, PI);
    fill(255); 
    rect(width / 2-10, 250.5, 20, 5);
  }

  
  // 컵
  fill('#543D25BA');
  rect(cupX - 60, cupY, 60, 90, 10);
  

  // 컵 안 커피
  fill('#644628D6');
  rect(cupX - 55, cupY + 10 + (coffeeHeight2 - coffeeHeight1), 50, coffeeHeight1, 10);
  fill(100, 70, 40);
  ellipse(cupX - 30, cupY + 10 + (coffeeHeight2 - coffeeHeight1), 50, 20);
  
  // 빨대
  fill(255, 255, 255, 60);
  rect(strawX, strawY, 6, 90);
  if (strawAnimation) {
    strawCoffeeHeight += strawSpeed * strawDirection;

    if (strawCoffeeHeight >= 90) {
      strawCoffeeHeight = 90;
      strawDirection = -1;
    } else if (strawCoffeeHeight <= 0 && strawDirection == -1) { 
      strawCoffeeHeight = 0;
      strawAnimation = false;
      strawDirection = 1;
    }
  }
  
  

  // 빨대 안 커피
  fill(100, 70, 40);
  rect(strawX, strawY + 90 - strawCoffeeHeight, 6, strawCoffeeHeight);

  // 커피 라벨
  fill('#FFD93D'); 
  rect(cupX - 60, cupY+35, 60, 35);
  
  // 손
  fill(255, 220, 180);
  ellipse(cupX - 60, cupY + 60, 40, 50);
}







function mousePressed() {
  // 커피 애니메이션
  coffeeHeight1 -= 10;
  if (coffeeHeight1 < 0) coffeeHeight1 = 0;
  
  // 빨대 애니메이션
  if (t <= 7){
    if (!strawAnimation) {
      strawAnimation = true;
      strawDirection = 1; 
      t += 1
    }
  } else strawAnimation = false;
  
}

function keyPressed() {
  // 초기화
  if (key === 'r' || key === 'R') {
    coffeeHeight1 = 75;
    strawCoffeeHeight = 0;
    strawAnimation = false;
    strawDirection = 1;
    t = 0;
  }
  // 저장
  if (key === 's') {
    saveGif('mySketch', 10);
  }
  
}
