import React, {useState} from "react";
import loginIcon from "../assets/arrow-icon.png.png";
import visibleIcon from "../assets/visible.png";
import unvisibleIcon from "../assets/unvisible.png";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {useNavigate } from "react-router-dom";
import { CustomModal } from "../components/CustomModal";
import { Loader } from "./Loader";

//Sign Up
export const SignUpForm = ({setVisibleLogin}) => {

const [loading, setLoading]=useState(false); 
const [displayWarningModal, setDisplayWarningModal] = useState(false);

const [errorMsg, setErrorMsg ]=useState('');
const [user, setUser] = useLocalStorage('user');
const navigate = useNavigate();

const [visiblePassword, setVisiblePassword] = useState(false);

const {
    register,
    handleSubmit,
     formState: {errors} ,
    } = useForm();

const onSubmit = (data) => {
    setLoading(true);
    if(data.passwordCheck ===data.password){
        setTimeout(() => {
            console.log("Successful");
            setLoading(false);
        }, 3000);
    }
    //Go page
    else{
        setDisplayWarningModal(true);
        setErrorMsg('Passwords are not the same');

    }
};

    return (

    <> 
    <Loader loading={loading} /> 
    <CustomModal 
    displayModal={displayWarningModal}
    onCancel={() => setDisplayWarningModal(false)}
    type="warning"
    > 

    {errorMsg}
    
    </CustomModal>
    <form onSubmit = {handleSubmit(onSubmit)}>

    <div className="form-element"> 
        <input {...register("name", {required : {
            value:true, message: "Username is required", 
        }, 
        minLength: {
            value:3, message: "Username cannot be less than 3 characters",
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

         })} 
        placeholder="Password" 
        type={visiblePassword ? "text" : "password"}  
        />
       
        <span>{errors?.password?.message} </span>


       {visiblePassword ? (

        <img onClick ={() => setVisiblePassword(false)} src={unvisibleIcon} alt="unvisible-password" 
        /> 
       ) : (
       <img onClick ={() => setVisiblePassword(true)}
       src={visibleIcon} 
       alt="visible-password" 
       />  
    )}
    </div>

    
    <div className="form-element"> 
        <input {...register("passwordCheck", {
            required: { value:true, message: "This field is required" },

         })} 
        placeholder="Password" 
        type={visiblePassword ? "text" : "password"}  
        />
       
        <span>{errors?.passwordCheck?.message} </span>


       {visiblePassword ? (

        <img onClick ={() => setVisiblePassword(false)} src={unvisibleIcon} alt="unvisible-password" 
        /> 
       ) : (
       <img onClick ={() => setVisiblePassword(true)}
       src={visibleIcon} 
       alt="visible-password" 
       />  
    )}
    </div>

        <div className="form-element form-element-submit ">
             <button>
                <img src={loginIcon} alt="login-btn-icon"/> 
                </button>
        </div>
    </form>

    <div className="sign-up-info">Are you a member? Login </div>
    <div className="sign-up-btn-container">
    <button onClick={() => setVisibleLogin(true)} >Login</button>
    </div> 
    </> 

); 
};