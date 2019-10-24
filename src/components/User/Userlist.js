import React from 'react';

import {Link} from 'react-router-dom'
const Userlist = (props) => {


const id = localStorage.getItem('id');

const UserId = props.user !== undefined &&  props.user.filter(x => x.user_id === Number(id)   && x.menu_id === Number(id))
console.log(props,'here')
  return  (


    <div>
      {UserId.map((x,i) => <div key={i}>
<Link to={`/${x.id}`}>
      <h1  >{x.restaurant_name}</h1>
      
      <h1>{x.restaurant_type}</h1>
      </Link>
      </div>)}
    </div>
  );
};

export default Userlist;