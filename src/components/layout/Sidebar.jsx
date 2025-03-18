import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Nav>
        <NavLink to={"/"}>
          <NavItem> 🏠 홈</NavItem>
        </NavLink>
        <NavLink to={"/lotto"}>
          <NavItem> 🎲 로또 번호 생성</NavItem>
        </NavLink>
        <NavLink to={"/save_lotto"}>
          <NavItem>📂 저장된 번호</NavItem>
        </NavLink>
        <NavLink to={"/setting"}>
          <NavItem>⚙️설정</NavItem>
        </NavLink>
      </Nav>
    </SidebarContainer>
  );
};

export default Sidebar;


const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  background: #6497b1;
  width: 250px;
  height: 100vh;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  box-shadow: 3px 0px 1px rgba(0, 0, 0, 0.2);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const NavLink = styled(Link)`
  text-decoration : none;
  color : inherit;// 부모 요소 색상 사용하기기
  /* color : white; */
`
const NavItem = styled.div`
  padding: 12px;
  background: #005b96;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  /* text-align : center; */
  transition: all 0.3s;

  &:hover {
    background-color: #03396c;
    transform: translateX(5px);
  }
`;
