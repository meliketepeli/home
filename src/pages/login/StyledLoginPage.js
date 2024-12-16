import styled from "styled-components";

export const StyledLoginpage = styled.div`
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
            position:relative;
            :not(:first-child){
            margin-top:20px;
            }
            margin-left:40%;

            img{
                position:absolute;
                top:5px;
                right:5px;
                height:25px;
                weight:25px;
                margin:10px;
                cursor:pointer;                
                
                    }

                span{
                color: #d64161;
                font-size:13px;
                
                
                }
        
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
A
            }

            :focus{
            outline:none;
                }
            }

         .form-element-submit{
            text-align:right;
            img{
            height:8vh;  
            width:30%;  
            margin-right:-20px
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
