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
  height : 50px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  box-shadow: 3px 0px 1px rgba(0, 0, 0, 0.2);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content : space-evenly;
  gap: 15px;
`;
const NavLink = styled(Link)`
  text-decoration : none;
  color : inherit;// 부모 요소 색상 사용하기기
  /* color : white; */
`
const NavItem = styled.div`
  padding: 12px;
  background: #4da14a;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  /* text-align : center; */
  transition: all 0.3s;

  &:hover {
    background-color: #4be239;
    transform: translateX(5px);
    color :#262626;
    font-size : 20px;
  }
`;
