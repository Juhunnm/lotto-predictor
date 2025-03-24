import styled from "styled-components";
import LottoNumber from "./LottoNumber";
import getColor from "../utils/GetColor";
import PropTypes from "prop-types";

const LottoList = ({
  savedNumbers,
  onDelete,
  hoveredIndex,
  setHoveredIndex,
}) => {
  return (
    <SavedNumbersContainer>
      <Title>📌 저장된 번호</Title>
      {savedNumbers.map((item, index) => (
        <SavedNumbersWrapper
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {item.numbers.map((num, i) => (
            <LottoNumber key={i} color={getColor(num)} value={num} readOnly />
          ))}
          <PlusIcon> + </PlusIcon>
          <LottoNumber
            color={getColor(item.bonus)}
            value={item.bonus}
            readOnly
          />

          {hoveredIndex === index && (
            <Button onClick={() => onDelete(index)}>X</Button>
          )}
        </SavedNumbersWrapper>
      ))}
      {savedNumbers.length === 5 && <Button>upload</Button>}
    </SavedNumbersContainer>
  );
};

LottoList.propTypes = {
  savedNumbers: PropTypes.arrayOf(
    PropTypes.shape({
      numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
      bonus: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  hoveredIndex: PropTypes.number,
  setHoveredIndex: PropTypes.func.isRequired,
};

export default LottoList;

const SavedNumbersContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const SavedNumbersWrapper = styled.div`
  margin-top: 15px;
  font-size: 16px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #4be239;
  text-align: center;
  margin-bottom: 20px;
`;

const PlusIcon = styled.span`
  color: #4be239;
  font-size: 24px;
  font-weight: bold;
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
