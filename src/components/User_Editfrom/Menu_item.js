import React, { Component } from "react";

import {
  Button,
  AddSelect as Select,
  AddInput as Input,
  Container,
  AddForm as Form
} from "../../styled-components/styled-components";

import axiosWithAuth from "../common/axosWithAuth";
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

  componentDidMount() {
    this.dataById();
  }

  menu_item = body => {
    axiosWithAuth()
      .put(
        `https://foodappapisql.herokuapp.com/photo-of-day/${this.props.match.params.id}`,
        body
      )
      .then(res =>
        this.props.history.push(`/edit/other/${this.props.match.params.id}`)
      )
      .catch(err => console.log(err));
  };

  dataById = () => {
    axiosWithAuth()
      .get(
        `https://foodappapisql.herokuapp.com/photo-of-day/${this.props.match.params.id}`
      )
      .then(users =>
        this.setState({
          item_name: users.data.item_name,
          food_rating: users.data.food_rating,
          photo_of_order: users.data.photo_of_order
        })
      )
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.menu_item(this.state);
    // this.props.history.push('/other')
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          name:{" "}
          <Input
          placeholder='item name'
            name="item_name"
            value={this.state.item_name}
            onChange={this.handleChange}
          />
          picture:{" "}
          <Input

            name="photo_of_order"
            value={this.state.photo_of_order}
            onChange={this.handleChange}
          />
          rating:{" "}
          <Select
            name="food_rating"
            value={this.state.food_rating}
            onChange={this.handleChange}
          > <option >Select One</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
          <Button className="save icon">save</Button>
        </Form>
      </Container>
    );
  }
}

export default Menu_Item;
