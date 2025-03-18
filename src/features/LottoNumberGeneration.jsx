import styled from "styled-components";
import { useState } from "react";

// 색상 : 노랑(01~10), 파랑(11~20), 빨강(21~30), 회색(31~40), 초록(41~45)
// 1등	6개 번호 일치
// 2등	5개 번호 일치 + 보너스 번호일치
// 3등	5개 번호 일치
// 4등	4개 번호 일치
// 5등	3개 번호 일치

const getColor = (number) => {
  if (number >= 1 && number <= 10) return "#FFD700";
  if (number >= 11 && number <= 20) return "#1E90FF";
  if (number >= 21 && number <= 30) return "#FF4500";
  if (number >= 31 && number <= 40) return "#A9A9A9";
  return "#228B22";
};

const LottoNumberGeneration = () => {
  const [lottoNumber, setLottoNumber] = useState([]);
  const [savedNumbers, setSavedNumbers] = useState([]);
  const [bonusNumber, setBonusNumber] = useState(null);
  const generateRandomNumbers = () => {
    let numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    //보너스 번호 추가 로직(기존의 6개 번호가 중복되지 않도록)
    let bonus;
    do {
      bonus = Math.floor(Math.random() * 45) + 1;
    } while (numbers.has(bonus)); // 기존 번호와 겹치지 않도록 보너스 번호 선택

    setLottoNumber([...numbers].sort((a, b) => a - b));
    setBonusNumber(bonus);
  };

  const handleSaveNumbers = () => {
    const newLottoSet = { numbers: lottoNumber, bonus: bonusNumber };
    const isSame = savedNumbers.some(
      (saved) => JSON.stringify(saved) === JSON.stringify(newLottoSet)
    );

    if (isSame) {
      return alert("이미 저장된 번호입니다!");
    }
    setSavedNumbers([...savedNumbers, newLottoSet]);
  };

  return (
    <Container>
      <Title>🎲 로또 번호 생성기</Title>
      <Button onClick={generateRandomNumbers}>번호 생성</Button>
      {lottoNumber.length > 0 && (
        <LottoDisplay>
          {lottoNumber.map((item, index) => (
            <LottoItem color={getColor(item)} key={index}>
              {item}
            </LottoItem>
          ))}
          {/* 보너스 번호 */}
          <PlusIcon>+</PlusIcon>
          <LottoItem color={getColor(bonusNumber)}>{bonusNumber}</LottoItem>
        </LottoDisplay>
      )}
      {lottoNumber.length === 6 && (
        <Button onClick={handleSaveNumbers}>저장</Button>
      )}
      <SavedNumbersContainer>
        <h2>📌 저장된 번호</h2>
        {savedNumbers.map((item, index) => (
          <SavedNumbersWrapper key={index}>
            {item.numbers.map((num, idx) => (
              <LottoItem key={idx} color={getColor(num)}>
                {num}
              </LottoItem>
            ))}
            <PlusIcon> + </PlusIcon>
            <LottoItem color={getColor(item.bonus)}>{item.bonus}</LottoItem>
          </SavedNumbersWrapper>
        ))}
      </SavedNumbersContainer>
    </Container>
  );
};

export default LottoNumberGeneration;

const Container = styled.div`
  flex: 1;
  padding: 20px;
  /* text-align : center */
  /* background : #b3cde0; */
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #011f4b;
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #03396c;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #005b96;
  }
`;
const LottoDisplay = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const LottoItem = styled.span`
  background-color: ${(props) => props.color};
  padding: 20px;
  border-radius: 50%;
  font-size: 20px;
  display: inline-block;
  /* width : 20px; */
  text-align: center;
  min-width: 30px;
  border: 3px solid #011f4b;
  color: white;
`;

const PlusIcon = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const SavedNumbersContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const SavedNumbersWrapper = styled.div`
  margin-top: 15px;
  font-size: 16px;
  text-align: center;
`;
