import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";


export const withLayouts = (Component) => (props) => {

    return(
        <div>
        <Header/>   
        <Component/> 
        <Footer/>
        </div>
    )
}

