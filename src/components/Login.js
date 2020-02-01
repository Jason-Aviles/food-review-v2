import React, { Component } from "react";
import loginPic from "./Img/loginPic.png";
import axios from "./common/axios";
import styled from "styled-components";

class Login extends Component {
  state = { username: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = user => {
    axios()
      .post("https://foodappapisql.herokuapp.com/auth/login", user)
      .then(user => {
        localStorage.setItem("username", user.data.message);

        localStorage.setItem("token", user.data.token);
        localStorage.setItem("id", user.data.id);
        this.props.history.push("/homepage");
      })
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();

    try {
      this.login(this.state);
      this.props.history.push("/homepage");
    } catch (error) {
      console.log(error, "error #31");
    }

    // setTimeout(function(){    window.location.reload()  }, 2000);
  };

  render() {
    const Container = styled.div`
      display: flex;
      flex-direction: row;
    `;

    const Form = styled.form`
      display: flex;
      width: 40%;
      margin-top: 20%;
      flex-direction: column;
      align-items: center;
    `;

    const Title = styled.h1`
      font-family: "Righteous", cursive;
      color: #d86e20;
      font-size: 2rem;
    `;

    const Input = styled.input`
      margin-bottom: 10px;
    `;

    const Button = styled.button`
      background: #e2b045;
      outline: none;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    `;

    const ImgContainer = styled.div`
      width: 40%;
    `;

    const Img = styled.img`
      width: 80%;
      border-radius: 50%;
      margin-top: 30%;
    `;

    return (
      <div>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Title>Login</Title>

            <Input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></Input>

            <Input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></Input>

            <Button>send</Button>
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
