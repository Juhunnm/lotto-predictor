import LottoNumberGeneraion from "./LottoNumberGeneration";

// 📌 로또 번호 추첨 방식 (동행복권 6/45)
// ✅ 1~45 사이의 숫자 중 6개 + 보너스 번호 1개를 추첨
// ✅ 물리적인 '기계식 공 뽑기' 방식 사용
// ✅ 45개의 공을 자동 섞고, 차례대로 6개 + 보너스 번호 1개를 추출
//2,12,20,24,34,42 + 37

const Content = () => {
  return (
    <div>
      <LottoNumberGeneraion />
    </div>
  );
};
export default Content;
