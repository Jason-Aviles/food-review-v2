import React, { Component } from "react";
import {R} from "react-router-dom"
import axios from "./common/axios";
import Pub_nav from './Nav/publicNav'

class Login extends Component {
  state = { username: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
z
  login = user => {
    axios()
      .post("https://foodappapisql.herokuapp.com/auth/login", user)
      .then(user => { localStorage.setItem('token', user.data.token);  localStorage.setItem('id', user.data.id)       })
      .catch(err => console.log(err));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.login(this.state);
    // this.props.history.replace('/test')
    // this.props.history.push('/test')
     setTimeout(function(){    window.location.reload()  }, 2000);

  };

  render() {
    return (
      <div>
      {/* <Pub_nav/> */}
      <div style={{display:"flex", flexDirection:'row'}}>
      <form onSubmit={this.handleSubmit} style={{display:"flex",width:"40%",marginTop:'20%',flexDirection:'column',alignItems:'center'}}>
      <h1 style={{fontFamily:" 'Righteous', cursive",color:'#D86E20',fontSize:'2rem'}}>Login </h1>
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
        <button style={{background:'#E2B045' ,outline:'none',border:'none',padding:'5px 10px'}}>send</button>
      </form>   <div  style={{width:"40%"}}>

<img style={{width:"80%", borderRadius:'50%' ,marginTop:"30%"}} alt='food' src="https://img.pngio.com/unhealthy-food-for-kids-png-free-unhealthy-food-for-kidspng-unhealthy-food-png-980_600.png"/>
</div>
</div></div>
    );
  }
}

export default Login;
