import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
position:fixed;
display:flex;
bottom:0;
left:0;
width:100%;
justify-content:center;
`;

export const Footer = () => {
    return (
        <StyledFooter> <p>
          © 2024 MET 
          </p> </StyledFooter>
    )
};