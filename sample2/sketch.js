function setup() {
  createCanvas(600, 400); 
  background('#CBDCEB'); // 배경색 (회색)
}

function draw() {

  
  // 1. 머리카락
  fill(50); 
  // 왼쪽 머리카락
  rect(232, 190, 80, 140); 
  // 오른쪽 머리카락
  rect(287, 190, 80, 140); 

  
  
  // 2. 자켓 몸통
  fill(30, 40, 70); 
  // 몸통 메인
  rect(200, 300, 200, 140, 20); 
  // 목을 감싸는 라인 (깔끔한 옷깃)
  rect(width / 2 - 40, 280, 80, 20); 
  
  fill(255); 
  strokeWeight(5)
  stroke('#DD0303'); // 로고에는 윤곽선 없음
  textSize(35); 
  textAlign(CENTER, CENTER);
  text('S', width / 2 +38, 350); 
  strokeWeight(1)
  
  stroke(0); // 다시 윤곽선 설정

  
  
  // 3. 팔 (흰색)
  fill(255); 
  rect(385, 300, 45, 120, 10); // 오른쪽 팔
  rect(175, 300, 45, 120, 10); // 왼쪽 팔

  
  
  // 4. 얼굴 및 귀
  fill(255, 220, 180);
  // 귀
  ellipse(248, 210, 30, 50);
  ellipse(600-248, 210, 30, 50);
  // 얼굴
  ellipse(width / 2, 210, 100, 140); 
  

  
  
  // 5. 모자 본체
  fill(30, 40, 70); 
  rect(235, 140, 130, 70, 80);
  noStroke();
  rect(235, 160, 130, 50, 10);

  
  
  
  
  
  
  // 10. 코와 입
  fill('#E6A24BAA'); 
  triangle(width / 2 - 5, 230, width / 2 + 5, 230, width / 2, 240); 
  fill('#D62121'); 
  arc(width / 2, 250, 30, 30, 0, PI);
  fill(255); 
  rect(width / 2-10, 250.5, 20, 5);
  
  // 6. 모자 챙
  fill(30, 40, 70);
  stroke(0);
  rect(230, 200, 140, 25); 
  
  // 11. 모자 로고
  fill(255); 
  noStroke(); // 로고에는 윤곽선 없음
  textSize(35); 
  textAlign(CENTER, CENTER);
  text('M', width / 2, 175);
  textSize(18); 
  textAlign(CENTER, CENTER);
  text('e n t', width / 2, 180);
  textSize(18); 
  textAlign(CENTER, CENTER);
  text('.', width / 2+18, 153);
  stroke(0); // 다시 윤곽선 설정

  
  
  // 12. 자켓 단추
  fill(255); 
  ellipse(width / 2, 330, 10, 10);
  ellipse(width / 2, 360, 10, 10);
  ellipse(width / 2, 390, 10, 10);
  
  
    // 7. 컵
  fill('#543D25BA'); 
  rect(width / 2 -60, 310, 60, 90, 10); 
  fill('#644628D6'); 
  rect(width / 2 -55, 320, 50, 80, 10); 
  fill(100, 70, 40); 
  ellipse(width / 2-30, 320, 50, 20); 
  fill('#FFD93D'); 
  rect(width / 2-60, 345, 60, 35);
  
  
  
  // 8. 손 (컵을 쥐고 있는 모양)
  fill(255, 220, 180); 
  ellipse(width / 2 - 60, 370, 40, 50); // 왼쪽 손

  
  
  // 9. 빨대 (가장 앞에)
  fill(255, 255, 255, 60); 
  rect(width / 2 -30, 280, 6, 50); 
}