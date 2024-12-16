import React, {useState} from "react";
import { withLayouts } from "../partials/layouts";
import styled from "styled-components";
import { CustomModal } from "../components/CustomModal";


const StyledAboutPage = styled.div`
padding:50px;
`;

const Aboutpage = () =>{

    const [visible, setVisible]=useState(false);

    return ( 

     <StyledAboutPage>
<button onClick={() => setVisible(true)}>Click </button> 
    <CustomModal 
    type="confirm"
    displayModal={visible} 
    onOk= {() => alert('I am here')} 
    onCancel={()=>setVisible(false) } >

        HELLOOOOO!!!
    </CustomModal>
    What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the 
    printing and typesetting industry. 
    Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s,
     when an unknown printer took a galley of 
     type and scrambled it to make a type 
     specimen book. It has survived not only 
     five centuries, but also the leap into 
     electronic typesetting, remaining 
     essentially unchanged. It was popularised 
     in the 1960s with the release of Letraset 
     sheets containing Lorem Ipsum passages, 
     and more recently with desktop publishing
      software like Aldus PageMaker including 
      versions of Lorem Ipsum.

     </StyledAboutPage>   
    );
} ;

export default withLayouts(Aboutpage);
