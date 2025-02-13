import styled from "styled-components";
import logo from "../assets/logo.png";
import grid from "../assets/icons/Grid.png";
import screen from "../assets/icons/Screen.png";
import vector from "../assets/icons/Vector.png";

const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: calc(17.22%);
  height: 100vh;
  background: white;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid #CDD5DF;
`;

const Logo = styled.img`
  width: 220px;
  height: auto;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NavLink = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  margin: 10px;
  text-decoration: none;
  background: ${(props) => (props.$active ? "#002BC5" : "transparent")}; 
  color: ${(props) => (props.$active ? "white" : "black")}; 
  border-radius: 100px;
  font-weight: bold;
  transition: background 0.3s ease;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;

  img {
    width: 20px;
    height: auto;
    color: black;
  }
`;

const Sidebar = ({ selectedPage, setSelectedPage }) => {
  return (
    <SidebarContainer>
      <Logo src={logo} alt="ProWiz Logo" />
      <Nav>
        <NavLink 
          onClick={() => setSelectedPage("dashboard")} 
          $active={selectedPage === "dashboard"}
        >
          <img src={grid} alt="Dashboard Icon" /> Dashboard
        </NavLink>
        <NavLink 
          onClick={() => setSelectedPage("camera-view")} 
          $active={selectedPage === "camera-view"}
        >
          <img src={screen} alt="Camera Icon" /> Camera View
        </NavLink>
        <NavLink 
          onClick={() => setSelectedPage("event-log")} 
          $active={selectedPage === "event-log"}
        >
          <img src={vector} alt="Event Log Icon" /> Event Log
        </NavLink>
      </Nav>
    </SidebarContainer>
  );
};

export default Sidebar;
