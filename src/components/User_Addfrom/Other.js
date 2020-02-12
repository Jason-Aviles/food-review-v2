import React, { Component } from "react";
import axiosWithAuth from "../common/axosWithAuth";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import {
  TextArea,
  Title,
  AddForm as Form,
  AddInput as Input,
  Button,
  Container,
  Img,
  ImgContainer
} from "../../styled-components/styled-components";

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
          placeholder="wait time"
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
