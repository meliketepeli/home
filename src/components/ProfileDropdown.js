import React, { useCallback, useState, useRef } from "react";
import userIcon from "../assets/user.png.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";
import { CustomModal } from "../components/CustomModal";

const StyledProfileDropdown = styled.div`
  position: relative;

  .user-button {
    background-color: #b0aac0;
    border: none;
    color: black;
    border-radius: 30px;
    padding: 5px 15px;
    margin-top: 80px;
    margin-left: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 120px;
    cursor: pointer;
    font-size: 16px;
  }

  .user-button img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  .dropdown-content {
    display: none;
    flex-direction: column;
    position: absolute;
    z-index: 100;
    background-color: #667292;
    min-width: 130px;
    border-radius: 10px;
    padding: 2px;
    margin-left: 15px;
    align-items: center;
    text-align: center;
    left: 50%;
    transform: translateX(-25%); /* Ortalamak için */
    gap: 2px; /* Öğeler arası boşluk */
    font-size: 22px;
    color: black;
  }

  .dropdown-content a {
    text-decoration: none;
    display: flex; /* Her öğeyi blok olarak tanımlar */
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1px; /* İçerik arası boşluk */
    text-align: center; /* Metni sola hizala */
    border-radius: 5px; /* Hafif köşeli yapı */
    transition: background-color 0.3s; /* Hover animasyonu */
    margin-left: -10px;
    margin-bottom: 1px;
  }
  .dropdown-content label {
    text-decoration: none;
    display: flex;
    width: 100%;
    margin-left: -5px;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    text-align: center; /* Metni sola hizala */
    border-radius: 5px; /* Hafif köşeli yapı */
    transition: background-color 0.3s; /* Hover animasyonu */
  }
  .dropdown-content a:hover {
    background-color: #b0aac0; /* Hover rengini değiştir */
    width: 100%;
    margin-left: 2px;
  }

  .dropdown-content label:hover {
    cursor: pointer;
  }

  .show {
    display: flex;
  }
`;

export const ProfileDropdown = ({ userName, handleLogout }) => {
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); //CustomModalı dropdown içerisinden çıkartmak gerekiyor.
  const refDropdown = useRef(null);

  const handleClick = useCallback(() => {
    setVisible((c) => !c);
  }, []);

  useClickOutside(refDropdown, () => setVisible(false));

  return (
    <StyledProfileDropdown ref={refDropdown}>
      <button onClick={handleClick} className='user-button'>
        <img src={userIcon} alt='user' /> {userName}
      </button>

      <div className={visible ? "dropdown-content show" : "dropdown-content"}>
        <Link to='/profile'>Profile</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/history'>History</Link>
        <label onClick={() => setModalVisible(true)}> Logout</label>{" "}
      </div>
      <CustomModal
        type='confirm'
        displayModal={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={handleLogout}>
        Are you sure you want to log out?
      </CustomModal>
    </StyledProfileDropdown>
  );
};