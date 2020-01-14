import React, { Component } from "react";
import axiosWithAuth from "../common/axosWithAuth";
class Other extends Component {
  state = {
    comments: "",
    wait_time: "",
    price: "",
     date_of_visit:'',
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
        `https://foodappapisql.herokuapp.com/auth/api/other/${this.props.match.params.id}`,
        body
      )
      .then(res => console.log(res))
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
    console.log(this.state.date_of_visit)
    return (
      <div style={{ display: "flex", flexDirection: "row" ,
     
      alignItems: "center",
      margin: "auto",    justifyContent: "center"}}>
   
      <form onSubmit={this.handleSubmit} style={{
            display: "flex",
            width: "40%",
            marginTop: "2%",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: "40px",
            
          }}>
          <div  style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"}}>
      <label>
      edit your review:</label>
        <textarea
          name="comments"
          value={this.state.comments.charAt(0).toUpperCase() + this.state.comments.slice(1)}
          onChange={this.handleChange}
          style={{marginBottom:'10px',padding: "5px 10px",
    border:" none",
    borderBottom: "solid black 1px"}}
        />
       price: <input
          name="price"
          value={` ${this.state.price}`}
          onChange={this.handleChange}
          style={{marginBottom:'10px',padding: "5px 10px",
    border:" none",
    borderBottom: "solid black 1px"}}
        /></div>
        
        
        <div style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"}}>
      wait time:  <input
          name="wait_time"
          value={this.state.wait_time}
          onChange={this.handleChange}
          style={{marginBottom:'10px',padding: "5px 10px",
    border:" none",
    borderBottom: "solid black 1px"}}
        />
       date:  <input type='date'
          name="date_of_visit"
          value={this.state.date_of_visit}
          onChange={this.handleChange}
          style={{marginBottom:'10px',padding: "5px 10px",
    border:" none",
    borderBottom: "solid black 1px"}}
        /></div>
        <button className="save icon" style={{background:'#E2B045' ,outline:'none',border:'none',padding:'5px 15px',
    marginTop: "10px"}}>save</button>
      </form></div>
    );
  }
}

export default Other;















