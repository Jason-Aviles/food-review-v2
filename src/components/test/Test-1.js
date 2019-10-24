import React from "react";
import { Link } from "react-router-dom";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
const Testone = props => {
  return (
    props.user !== undefined && (
      <div style={{width:"25%",margin:"auto",marginTop:"10%"}}  >
      <Roll cascade delay={400} duration={1500}><img alt="here" src="https://cdn.clipart.email/48ad6b78b3ced0d25248c112a5d62441_pixel-dividers-tumblr_500-442.png"/></Roll>  
      <h1 style={{fontFamily:" 'Righteous', cursive",color:'#D86E20',fontSize:'2rem'}}>My Review </h1>
        {props.user.length > 0 &&
          props.user.map((x, i) => (
            
            <div class="ui segment" key={i}>
            <Fade bottom cascade delay={700} duration={1200}>
  <div role="list" class="ui divided  relaxed list">
    <div role="listitem" class="item">
            <div className='content'>
              
            restaurant-name:  <Link className='header'  to={`/test/${x.id}`}>
                  
                  <h1 style={{color:"orange"}}> {x.restaurant_name}</h1> </Link>
                  restaurant-type: <h2>{x.restaurant_type}</h2>{" "}
                  </div>
            </div> </div>
             </Fade>
              </div>
          
          ))}
          <img alt="2" src="https://danettemay.com/wp-content/uploads/2016/05/woman-eating-giant-sandwich350-1.png"/>
      </div>
    )
  );
};

export default Testone;
