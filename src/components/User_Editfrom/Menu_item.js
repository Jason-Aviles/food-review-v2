import React, { Component } from "react";

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
      .then(res =>  this.props.history.push(`/edit/other/${this.props.match.params.id }`))
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
    console.log(this.state);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            width: "40%",
            marginTop: "2%",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: "40px"
          }}
        >
          name:{" "}
          <input
            name="item_name"
            value={this.state.item_name}
            onChange={this.handleChange}
            style={{
              marginBottom: "10px",
              padding: "5px 10px",
              border: " none",
              borderBottom: "solid black 1px"
            }}
          />
          picture:{" "}
          <input
            name="photo_of_order"
            value={this.state.photo_of_order}
            onChange={this.handleChange}
            style={{
              marginBottom: "10px",
              padding: "5px 10px",
              border: " none",
              borderBottom: "solid black 1px"
            }}
          />
          rating:{" "}
          <select
            name="food_rating"
            value={this.state.food_rating}
            onChange={this.handleChange}
            style={{
              marginBottom: "10px",
              padding: "5px 10px",
              border: " none",
              width: "30%",
              borderBottom: "solid black 1px"
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className="save icon"
            style={{
              background: "#E2B045",
              outline: "none",
              border: "none",
              padding: "5px 15px",
              marginTop: "10px"
            }}
          >
            save
          </button>
        </form>
      </div>
    );
  }
}

export default Menu_Item;
