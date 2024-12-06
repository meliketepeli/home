import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import logo from "../assets/logo-shopping-bag.svg";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../providers/AppProvider";
import { useLocalStorage } from "../hooks/useLocalStorage";

const StyledHeader = styled.div`
  height: 12vh;
  background-color: #6d375f;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow:0px 2px 20px black;

  .logo-container {
    flex: 0.3;
    margin-right: 100px;

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
    padding: 50px;
    margin: 50px;
    display: flex;
    gap: 50px;
  }

  ul a {
    float: left;
    color: #fff;
    margin: 0 50px;
    font-size: 20px;
    text-decoration: none;
  }

  ul a:hover {
    opacity: 0.7;
  }

  ul a:not(:first-child) {
    margin-left: 30px;
  }

  .bag {
    margin-left: 50px;
    cursor: pointer;
  }
`;

export const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  const [user, setUser] = useLocalStorage("user");
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    setUser("melike");
  }, [setUser]);

  const handleLogout = useCallback(() => {
    setUser("");
    navigate("/");
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
            <div className="bag"  onClick={handleLogout}>
              LOGOUT - {user}
            </div>
          ) : (
            <div className="bag"  onClick={handleLogin}>
              LOGIN
            </div>
          )}
        </ul>
      </nav>
    </StyledHeader>
  );
};
