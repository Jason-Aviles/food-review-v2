import React, { Component } from "react";
import { Link } from "react-router-dom";
import loginPic from "./Img/loginPic.png";
import { login } from "./apis/apis";
import {
  Title,
  Img,
  ImgContainer,
  Input,
  Button,
  Form,
  Container
} from "../styled-components/styled-components";
import axios from "axios";
import { relativeTimeThreshold } from "moment";
class Login extends Component {
  state = { username: " ", password: " ", error: "" };

  handleChange = e => {
    if(!e.target.value){
      this.setState({ [e.target.name]: "" });
    }
    this.setState({ [e.target.name]: e.target.value });
  };




  async componentDidMount(){
    this.mounted = true;
     this.login = async user => {
  const res=  await axios
        .post("https://foodappapisql.herokuapp.com/auth/login", user)
    if(res.data.message && this.mounted){
    return  await this.setState((prevState)=> !prevState.error && this.setState({error:res.data.message}))}
  try {
  
  
      
  
      localStorage.setItem("username", res.data.username);
  
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);

    localStorage.getItem("username") !== undefined ?   this.props.history.push("/homepage"):this.props.history.push("/login")
  } catch (error) {
    console.log(error)
  }}}






  handleSubmit = e => {
    e.preventDefault();
    let loginCreds = {
      username: this.state.username,
      password: this.state.password
    };
    try {
      this.login(loginCreds);
     
    } catch (error) {
      console.log(error, "error #31");
    }

    // setTimeout(function(){    window.location.reload()  }, 2000);
  };
  componentWillUnmount(){
   this.mounted=false
  }
  render() {


    
    console.log(this.state.error,'kkkkk')
    return (
      <div>
        <Container>
          <Form onSubmit={this.handleSubmit}>
          {!this.state.username ||this.state.username=== " " ||!this.state.password  ||  this.state.password === " " ?   <i class="exclamation triangle icon" style={{fontSize:".7rem",color: "#f22626",
    position:" relative",    bottom: "-45px",
    left: "85px"}}>required</i> : "" }
            <Title>Login</Title>

            username:<Input
              name="username"
              placeholder='username'
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
              name="password"
              placeholder="password"
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
               username field is empty
              </h4>
            )}
            <Button>send</Button>
            <Link style={{marginTop:"2%",fontSize:".7rem"}} to="/reset_password"><h5>forgot password</h5></Link>
            { this.state.error &&  <h4  style={{background:'rgba(213, 63, 63, 0.04)',width:'200px',padding:"5px 5px"}}>
         
         <i class="exclamation triangle icon" style={{fontSize:".9rem",color: "#f22626"}}>{this.state.error}</i>
         </h4>}
          </Form>

          <ImgContainer>
            <Img alt="food" src={loginPic} />
          </ImgContainer>
        </Container>
      </div>
    );
  }
}

export default Login;
