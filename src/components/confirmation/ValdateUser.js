import React, { Component } from "react";
import axiosWithAuth from "../common/axosWithAuth";
class ValdateUser extends Component {
  state = {
    id:Number(localStorage.getItem("id")),
    review_id: Number(localStorage.getItem("id")),
    other_id: Number(localStorage.getItem("id")),
    menu_id:Number(localStorage.getItem("id"))
  };

Valdate = (val) =>{
axiosWithAuth().post( `https://foodappapisql.herokuapp.com/auth/api/validation`,val)  .then(res => console.log(res))
.catch(err => console.log(err));
}
handleChange = e => {
  this.setState({ [e.target.name]: e.target.value });
};

handleSubmit = e => {
  e.preventDefault();
  let id = localStorage.getItem("id")
console.log(this.state)
localStorage.setItem('secret', id);
  this.Valdate(this.state);
   this.props.history.push("/");
};
  render() {
  
    return (<form onSubmit={this.handleSubmit}>     <button className="save icon" style={{background:'rgb(69, 226, 135)' ,outline:'none',border:'none',padding:'5px 15px',
    marginTop: "10px",cursor:"pointer"}}>Verify User</button></form>)
  }
}

export default ValdateUser;
