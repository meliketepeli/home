import React, { useState } from "react";
import loginIcon from "../assets/arrow-icon.png.png";
import visibleIcon from "../assets/visible.png";
import unvisibleIcon from "../assets/unvisible.png";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { CustomModal } from "../components/CustomModal";
import { Loader } from "./Loader";

export const SignUpForm = ({ setVisibleLogin }) => {
  const [loading, setLoading] = useState(false);
  const [displayWarningModal, setDisplayWarningModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useLocalStorage("user");
  const navigate = useNavigate();
  const [visiblePassword, setVisiblePassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    if (data.passwordCheck === data.password) {
      console.log("User Type:", data.userType); // Kullanıcı tipi burada alınır.
      setTimeout(() => {
        console.log("Successful");
        setLoading(false);
      }, 3000);
    } else {
      setDisplayWarningModal(true);
      setErrorMsg("Passwords are not the same");
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
      <form onSubmit={handleSubmit(onSubmit)}>
<div className="register">REGISTER</div>

        <div className="form-element">
          <input
            {...register("firstname", {
              required: { value: true, message: "First Name is required" },
              minLength: {
                value: 3,
                message: "First Name cannot be less than 3 characters",
              },
              maxLength: {
                value: 50,
                message: "First Name cannot be more than 50 characters",
              },
            })}
            placeholder="First Name"
            type="text"
          />
          <span>{errors?.firstname?.message}</span>
        </div>

        <div className="form-element">
          <input
            {...register("lastname", {
              required: { value: true, message: "Last Name is required" },
              minLength: {
                value: 3,
                message: "Last Name cannot be less than 3 characters",
              },
              maxLength: {
                value: 50,
                message: "Last Name cannot be more than 50 characters",
              },
            })}
            placeholder="Last Name"
            type="text"
          />
          <span>{errors?.lastname?.message}</span>
        </div>

        <div className="form-element">
          <input
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
            placeholder="Email"
            type="text"
          />
          <span>{errors?.email?.message}</span>
        </div>

        <div className="form-element">
  <div style={{ position: "relative", width: "100%" }}>
    <select
      {...register("userType", {
        required: { value: true, message: "User Type is required" },
      })}
      style={{
        width: "101%", 
        backgroundColor: "rgba(250,250,250,0.8)", 
        border: "none",
        borderBottom: "3px solid rgb(75,0,130)", 
        fontSize: "15px", 
        color: "#8d9db6", 
        lineHeight: "25px", 
        padding: "4px 0px", 
        margin: "5px 0px 0px", 
        appearance: "none", 
      }}
    >
      <option value="" disabled selected>
        Select User Type
      </option>
      <option value="Customer">Customer</option>
      <option value="Supplier">Supplier</option>
    </select>
    <span
      style={{
        position: "absolute",
        top: "50%", 
        right: "10px", 
        transform: "translateY(-50%)", 
        pointerEvents: "none", 
        color: "rgb(75, 0, 130)", 
      }}
    >
      ▼
    </span>
  </div>
  <span style={{ color: "#d64161", fontSize: "13px" }}>
    {errors?.userType?.message}
  </span>
</div>

        <div className="form-element">
          <input
            {...register("password", {
              required: { value: true, message: "This field is required" },
            })}
            placeholder="Password"
            type={visiblePassword ? "text" : "password"}
          />
          <span>{errors?.password?.message}</span>
          <img
            onClick={() => setVisiblePassword(!visiblePassword)}
            src={visiblePassword ? unvisibleIcon : visibleIcon}
            alt="toggle-password-visibility"
          />
        </div>

        <div className="form-element">
          <input
            {...register("passwordCheck", {
              required: { value: true, message: "This field is required" },
            })}
            placeholder="Confirm Password"
            type={visiblePassword ? "text" : "password"}
          />
          <span>{errors?.passwordCheck?.message}</span>
          <img
            onClick={() => setVisiblePassword(!visiblePassword)}
            src={visiblePassword ? unvisibleIcon : visibleIcon}
            alt="toggle-password-visibility"
          />
        </div>

        <div className="form-element form-element-submit">
          <button>
            <img src={loginIcon} alt="login-btn-icon" />
          </button>
        </div>
      </form>

      <div className="sign-up-info">Are you a member? Login</div>
      <div className="sign-up-btn-container">
        <button onClick={() => setVisibleLogin(true)}>Login</button>
      </div>
    </>
  );
};
