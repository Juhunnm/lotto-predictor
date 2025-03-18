import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background: linear-gradient(135deg, #ff7eb3, #ff758c);
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 10px;

  &:hover {
    background: linear-gradient(135deg, #ff758c, #ff7eb3);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    background: #ff4d6d;
    transform: translateY(2px);
  }
`;
