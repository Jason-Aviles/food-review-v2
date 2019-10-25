import React from 'react';
import {Link} from 'react-router-dom'
const AuthNav = (props) => {
  return (
    
    <div class="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
    <Link to='/'>   <a class="item">
             <i aria-hidden="true" class="home icon"></i>
             Home
           </a></Link>
 
  
 
          <div>
       <Link to='/add_review'>     <a class="item">
             <i aria-hidden="true" class="plus square outline icon
 "></i>
        Add review   
           </a></Link> 
           <Link to='/test'>   <a class="item">
             <i aria-hidden="true" class="eye icon
 "></i>
            My review
           </a></Link>
           
           
           <Link  onClick={()=> {localStorage.removeItem('token') ;localStorage.getItem('id');props.history.push('/')} } to='/logout'  >    <a class="item">
             <i aria-hidden="true" class="meh outline icon"></i>
            Logout
           </a></Link> 
           
            </div>
 
 
 
         </div>
  );
};

export default AuthNav;