export default function getColor(number){
    if (number >= 1 && number <= 10) return "#FFD700";
    if (number >= 11 && number <= 20) return "#1E90FF";
    if (number >= 21 && number <= 30) return "#FF4500";
    if (number >= 31 && number <= 40) return "#A9A9A9";
    return "#228B22";
  };


  // 색상 : 노랑(01~10), 파랑(11~20), 빨강(21~30), 회색(31~40), 초록(41~45)
  // 1등	6개 번호 일치
  // 2등	5개 번호 일치 + 보너스 번호일치
  // 3등	5개 번호 일치
  // 4등	4개 번호 일치
  // 5등	3개 번호 일치
  