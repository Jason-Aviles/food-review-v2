import React, { Component } from "react";
import { Link } from "react-router-dom";


import {
  Title,
  Img,
  ImgContainer,
  Input,
  Button,
  Form,
  Container
} from "../../styled-components/styled-components";
import axios from "axios";
import { relativeTimeThreshold } from "moment";
class ForgotPassword extends Component {
  state = { username: "", email: "", error: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };




  async componentDidMount(){
    this.mounted = true;
     this.Resetlogin = async user => {
  const res=  await axios
        .put("https://foodappapisql.herokuapp.com/auth/reset", user)

        

      
    if(res.data.message && this.mounted){
    return  await this.setState((prevState)=> !prevState.error && this.setState({error:res.data.message}))}
  try {
  
    res.data.reset && this.props.history.push("/email_sent")
  } catch (error) {
    console.log(error)
  }
}}






  handleSubmit = e => {
    e.preventDefault();
    let Reset = {
      username: this.state.username,
      email: this.state.email
    };
    if(!Reset.email){return}
    try {
      this.Resetlogin(Reset);
      // this.props.history.push("/homepage");
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
            <Title>Reset Password</Title>
username:
            <Input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></Input>
email:
            <Input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></Input>

            <Button>Reset</Button>
         
            {this.state.error && (
              <h4
                style={{
                  background: "#d53f3fbd",
                  width: "200px",
                  padding: "5px 5px"
                }}
              >
                {this.state.error}
              </h4>
            )}
          </Form>
        </Container>
      </div>
    );
  }
}

export default ForgotPassword;