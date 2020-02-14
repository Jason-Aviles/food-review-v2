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
  state = { username: " ", password: "", email: " ", err: "", show: false };

  componentDidMount() {
    this.register = async user => {
      try {
        const res = await axios.post(
          "https://foodappapisql.herokuapp.com/auth/register",
          user
        );
        console.log(res, "res");
        if (res.data.message) {
          return this.setState({ err: res.data.message });
        }
        this.props.history.push("/login");
        return res.data;
      } catch (err) {
        throw new Error(err);
      }
    };
  }
  // register = async user => {
  //     try {
  //       const res = await axios.post(
  //         "https://foodappapisql.herokuapp.com/auth/register",
  //         user
  //       );
  //       console.log(res,'res')
  //       if(res.data.message){
  //        return this.setState({err:res.data.message})
  //       }
  //      return res.data;
  //     } catch (err) {
  //       throw new Error(err);
  //     }
  //   };

  handleChange = e => {
    if (!e.target.value) {
      this.setState({ [e.target.name]: "" });
    }
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    let newReg = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    if (!newReg.username || !newReg.password || !newReg.email) {
      return;
    }
    this.register(newReg);
  };

  render() {
    const flickShow = () => {
      return this.setState({
        show: !this.state.show
      });
    };
    return (
      <div>
        <Container>
          <Form onSubmit={this.handleSubmit} data-testid="form">
            {!this.state.username ||
            this.state.username === " " ||
            !this.state.email ||
            this.state.email === " " ||
            !this.state.password ||
            this.state.password === "" ? (
              <i
                class="exclamation triangle icon"
                style={{
                  fontSize: ".7rem",
                  color: "#f22626",
                  position: " relative",
                  bottom: "-45px",
                  left: "85px"
                }}
              >
                required
              </i>
            ) : (
              ""
            )}
            <H1>Register</H1>
            username:{" "}
            <Input
              placeholder="username"
              data-testid="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></Input>
        
           password: {!this.state.show ? (
              <Input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            ) : (
              <Input
                name="password"
                type="text"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            )}
            <span
              onClick={() => {
                flickShow();
              }}
              style={{
                background: "#b6b2b2",
                position: " relative",
                bottom: "32px",
                left: "74px",
                padding: " 0px 3px",
                zIndex: 1,
                cursor: "pointer",
                border: ".6px solid darkgray"
              }}
            >
              show
            </span>
            email:
            <Input
              placeholder="email"
              data-testid="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></Input>
            <Button data-testid="btn">signUp</Button>
            {this.state.err && (
              <h4
                style={{
                  background: "rgba(213, 63, 63, 0.04)",
                  width: "200px",
                  padding: "5px 5px"
                }}
              >
                <i
                  class="exclamation triangle icon"
                  style={{ fontSize: ".9rem", color: "#f22626" }}
                >
                  {this.state.error}
                </i>
              </h4>
            )}
          </Form>

          <ImgContainer>
            <Img
              style={{ width: "80%", borderRadius: "50%" }}
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
