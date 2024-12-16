import React, {useCallback, useState, useRef} from "react";
import userIcon from "../assets/user.png.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";
import {CustomModal} from '../components/CustomModal'; 

const StyledProfileDropdown = styled.div`

position:relative;

.user-button{
background-color: #b0aac0;
border:none;
color:black;
border-radius:30px;
padding: 5px 15px;
margin-top:50px;
margin-left:30px;
display:flex;
justify-content:space-evenly;
align-items:center;
min-width:120px;
cursor:pointer;
font-size:16px;
}

.user-button img{
width:25px;
height:25px;
margin-right:10px;
}

.dropdown-content{
display:none;
flex-direction:column;
position:absolute;
z-index:100;
background-color: #667292;
min-width:130px;
border-radius:10px;
padding: 10px; 
margin-left:15px;
align-items: center;
text-align: center;
left: 50%;
transform: translateX(-50%); /* Ortalamak için */
gap: 2px; /* Öğeler arası boşluk */
font-size:22px;
color:black;

}

.dropdown-content a{
  text-decoration: none;
  display: flex; /* Her öğeyi blok olarak tanımlar */
  width: 100%; 
  justify-content: center;
  align-items: center;
  padding: 10px; /* İçerik arası boşluk */
  text-align: center; /* Metni sola hizala */
  border-radius: 5px; /* Hafif köşeli yapı */
  transition: background-color 0.3s; /* Hover animasyonu */
  margin-left:-10px;
}
.dropdown-content label {
  text-decoration: none;
  display: block; 
  width: 100%; 
  justify-content: center;
  align-items: center;
  text-align: center; /* Metni sola hizala */
  border-radius: 5px; /* Hafif köşeli yapı */
  transition: background-color 0.3s; /* Hover animasyonu */
  
}
.dropdown-content a:hover{
  background-color: #b0aac0; /* Hover rengini değiştir */
  width:100%;
  margin-left:2px;
}

.dropdown-content label:hover { 
  cursor:pointer;
}

.show {
  display: flex;
}

`;

const SectionLogout = ({handleLogout}) => {
  const[visible, setVisible] = useState(false); //modal için

  return (
  
    <StyledProfileDropdown>
    <label onClick={() => setVisible(true)}> Logout</label>
    <CustomModal
    displayModal={visible}
    onCancel={() => setVisible(false)}
    onOk={handleLogout} 
    >
    Are you sure you want to log out?
    </CustomModal>
   
    </StyledProfileDropdown>
  );
};


export const ProfileDropdown = ({userName, handleLogout}) => {

    const[visible, setVisible] = useState(false);
    const refDropdown = useRef(null);

    const handleClick = useCallback(() => {

        setVisible ((c) => !c);
    }, []);

    useClickOutside(refDropdown, () => setVisible(false));

    return ( 
<StyledProfileDropdown ref={refDropdown}> 
<button onClick={handleClick} className="user-button"> 
    <img src={userIcon} alt="user" /> {userName} 
    </button>


 <div className={visible ? "dropdown-content show" : "dropdown-content"}>
    <Link to="/profile">Profile</Link>
    <Link to="/favorites">Favorites</Link>
    <Link to="/history">History</Link>
    <SectionLogout handleLogout ={handleLogout} /> 
 </div>
 </StyledProfileDropdown>

);
};