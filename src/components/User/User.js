import React,{useEffect,useState} from 'react';
import axosWithAuth from '../common/axosWithAuth'
const User = (props) => {
  console.log(props.history.match,'user')
const [ info,setUser]= useState()
  const data = async()=>{
    await axosWithAuth().get('https://foodappapisql.herokuapp.com/auth/api/foodie/1').then(user => user !== undefined  && setUser(user.data.data)).catch(err => console.log(err))
   }

   useEffect(()=>{data()},[])
   
console.log(info,":data")
  return (
    <div>
    
    </div>
  );
};

export default User;