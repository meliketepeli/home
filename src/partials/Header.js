import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../assets/logo-shopping-bag.svg";
import { Link } from "react-router-dom";
import { AppContext } from "../providers/AppProvider";

const StyledHeader = styled.div`
  height: 12vh;
  background-color: #6d375f;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-container {
    flex: 0.5;

    img {
      height: 8vh;
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
    padding: 0;
    margin: 0;
    display: flex;
  }

  ul a {
    color: #fff;
    margin: 0 30px;
    font-size: 20px;
    text-decoration: none;
  }

  ul a:hover {
    opacity: 0.7;
  }

  ul a:not(:first-child) {
    margin-left: 20px;
  }

  .bag {
    margin-left: 50px;
    cursor: pointer;
  }
`;

export const Header = () => {
  const { state, dispatch } = useContext(AppContext);

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

          {state.loggedIn ? (
            <div
              className="bag"
              onClick={() => dispatch({ type: "logout" })}
            >
              LOGOUT - {state.user}
            </div>
          ) : (
            <div
              className="bag"
              onClick={() => dispatch({ type: "login", payload: "melike" })}
            >
              LOGIN
            </div>
          )}
        </ul>
      </nav>
    </StyledHeader>
  );
};
