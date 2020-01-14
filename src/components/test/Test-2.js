import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axosWithAuth from "../common/axosWithAuth";

const Testtwo = props => {
  const [state, setState] = useState();
  const [stateOther, setOther] = useState();
  const ids = props.match.params.id;
  const fetchAllinfo = async id => {
    await axosWithAuth()
      .get(`https://foodappapisql.herokuapp.com/auth/api/menu/${id}`)
      .then(user => setState(user.data.data))
      .catch(err => console.log(err));
  };

  const fetchAllother = async id => {
    await axosWithAuth()
      .get(`https://foodappapisql.herokuapp.com/auth/api/other/${id}`)
      .then(user => setOther(user.data.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchAllinfo(ids);
    fetchAllother(ids);
  }, []);

  // const id = props.match !==  undefined && props.match.params.id ;
  // const singleUser = props.data.find(user => `${user.id}` === id )
  
  return !state || !stateOther ?(<h1>Loading...</h1>): stateOther !== undefined&& (
    state !== undefined && (
<div style={{marginTop:'10%'} }className='ui centered cards'>
<div class="card">
        <div class="image">
          <img src={state.photo_of_order  === ""  ?   "https://p1.hiclipart.com/preview/471/910/508/krzp-dock-icons-v-1-2-empty-empty-text-png-clipart-thumbnail.jpg"  : state.photo_of_order}/>
        </div>
        <div class="content">
          <div class="header">{state.menu_item_name}</div>
          <div class="meta">
            <a>Review</a>
          </div>
          <div class="description">
            {stateOther.comments}
          </div>
        </div>
        <div class="extra content">
          <span class="right floated" >
            date:<span style={{color:'orange'}}> {stateOther.date_of_visit}</span> <Link to={`/edit/${state.id}`}><i class="edit icon"></i></Link>
          </span>
          <span>
            <i class="credit card outline icon"></i>
            price:{stateOther.price}
           
          </span>
        </div>
      </div></div>



//       <div>
       
//           <div >
//             <h1></h1>
//           <img src=/>
// <h2></h2>
// <h3></h3>
//           </div>
        
//       </div>
    )
  );
};

export default Testtwo;
