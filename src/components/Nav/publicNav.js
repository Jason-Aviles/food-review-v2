import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './nav.css'
import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
export const Sidebar = styled.div`


  @media ${device.mobileS} {
    margin: 0 auto !important;
    display: -webkit-box ;
    display: -webkit-flex ;
    display: -ms-flexbox ;
    display: flex ;
    position: relative;
    -webkit-box-pack: center !important;
    -webkit-justify-content: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
    -webkit-flex-direction: column !important;
    -ms-flex-direction: column !important;
    flex-direction: column !important;
    width: 101%;
    align-items: center;
    align-content: center;
    padding: 0;
    font-size: 2rem;
    height: auto;
    background: black;
    border-bottom:"1px grey solid"
  }

  @media ${device.mobileM} {
   
  }

  @media ${device.tablet} {

    
position:fixed; opacity:.7;
z-index:2;
    flex-direction: row !important;
    border:none;
    display:flex !important;
    padding: 10px;
    margin-bottom: 3% !important;
.menuON{
  /* position: relative;
  top:250px */
  display: flex !important;
  justify-content: center !important;
  
}
a{border-bottom:none !important;
  width: auto !important;
  margin-left:20px;
  color:white;
  i{display:flex !important;}
  }
  ${'' /* i{display:none !important;} */}
  }
`;


export const I = styled.i`
padding:15px;margin-bottom:15px;
padding-bottom: 30px;
font-size:2rem !important;
  @media ${device.mobileM} {
   
  }

  @media ${device.tablet} {
    display:none;
  }
`;


const PublicNav = () => {

  const [state,setState]= useState(false)

  const flip=()=>{

    setState(!state)
  }
  return !state?(<I onClick={()=>flip()} className={ !state ? `menuOn content icon`  :   `menuOff content icon`}></I> ) :(
   
    <Sidebar className={state ?  "menuON ":  "menuOff"}>
    <Link style={{padding:"10px", marginBottom:"5px",borderBottom:"1px grey solid",width:"100%"}} class="item" to='/'>  
          <span > <i aria-hidden="true" class="home icon"></i>
             Home</span> 
          </Link>
 
  
 <Link style={{padding:"10px", marginBottom:"5px",borderBottom:"1px grey solid",width:"100%"}} to='/register'  class="item">    <span style={{position:"relative",left:"12px"}}>
             <i aria-hidden="true" class="hand paper outline icon
 "></i>
        Register </span> 
           </Link> 
           <Link style={{padding:"10px", marginBottom:"5px"}} to='/login' class="item">   
             <i aria-hidden="true" class="handshake outline icon
 "></i>
            Login 
          </Link>
          <i onClick={()=>flip()} style={{color:"white"}}className={ !state ? `menuOn content icon`  :   `menuOff content icon`}></i>
         </Sidebar>
  );
};

export default PublicNav;