import styled from "styled-components";
import userIcon from "../assets/profileImage.png";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 97%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    width: 90%;
    z-index: 10;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;

  @media (max-width: 1024px) {
    margin-left: 30px;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.open ? "block" : "none")};
  min-width: 120px;
  padding: 8px 0;
`;

const DropdownItem = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: background 0.2s ease;

  &:hover {
    background: #f4f4f4;
  }
`;

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <NavbarContainer>
      <Title>KPI Tracker</Title>
      <UserSection onClick={() => setDropdownOpen(!dropdownOpen)}>
        <UserImage src={userIcon} alt="User" />
        <span>User</span>
        <IoIosArrowDown size={16} />
        <Dropdown open={dropdownOpen}>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </Dropdown>
      </UserSection>
    </NavbarContainer>
  );
};

export default Navbar;
