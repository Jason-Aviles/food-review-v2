import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class Register extends Component {
  state = { username: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  register = user => {
    axios
      .post("https://foodappapisql.herokuapp.com/auth/register", user)
      .then(data => console.log({ id: data.id }))
      .catch(err => console.log(err));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.register(this.state);
    if (this.state) this.props.history.push("/login");
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

    const H1 = styled.h1`
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
            <H1>Register</H1>
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

            <Button>register</Button>
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
