import React, {useCallback, useState, useRef} from "react";
import userIcon from "../assets/user.png.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";

const StyledProfileDropdown = styled.div`

position:relative;

.user-button{
background-color: #b0aac0;
border:none;
color:#8d9db6;
border-radius:30px;
padding: 5px 15px;
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
z-index:99;
background-color: #667292;
min-width:130px;
border-radius:10px;
padding:20px;
text-align:center;
    a{
    text-decoration:none;
    color:white;

    :hover{
    opacity:0.7;
    }
}

label{
    :hover{
    color:#b0aac0;
    curser:pointer;
    }
}

.show{
display:flex;

}
}
`;

export const ProfileDropdown = ({userName, handleLogout}) => {

    const[visible, setVisible] = useState(false);
    const refDropdown = useRef(null);

    const handleClick = useCallback(() => {

        setVisible ((c) => !c);
    }, []);

    useClickOutside(refDropdown, ()=> setVisible(false));

    return ( 
<StyledProfileDropdown ref={refDropdown}> 
<button onClick={handleClick} className="user-button"> 
    <img src={userIcon} alt="user" /> {userName} 
    </button>

 <div className={visible ? "dropdown-content show" : "dropdown-content"}>
    <Link to="/profile">Profile</Link>
    <Link to="/favorites">Favorites</Link>
    <Link to="/history">History</Link>
    <label onClick ={handleLogout}> LOGOUT </label>
 </div>
 </StyledProfileDropdown>

);
};