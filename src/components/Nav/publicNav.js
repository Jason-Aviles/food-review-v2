import React from 'react';
import {Link} from 'react-router-dom'
const PublicNav = () => {
  return (
   
    <div class="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
    <Link to='/'>   <a class="item">
             <i aria-hidden="true" class="home icon"></i>
             Home
           </a></Link>
 
  <div>
 <Link to='/register'>     <a class="item">
             <i aria-hidden="true" class="hand paper outline icon
 "></i>
        Register 
           </a></Link> 
           <Link to='/login'>   <a class="item">
             <i aria-hidden="true" class="handshake outline icon
 "></i>
            Login 
           </a></Link></div> 
 
         </div>
  );
};

export default PublicNav;