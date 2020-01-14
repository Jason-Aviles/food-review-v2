import React from 'react';
import {Redirect,Link} from 'react-router-dom'
import Pub_nav from './Nav/publicNav'
const Logout = () => {
  return (
     <div>
    <div >
      <h1>You have logged out </h1>
{/* <Link onClick={()=>  { return setTimeout(function(){    window.location.reload()  }, 2000); }} to='/'>go back to the mainpage</Link> */}
<Link  to='/'>go back to the mainpage</Link>
{}
    </div></div>
  );
};

export default Logout;