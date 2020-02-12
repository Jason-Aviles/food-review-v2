import React, { Component } from "react";
import axiosWithAuth from "../common/axosWithAuth";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import {
  Container,
  AddForm as Form,
  AddInput as Input,
  AddSelect as Select,
  Button,
  Img,
  ImgContainer,
  Title
} from "../../styled-components/styled-components";

class Menu_Item extends Component {
  state = {
    item_name: "",
    food_rating: 0,
    photo_of_order: "",
    user_id: Number(localStorage.getItem("id"))
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.files[0]
    });
  };
  menu_item = body => {
    axiosWithAuth()
      .post("https://foodappapisql.herokuapp.com/photo-of-day", body)
      .then(res => this.props.history.push("/add_other"))
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      "item_name",
      !this.state.item_name || this.state.item_name === ""
        ? "Blank"
        : this.state.item_name
    );
    formData.append(
      "food_rating",
      !this.state.food_rating || this.state.food_rating === ""
        ? "Blank"
        : this.state.food_rating
    );
    formData.append("user_id", this.state.user_id);
    formData.append(
      "photo_of_order",
      !this.state.photo_of_order || this.state.photo_of_order === ""
        ? "Blank"
        : this.state.photo_of_order
    );
    this.menu_item(formData);
    // this.props.history.push("/add_other");
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Zoom right cascade delay={800}>
            <Title>Adding New Review </Title>
          </Zoom>
          Product Name:{" "}
          <Input
          placeholder="name"
            name="item_name"
            value={this.state.item_name ? this.state.item_name : "Blank"}
            onChange={this.handleChange}
          />
          Picture:{" "}
          <Input
            type="file"
            name="photo_of_order"
            onChange={this.onChangeHandler}
          />
          Rating:{" "}
          <Select
            name="food_rating"
            value={this.state.food_rating ? this.state.food_rating : 0}
            onChange={this.handleChange}
          >
            <option> Select One</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
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

export default Menu_Item;
