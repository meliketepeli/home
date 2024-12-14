import React, {useState} from "react";
import styled from "styled-components";
import loginIcon from "../../assets/arrow-icon.png.png";
import loginImage from "../../assets/left-image.png.jpeg";
import visibleIcon from "../../assets/visible.png";
import unvisibleIcon from "../../assets/unvisible.png";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {useNavigate } from "react-router-dom";
import { StyledLoginpage } from "./StyledLoginPage";


export const Loginpage = () => {
const [user, setUser] = useLocalStorage('user');
const navigate = useNavigate();

const [visiblePassword, setVisiblePassword] = useState(false);

const {register,handleSubmit, formState: {errors} }=useForm();

const onSubmit = (data) => {
    setUser(data.name);
    navigate('/');
};

    return  <StyledLoginpage> 
        <div className="login-container">
         <div className="left"> 

            <img src={loginImage} alt="login"/>
         </div>
         <div className="right"> 

            <form onSubmit = {handleSubmit(onSubmit)}>

            <div className="form-element"> 
                <input {...register("name", {required : {
                    value:true, message: "Username is required", 
                }, 
                minLength: {
                    value:6, message: "Username cannot be less than 6 characters",
                },
                maxLength: {
                    value:50, message: "Username cannot be more than 50 characters",
                },
                })} 
                placeholder="Username" type="text"/>
                <span>{errors?.name?.message} </span>

            </div>
            <div className="form-element"> 
                <input {...register("password", {
                    required: { value:true, message: "This field is required" },
                pattern: {
                    value: /^[0-9]+$/,
                    message:"Just enter numbers",
                },

                 })} 
                placeholder="Password" 
                type={visiblePassword ? "text" : "password"}  />
               
                <span>{errors?.password?.message} </span>


               {visiblePassword ? (

                <img onClick ={() => setVisiblePassword(false)} src={unvisibleIcon} alt="unvisible-password" /> 
               ) : (
               <img onClick ={() => setVisiblePassword(true)}src={visibleIcon} alt="visible-password" />  
            )}
            </div>

                <div className="form-element form-element-submit ">
                     <button>
                        <img src={loginIcon} alt="login-btn-icon"/> 
                        </button>
                </div>
            </form>

            <div className="sign-up-info">Not registered yet? </div>
            <div className="sign-up-btn-container">
            <button>Register</button>
            </div>
         </div>
    </div>
        
         </StyledLoginpage>;
 
};