import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import logo from "../assets/logo-shopping-bag.svg";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../providers/AppProvider";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ProfileDropdown } from "../components/ProfileDropdown";


const StyledHeader = styled.div`
  height: 12vh;
  background-color: #6d375f;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow:0px 2px 20px black;
  width:100vw;


  .logo-container {
    flex: 0.3;
    margin-left: 100px;

    img{
    height:8vh;
    }
  }

  .menu-container {
    flex: 1;
    
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    gap: 20px;
  }

  ul a {
    transition: opacity 0.3s;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    margin:2px;
    margin-left:150px;
    padding:50px;
  }

  ul a:hover {
    opacity: 0.7;
  }

  ul a:not(:first-child) {
    margin:2px;
    margin-left:-3px;
    
  }

  .bag {
    margin-left: 50px;
    cursor: pointer;
    padding: 5px 15px;
    background-color: #b0aac0;
    border:none;
    color:black;
    border-radius:30px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    min-width:130px;
    font-size:16px;
  }
`;

export const Header = () => {

  const [user, setUser] = useLocalStorage("user");
  const navigate = useNavigate();
  

  const handleLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleLogout = useCallback(() => {
    setUser("");
    navigate("/login");
  }, [setUser, navigate]);

  return (
    <StyledHeader>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <nav className="menu-container">
        <ul>
          <Link to="/">SHOP</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/my-account">MY ACCOUNT</Link>

          {user ? (

            <ProfileDropdown userName={user} handleLogout= {handleLogout}/>

          ) : (
            <button className="bag"  onClick={handleLogin}>
              LOGIN
            </button>
          )}
        </ul>
      </nav>
    </StyledHeader>
  );
};
