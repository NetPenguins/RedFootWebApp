import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import UserMenu from "./UserMenu"
import $ from "jquery"

const Navigation = styled.nav`
  height: 8vh;
  width: 100%;
  display: flex;
  background: linear-gradient(90deg, #3f3f3f -3.07%, #212a3b 100%);
  box-shadow: 3px 1px 8px rgba(96, 140, 221, 0.432);
  color: rgb(68, 67, 67);
  position: fixed;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 999;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 3vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: fit;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 2vh;
    padding-bottom: 2vh;
    background: linear-gradient(90deg, #3f3f3f -3.07%, #212a3b 100%);
    color: rgb(32, 32, 32);
    transition: all 0.3s ease-in;
    top: 8vh;
    right: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: rgb(215, 231, 241);
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: rgb(215, 231, 241);
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  
  navbarOpen ? $('html').addClass('scroll-lock') : $('html').removeClass('scroll-lock')

  return (
    <Navigation>
      <UserMenu/>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() =>  setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
