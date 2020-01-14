import React, { useEffect, useState } from "react";
import axiosWithAuth from "../common/axosWithAuth";
import Val from './ValdateUser'
const LoginCon = props => {
  const [state, setState] = useState([]);

  const valData = () => {
    axiosWithAuth()
      .get(
        `https://foodappapisql.herokuapp.com/auth/api/validate/${Number(
          localStorage.getItem("id")
        )}`
      )
      .then(users =>setState(users.data.data.id))
      .catch(err => console.log(err));
  };
  useEffect((props) => valData(), []);
 const num = Number(
  localStorage.getItem("secret"))
 console.log(state,"here")
  return   (
    
    <div>
      
      <h2>Congratulations</h2>
      
    {num !== state ? <h4>Verify account to begin adding reviews<Val history={props.history}/></h4> : <h4>Your  review has been added!!!</h4>  }
    </div>
  );
};

export default LoginCon;
