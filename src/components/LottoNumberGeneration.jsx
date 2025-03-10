import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  gap: 30px; /* 사이 간격 */
`;

const Sidebar = styled.div`
  width: 200px;
  height: 400px;
  background: #f1f3f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;
const LottoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  width: 300px;
  height: 400px;
  text-align: center;
`;

const Button = styled.button`
  background: #ff9c08;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  &:hover {
    background: #f4c754;
  }
`;

const NumberContainer = styled.div`
  margin: 20px 0;
`;

const Number = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
`;

const LogContainer = styled(Sidebar)`
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  overflow-y: auto;
`;
const LottoNumberGeneraion = () => {
  const [lottoNumber, setLottoNumber] = useState([]);
  const [saveNumbers, setSaveNumbers] = useState([]);

  const randomNum = () => {
    let numbers = new Set(); // Set클래스 중복되지 않는 값을 가짐
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1); //1~45 숫자 추가가
    }
    console.log(numbers);
    setLottoNumber([...numbers].sort((a, b) => a - b));
  };

  const handleSaveNumbers = () => {
    setSaveNumbers([...saveNumbers, lottoNumber]);
  };
  return (
    <Container>
      <Sidebar>왼쪽 사이드바</Sidebar>

      <LottoBox>
        <h1>랜덤 로또 번호</h1>
        <Button onClick={randomNum}>로또 번호 생성</Button>
        <NumberContainer>
          {lottoNumber.map((item, index) => (
            <Number key={index}>| {item} </Number>
          ))}
        </NumberContainer>
        {lottoNumber.length === 6 && (
          <Button onClick={handleSaveNumbers}>저장</Button>
        )}
      </LottoBox>

      <LogContainer>
        <h3>저장된 번호</h3>
        <ul>
          {saveNumbers.map((item, index) => (
            <li key={index}>{item.join(" | ")}</li>
          ))}
        </ul>
      </LogContainer>
    </Container>
  );
};
export default LottoNumberGeneraion;
