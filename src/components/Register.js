import React, { Component } from "react";
import axios from "axios";

import Pub_nav from './Nav/publicNav'

class Register extends Component {
  state = { username: "", password: ""};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  register = user => {
    axios
      .post("https://foodappapisql.herokuapp.com/auth/register", user)
      .then(data => console.log({id:data.id}))
      .catch(err => console.log(err));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.register(this.state);
    if(this.state)
    this.props.history.push('/login')
  };

  render() {
    return (
      <div>
      {/* <Pub_nav/> */}
      <div style={{display:"flex", flexDirection:'row'}}>
      <form onSubmit={this.handleSubmit}   style={{display:"flex",width:"40%",marginTop:'20%',flexDirection:'column',alignItems:'center'}}>
      <h1 style={{fontFamily:" 'Righteous', cursive",color:'#D86E20',fontSize:'2rem'}}>Register </h1>
        <input style={{marginBottom:'10px'}}
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>
        <input style={{marginBottom:'10px'}}
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        ></input>
        <button style={{background:'#E2B045' ,outline:'none',border:'none',padding:'5px 10px',cursor:"pointer"}}>register</button>
      </form>
      
      <div  style={{width:"40%"}}>

        <img style={{width:"80%", borderRadius:'50%' ,marginTop:"30%"}} alt='food' src="https://making-the-web.com/sites/default/files/clipart/171373/food-png-transparent-images-171373-2839659.png"/>
      </div>
      
      
      </div>
      
      </div>
    );
  }
}

export default Register;
