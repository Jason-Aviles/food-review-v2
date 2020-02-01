import React, { Component } from "react";
import axiosWithAuth from "../common/axosWithAuth";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import styled from "styled-components";

class Menu_item_review extends Component {
  state = {
    restaurant_type: "",
    restaurant_name: "",
    user_id: Number(localStorage.getItem("id"))
    //   created_at: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  reviews = body => {
    axiosWithAuth()
      .post("https://foodappapisql.herokuapp.com/auth/api", body)
      .then(res => console.log(` review created ${res.data}`))
      .catch(err => console.log(err.message));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state, "state");

    this.reviews(this.state);
    this.props.history.push("/add_menu");
  };

  render() {
    const Container = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `;

    const Form = styled.form`
      display: flex;
      width: 40%;
      margin-top: 5%;
      flex-direction: column;
      align-items: center;
      line-height: 40px;
    `;

    const Title = styled.h1`
      font-family: "Righteous", cursive;
      color: #d86e20;
      font-size: 2rem;
    `;

    const Input = styled.input`
      margin-bottom: 10px;
      padding: 5px 10px;
      border: none;
      border-bottom: solid black 1px;
    `;

    const Select = styled.select`
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
      width: 80%;
      border-radius: 50%;
      margin-top: 15%;
    `;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          {" "}
          <Zoom right cascade delay={800}>
            <Title>Adding New Review </Title>
          </Zoom>
          name:{" "}
          <Input
            name="restaurant_name"
            value={
              this.state.restaurant_name ? this.state.restaurant_name : "Blank"
            }
            onChange={this.handleChange}
          />
          type:{" "}
          <Select
            name="restaurant_type"
            value={
              this.state.restaurant_type
                ? this.state.restaurant_type
                : "Select One"
            }
            onChange={this.handleChange}
            style={{
              marginBottom: "10px",
              width: " 30%",
              border: "none",
              borderBottom: " solid 1px black"
            }}
          >
            <option> Select One</option>
            <option value=" Fine Dining"> Fine Dining</option>
            <option value=" Casual Dining"> Casual Dining</option>
            <option value=" Contemporary Casual"> Contemporary Casual</option>
            <option value=" Family Style"> Family Style</option>
            <option value=" Fast Casual"> Fast Casual</option>
            <option value=" Fast Food"> Fast Food</option>
            <option value=" Cafe"> Cafe</option>
            <option value=" Buffet"> Buffet</option>
            <option value=" Food Trucks and Concession Stands">
              {" "}
              Food Trucks and Concession Stands
            </option>
            <option value=" Pop-Up Restaurant"> Pop-Up Restaurant</option>
            <option value=" Ghost Restaurant"> Ghost Restaurant</option>
          </Select>
          <Fade cascade delay={800} duration={4000}>
            <Button className='plus icon"'>next</Button>
          </Fade>
        </Form>
        <Bounce cascade delay={800} duration={2000}>
          <ImgContainer>
            <Img
              alt="food"
              src="http://www.transparentpng.com/thumb/food/AlL8lQ-hamburger-potato-chips-food-free-download.png"
            />
          </ImgContainer>
        </Bounce>
      </Container>
    );
  }
}

export default Menu_item_review;
