import React from 'react';
import {Link} from 'react-router-dom'
const PublicNav = () => {
  return (
   
    <div class="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
    <Link class="item" to='/'>  
             <i aria-hidden="true" class="home icon"></i>
             Home
          </Link>
 
  <div>
 <Link to='/register'  class="item">     
             <i aria-hidden="true" class="hand paper outline icon
 "></i>
        Register 
           </Link> 
           <Link to='/login' class="item">   
             <i aria-hidden="true" class="handshake outline icon
 "></i>
            Login 
          </Link></div> 
 
         </div>
  );
};

export default PublicNav;