import styled from "styled-components";
import { useEffect, useState } from "react";
import getColor from "../utils/GetColor";
import LottoNumber from "../components/LottoNumber";
import LottoList from "../components/LottoList";
import {
  deleteLottoNumber,
  getLottoNumbers,
  insertLottoNumber,
} from "../api/lottoApi";

const Lotto = () => {
  const [lottoNumber, setLottoNumber] = useState({ numbers: [], bonus: null });
  const [savedNumbers, setSavedNumbers] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  //로또 번호 불러오기기
  useEffect(() => {
    const loadLottoNumbers = async () => {
      const data = await getLottoNumbers();
      setSavedNumbers(data);
    };
    loadLottoNumbers();
  }, []);

  //랜던 로또 번호 생성성
  const generateRandomNumbers = () => {
    let numbers = new Set();
    while (numbers.size < 7) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    const numbersArray = [...numbers];

    setLottoNumber({
      numbers: numbersArray.slice(0, 6).sort((a, b) => a - b),
      bonus: numbersArray[6],
    });
  };

  //로또 번호 저장
  const handleSaveNumbers = async () => {
    if (
      savedNumbers.some(
        (saved) => JSON.stringify(saved) === JSON.stringify(lottoNumber)
      )
    ) {
      return alert("이미 저장된 번호입니다!");
    }
    if (savedNumbers.length >= 5) {
      return alert("5개 까지 등록할 수 있습니다.");
    }

    const result = await insertLottoNumber(
      lottoNumber.numbers,
      lottoNumber.bonus
    );
    if (result) {
      console.log("로또 번호 저장 완료", savedNumbers);
      setSavedNumbers((prev) => [...prev, lottoNumber]);
    }
  };

  const handleChange = (e, index) => {
    const newNumbers = [...lottoNumber.numbers];
    newNumbers[index] = Number(e.target.value);
    setLottoNumber((prev) => ({ ...prev, numbers: newNumbers }));
    //중복처리, 1~45 번호 제한 처리 해야할듯
  };
  const handleBonusChange = (e) => {
    setLottoNumber((prev) => ({ ...prev, bonus: Number(e.target.value) }));
  };
  const handleDelete = async (id) => {
    const isDeleted = await deleteLottoNumber(id);
    if (isDeleted) {
      setSavedNumbers((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <Container>
      <Title>🎲 로또 번호 생성기</Title>
      <Button onClick={generateRandomNumbers}>번호 생성</Button>
      {lottoNumber.numbers.length > 0 && (
        <LottoDisplay>
          {lottoNumber.numbers.map((item, index) => (
            <LottoNumber
              key={index}
              color={getColor(item)}
              value={item}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
          {/* 보너스 번호 */}
          <PlusIcon>+</PlusIcon>
          <LottoNumber
            color={getColor(lottoNumber.bonus)}
            value={lottoNumber.bonus}
            onChange={handleBonusChange}
          />
        </LottoDisplay>
      )}
      {lottoNumber.numbers.length === 6 && (
        <Button onClick={handleSaveNumbers}>저장</Button>
      )}
      <LottoList
        savedNumbers={savedNumbers}
        onDelete={handleDelete}
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />
    </Container>
  );
};

export default Lotto;

const Container = styled.div`
  flex: 1;
  height: 100%;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #4be239;
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #4da14a;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #4be239;
    color: #151515;
    font-size: 20px;
    margin-bottom: -2px;
  }
`;
const LottoDisplay = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PlusIcon = styled.span`
  color: #4be239;
  font-size: 24px;
  font-weight: bold;
`;
