import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { getFirebase } from "../lib/util.js"
import Login from "../pages/Login"
import Logout from "../components/logout"
import tempIcon from "../images/loginIcon.png"

const MenuBox = styled.div`
    flex-direction: column;
    position: fixed;
    max-width: 45%;
    min-width: 22%;
    border-bottom-right-radius: 8px;
    box-shadow: 2px 2px 5px ;
    justify-content: flex-start;
    padding-top: 2vh;
    padding-bottom: 2vh;
    padding-left: 5%;
    padding-right: 5%;
    margin-left: auto;
    background: linear-gradient(90deg, #3f3f3f -3.07%, #212a3b 100%);
    color: rgb(32, 32, 32);
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
    @media (max-width: 768px) {
        max-width: 70%;
        min-width: 32%;
    }
`

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const UserMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [currUser, setUser] = React.useState()
  const [imgURL, setImg] = React.useState()
  const firebase = getFirebase()
  
  useEffect(() => {
    if (!firebase) return;
    return firebase.auth().onAuthStateChanged((user) => {
        console.log(user);
        setUser(user ? user : null)
        if(!user){
            setImg(tempIcon)
        }else{
          setImg(user.photoURL ? user.photoURL : tempIcon)
        }
    });
  }, [firebase]);

  return (
      <div>
        <LogoWrap id="UserLogo"
          navbarOpen={navbarOpen}
          onClick={() => {
              setNavbarOpen(!navbarOpen)
          }}>
          <a class="image is-64x64">
              <img class="is-rounded" src={imgURL || tempIcon}/>
          </a>
        </LogoWrap>
        {navbarOpen ? (
          <MenuBox id="UserMenu" navbarOpen={navbarOpen} onMouseLeave={() => {
              setNavbarOpen(!navbarOpen)
          }}>
            {currUser ? <Logout/> : <Login/>}
          </MenuBox>
        ) : (
          <MenuBox open id="UserMenu" navbarOpen={navbarOpen} onMouseLeave={() => setNavbarOpen(!navbarOpen)}>
            {currUser ? <Logout/> : <Login/>}
          </MenuBox>
        )}
      </div>
  )
}

export default UserMenu
