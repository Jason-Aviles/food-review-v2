import React, { Component } from "react";
import axiosWithAuth from "../common/axosWithAuth";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import styled from "styled-components";

class Other extends Component {
  state = {
    comments: "",
    wait_time: 0,
    price: "",
    date_of_visit: "",

    user_id: Number(localStorage.getItem("id"))
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  menu_item = body => {
    axiosWithAuth()
      .post("https://foodappapisql.herokuapp.com/auth/api/other", body)
      .then(res => this.props.history.push("/homepage"))
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.menu_item(this.state);
    this.props.history.push("/loginCon");
    //this.props.history.push('/test')
    // setTimeout(function(){    window.location.reload()  }, 2100);
  };

  render() {
    const Container = styled.div`
      margin-left: 10%;
      display: flex;
      flex-direction: row;
    `;

    const Form = styled.form`
      display: flex;
      width: 40%;
      margin-top: 5%;
      flex-direction: column;

      line-height: 40px;
      justify-content: center;
      align-items: center;
    `;

    const Title = styled.h1`
      font-family: "Righteous", cursive;
      color: #d86e20;
      font-size: 2rem;
    `;

    const TextArea = styled.textarea`
      margin-bottom: 10px;
      padding: 5px 10px;
      border: none;
      border-bottom: solid black 1px;
      border-right: solid black;
      border-left: solid black 1px;
    `;

    const Input = styled.input`
      margin-bottom: 10px;
      padding: 5px 10px;
      border: none;
      border-bottom: solid black 1px;
    `;

    const Button = styled.button`
      background: #e2b045;
      outline: none;
      border: none;
      padding: 5px 15px;
      margin-top: 10px;
    `;

    const ImgContainer = styled.div`
      width: 40%;
    `;

    const Img = styled.img`
width: 80% border-radius: 50% margin-top: 15% 
`;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Zoom right cascade delay={800}>
            {" "}
            <Title>Adding New Review </Title>
          </Zoom>
          <label>write your review: </label>{" "}
          <TextArea
            name="comments"
            value={this.state.comments ? this.state.comments : "blank"}
            onChange={this.handleChange}
          />
          price:{" "}
          <Input
            name="price"
            value={this.state.price ? this.state.price : 0}
            onChange={this.handleChange}
          />
          wait time:{" "}
          <Input
            name="wait_time"
            value={this.state.wait_time ? this.state.wait_time : "blank"}
            onChange={this.handleChange}
          />
          date:{" "}
          <Input
            type="date"
            name="date_of_visit"
            value={
              this.state.date_of_visit ? this.state.date_of_visit : "blank"
            }
            onChange={this.handleChange}
          />
          <Fade cascade delay={800} duration={4000}>
            <Button className='plus icon"'>next</Button>
          </Fade>
        </Form>
        <Bounce cascade delay={800} duration={2000}>
          <ImgContainer>
            <Img
              alt="food"
              src="https://clipartstation.com/wp-content/uploads/2018/09/fast-food-clipart-png-2.jpg"
            />
          </ImgContainer>
        </Bounce>
      </Container>
    );
  }
}

export default Other;
