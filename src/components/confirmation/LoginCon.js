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
      .then(users =>setState(users.data.data.review_id))
      .catch(err => console.log(err));
  };
  useEffect((props) => valData(), []);
 const num = Number(
  localStorage.getItem("id"))
  return   (
    <div>
      
      <h2>Congratulations you are Signed In</h2>
      
    {state !== num ? <h4>Verify account to begin adding reviews<Val/></h4> : <h4>Your account is verified you can now add reviews!!!</h4>  }
    </div>
  );
};

export default LoginCon;
