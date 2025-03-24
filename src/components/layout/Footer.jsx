import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Lotto Generator. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background :#262626;
  color : white;
  padding:20px;
  text-align :center;
  font-size : 14px;
  box-shadow : 0px -4px 6px rgba(0,0,0,0.2);
`
// const FooterContainer = styled.footer`
//   background: #2c3e50; /* Same as header */
//   color: white;
//   padding: 20px;
//   text-align: center;
//   font-size: 14px;
//   position: relative;
//   bottom: 0;
//   width: 100%;
//   box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
// `;
