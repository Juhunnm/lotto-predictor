import PropTypes from "prop-types";
import styled from "styled-components";

const LottoNumber = ({ value, onChange, color, readOnly = false }) => {
  return (
    <LottoItem
      color={color}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

export default LottoNumber;

const LottoItem = styled.input`
  background-color: ${(props) => props.color};
  padding: 20px;
  border: 2px solid #4be239;
  border-radius: 50%;
  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
LottoNumber.propTypes={
  value : PropTypes.number.isRequired,
  onChange : PropTypes.func,
  color : PropTypes.string.isRequired,
  readOnly : PropTypes.bool,
}