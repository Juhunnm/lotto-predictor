import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>🎰 로또 생성기</Logo>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background: #262626;
  color: #efefef;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.h1`
  margin: 0;
  letter-spacing: 2px;
`;
