import { useState } from "react";
import styled from "styled-components";

// const Button = styled.button`
//   background: linear-gradient(135deg, #ff7eb3, #ff758c);
//   color: white;
//   font-size: 16px;
//   font-weight: bold;
//   width: 200px;
//   height: 50px;
//   border-radius: 30px;
//   border: none;
//   box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background: linear-gradient(135deg, #ff758c, #ff7eb3);
//     box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.3);
//     transform: translateY(-2px);
//   }

//   &:active {
//     background: linear-gradient(135deg, #ff5a7e, #ff4d6d);
//     box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
//     transform: translateY(2px);
//   }
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Button = styled.button`
  background-color: white;
  /* padding : 20px; */
  width: 200px;
  height: 50px;
  border-radius: 30px;
  border: none;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  //x y blur spread
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.5s;
  &:hover {
    /* background : linear-gradient(135deg,#ff758c,#ff7eb3) */
    border: 2px solid;
    border-color: orange;
    color: black;
    box-shadow: 0 0.5em 0.5em -0.4em yellow;
    transform: translate(-10px) scale(120%);
  }
`;
const LottoNumberGeneraion = () => {
  const [number, setNumber] = useState([]);
  const randomNum = () => {
    let lottoNumbers = new Set(); // Set클래스 중복되지 않는 값을 가짐
    while (lottoNumbers.size < 6) {
      lottoNumbers.add(Math.floor(Math.random() * 45) + 1);
    }
    console.log(lottoNumbers);
    setNumber([...lottoNumbers].sort((a, b) => a - b));
  };
  return (
    <div>
      <h1>랜덤 로또 번호</h1>
      <Wrapper>
        <Button>로또 번호 생성하기</Button>
      </Wrapper>
      <button onClick={randomNum}>로또 번호 생성하기</button>
      <div>
        {number.map((item, index) => (
          <span key={index}>| {item} </span>
        ))}
      </div>
    </div>
  );
};
export default LottoNumberGeneraion;
