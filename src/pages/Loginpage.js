import React from "react";
import styled from "styled-components";
import loginIcon from "../assets/arrow-icon.png.png";
import loginImage from "../assets/left-image.png.jpeg";
import { useForm } from "react-hook-form";


const StyledLoginpage = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;


.login-container{
background-color: #6b5b95;
display:flex;
width:60%;
height:60%;

    .left{
        flex:1;
        img{
        height:100%;
        width:190%;
        }
        
    }

    .right{
        flex:2;
        padding:50px;
        display:flex;
        flex-direction:column;
        justify-content:end;

        form{
        
        .form-element{

            :not(:first-child){
            margin-top:20px;
            }
            margin-left:40%;
            
        }
            input{
            width:99%;
            background-color:#6b5b95;
            border:none;
            border-bottom:1px solid #8d9db6;
            font-size:20px;
            caret-color:#6b5b95;    
            color:#8d9db6;
            line-height:30px;
            margin-top:20px;
    

            ::placeholder{
            color: #6b5b95;

            }

            :focus{
            outline:none;
                }
            }

         .form-element-submit{
            text-align:right;
            img{
            height:30%;  //bunları sil
            width:30%;  //bunları sil
            margin-right:-50px
            }

            button{
            margin-top:50px;
            margin-left:50px;
         background-color:#6b5b95;
         border:none;
         cursor:pointer;
         }

         }

        }

        .sign-up-info{
        margin-top:50px;
        margin-left:35%;
        text-align:center;
        color:#8d9db6;
        font-size:19px;
        }

        .sign-up-btn-container{
        text-align:center;
        margin-top:30px;

            button{
                font-size:25px;
                color:white;
                background-color:transparent;
                border:none;
                cursor:pointer;
                margin-left:35%;
        }
}
      
    }
}


`;


export const Loginpage = () => {

const {register,handleSubmit, formState: {errors} }=useForm();

const onSubmit = (data) => console.log(data);

    return  <StyledLoginpage> 
        <div className="login-container">
         <div className="left"> 

            <img src={loginImage} alt="login"/>
         </div>
         <div className="right"> 

            <form onSubmit = {handleSubmit(onSubmit)}>

            <div className="form-element"> 
                <input {...register("name")} placeholder="Username" type="text"/>
            </div>
            <div className="form-element"> 
                <input {...register("password")} placeholder="Password" type="text"/>
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