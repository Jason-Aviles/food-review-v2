import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Title as H1,
  Img,
  ImgContainer,
  Input,
  Button
} from "../styled-components/styled-components.js";
import { register, handleChange } from "./apis/apis.js";

class Register extends Component {
  state = 
   
 {username: " ",
    password: " ",
    email: " ",
    err:''}
  

register = async user => {
    try {
      const res = await axios.post(
        "https://foodappapisql.herokuapp.com/auth/register",
        user
      );
      console.log(res,'res')
      if(res.data.message){
       return this.setState({err:res.data.message})
      }
     return res.data;
    } catch (err) {
      throw new Error(err);
    }
  };
  

  handleChange = e => {
    if(!e.target.value){
      this.setState({ [e.target.name]: "" });
    }
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    let newReg={
      username:this.state.username,
      email:this.state.email,
      password:this.state.password
    }
    if(!newReg.username||!newReg.password ||!newReg.email){
      return
    }
    this.register(newReg);
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.handleSubmit} data-testid="form">
            <H1>Register</H1>

           username: <Input
           placeholder="username"
              data-testid="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></Input>
       {!this.state.username && (
              <h4
                style={{
                  background: "#d53f3fbd",
                  width: "200px",
                  padding: "5px 5px",margin:"0px",marginBottom:'10px'
                }}
              >
               username field is empty
              </h4>
            )}
            password:<Input
            placeholder="password"
              data-testid="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></Input>
       {!this.state.password && (
              <h4
                style={{
                  background: "#d53f3fbd",
                  width: "200px",
                  padding: "5px 5px",margin:"0px",marginBottom:'10px'
                }}
              >
               password field is empty
              </h4>
            )}
            email:<Input
            placeholder='email'
              data-testid="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></Input>
                   {!this.state.email && (
              <h4
                style={{
                  background: "#d53f3fbd",
                  width: "200px",
                  padding: "5px 5px",margin:"0px",marginBottom:'10px'
                }}
              >
               email field is empty
              </h4>
            )}
            <Button data-testid="btn">signUp</Button>
         { this.state.err &&  <h4  style={{background:'#d53f3fbd',width:'200px',padding:"5px 5px"}}>{this.state.err}</h4>}
          </Form>

          <ImgContainer>
            <Img
              style={{ width: "80%", borderRadius: "50%", marginTop: "30%" }}
              alt="food"
              src="https://making-the-web.com/sites/default/files/clipart/171373/food-png-transparent-images-171373-2839659.png"
            />
          </ImgContainer>
        </Container>
      </div>
    );
  }
}

export default Register;
