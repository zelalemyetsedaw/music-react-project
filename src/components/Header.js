import styled from "@emotion/styled";
import React, { useState } from "react";
import musicicon from "../images/logo.svg";
import { Link } from "react-router-dom";

const HeaderStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  padding: 2rem;
`;

const Logo = styled.div`
  margin-left = 4rem;
  height: 1rem;
  color: yellow;
  font-weight: bold;
  font-size: large;
  img{
    height: 1.5rem;
    color:yellow;
    
  }`;

const Container = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ListItem = styled.li`
  padding: 5px 20px;
  border-radius: 10px;
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
  }

  &:hover {
    background-color: yellow;
  }

  @media (max-width: 768px) {
    padding: 10px 0px;
    margin: 0;
    text-align: left;

    &:focus{
      background-color: #f7f7f7;
      z-index: 1000;
    }
  }
`;

const MainMenu = styled.nav`
  @media (max-width: 768px) {
    display: ${(props) => (props.showMobileMenu ? "block" : "none")};
    position: absolute;
    top: 40px;
    right: 0;
    background: yellow;
    font-size: 5px;
    height: 40vh;
    width: 50vw;
    border-radius: 25px;
    z-index: 100;
    padding-top: 30px;
  }
`;

const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const CloseMenuIcon = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
  padding-left: 0px;
  padding-right: 30px;

  cursor: pointer;
  display: ${(props) => (props.showMobileMenu ? "block" : "none")};
  z-index: 1000;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <div>
      <HeaderStyle>
        <div class="logo">
          <Logo>
            <img src={musicicon} alt="" /> Music
          </Logo>
        </div>
        <CloseMenuIcon showMobileMenu={showMobileMenu} onClick={toggleMenu}>
          &#10005;
        </CloseMenuIcon>
        <MenuIcon onClick={toggleMenu}>&#9776;</MenuIcon>
        <MainMenu showMobileMenu={showMobileMenu}>
          <Container>
            <ListItem>
              <Link to={`/`}>Home</Link>
            </ListItem>
            <ListItem>
              <Link to={`/songlist`}> Music Gallery </Link>
            </ListItem>
            <ListItem>
              <Link to={`/addsong`}>Add Music</Link>
            </ListItem>
            <ListItem>
              <Link to={`/aboutus`}> About us</Link>
            </ListItem>
          </Container>
        </MainMenu>
      </HeaderStyle>
    </div>
  );
};

export default Header;
