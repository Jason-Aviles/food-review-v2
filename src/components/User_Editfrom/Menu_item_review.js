import React, { Component } from "react";
import axiosWithAuth from "../common/axosWithAuth";

import {
  Container,
  Title,
  AddForm as Form,
  AddInput as Input,
  AddSelect as Select,
  Button
} from "../../styled-components/styled-components";

class Menu_item_review extends Component {
  state = {
    restaurant_name: "",
    restaurant_type: "",
    user_id: Number(localStorage.getItem("id"))
    //  menu_id: Number(localStorage.getItem("id"))
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.dataById();
    const { id } = this.props.match.params.id;
  }

  dataById = () => {
    axiosWithAuth()
      .get(
        `https://foodappapisql.herokuapp.com/auth/api/${this.props.match.params.id}`
      )
      .then(users =>
        this.setState({
          restaurant_name: users.data.data.restaurant_name,
          restaurant_type: users.data.data.restaurant_type
        })
      )
      .catch(err => console.log(err));
  };

  reviews = body => {
    axiosWithAuth()
      .put(
        `https://foodappapisql.herokuapp.com/auth/api/${this.props.match.params.id}`,
        body
      )
      .then(res =>
        this.props.history.push(`/edit/menu/${this.props.match.params.id}`)
      )
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.reviews(this.state);
    this.props.history.push(`/edit/menu/${this.props.match.params.id}`);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Title>EDIT Review </Title>
          title:{" "}
          <Input
            name="restaurant_name"
            value={this.state.restaurant_name}
            onChange={this.handleChange}
          />
          type:{" "}
          <Select
            name="restaurant_type"
            value={this.state.restaurant_type}
            onChange={this.handleChange}
          >
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
          <Button className="save icon">save</Button>
        </Form>
      </Container>
    );
  }
}

export default Menu_item_review;
