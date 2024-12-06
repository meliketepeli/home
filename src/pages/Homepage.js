import React from "react";
import { withLayouts } from "../partials/layouts";
import styled from "styled-components";

const StyledHomePage = styled.div`

display:flex;
justify-content:center;
height:90vh;
justify-items:center;
align-items:center;
font-size:30px;

p{
width:60%;
text-align:center;
}


`;

const Homepage = () => {
    return <StyledHomePage> <p> 
        Welcome to the Homepage! </p> </StyledHomePage>;

};

export default withLayouts(Homepage);
