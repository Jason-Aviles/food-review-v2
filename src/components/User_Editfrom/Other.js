import React, { Component } from "react";
import axiosWithAuth from "../common/axosWithAuth";

import {
  InnerContainer as BottomContainer,
  InnerContainer,
  AddForm as Form,
  AddInput as Input,
  TextArea,
  Container,
  Button
} from "../../styled-components/styled-components";




class Other extends Component {
  state = {
    comments: "",
    wait_time: "",
    price: "",
    date_of_visit: "",
    user_id: Number(localStorage.getItem("id"))
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.dataById();
  }
  // componentDidUpdate(prevState){
  // if(prevState !== this.state){
  //   this.dataById();
  // }
  // }
  menu_item = body => {
    axiosWithAuth()
      .put(
        `https://foodappapisql.herokuapp.com/auth/api/other/${this.props.match.params.id}`,
        body
      )
      .then(res => this.props.history.push(`/homepage`))
      .catch(err => console.log(err));
  };

  dataById = () => {
    axiosWithAuth()
      .get(
        `https://foodappapisql.herokuapp.com/auth/api/other/${this.props.match.params.id}`
      )
      .then(users =>
        this.setState({
          comments: users.data.data.comments,
          wait_time: users.data.data.wait_time,
          price: users.data.data.price,
          date_of_visit: users.data.data.date_of_visit
        })
      )
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.menu_item(this.state);
    // this.props.history.push("/");
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <InnerContainer>
            <label>edit your review:</label>
            <TextArea
              name="comments"
              value={
                this.state.comments &&
                this.state.comments.charAt(0).toUpperCase() +
                  this.state.comments.slice(1)
              }
              onChange={this.handleChange}
            />
            price:{" "}
            <Input
              name="price"
              value={` ${this.state.price}`}
              onChange={this.handleChange}
            />
          </InnerContainer>

          <BottomContainer>
            wait time:{" "}
            <Input
              name="wait_time"
              value={this.state.wait_time}
              onChange={this.handleChange}
            />
            {/* moment(this.state.date_of_visit ).utc().format('MM/DD/YYYY') */}
            date:{" "}
            <Input
              type="date"
              name="date_of_visit"
              value={this.state.date_of_visit}
              onChange={this.handleChange}
            />
          </BottomContainer>
          <Button className="save icon">save</Button>
        </Form>
      </Container>
    );
  }
}

export default Other;
