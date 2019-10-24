import React, { Component } from "react";
import axiosWithAuth from "../common/axosWithAuth";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
class Menu_item_review extends Component {
  state = {
    restaurant_name: "",
    restaurant_type: "",
    user_id: Number(localStorage.getItem("id")),
  //  menu_id: Number(localStorage.getItem("id")),
 //   created_at: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  reviews = body => {
  return  axiosWithAuth()
      .post("https://foodappapisql.herokuapp.com/auth/api", body)
      .then(res => console.log("res" , res))
      .catch(err => console.log(err.message));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.reviews(this.state);
    this.props.history.push("/add_menu");
  };

  render() {
    console.log( this.state.restaurant_type,'here')
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
      
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            width: "40%",
            marginTop: "15%",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: "40px",
            
          }}
        >   <Zoom right cascade delay={800}><h1 style={{fontFamily:" 'Righteous', cursive",color:'#D86E20',fontSize:'2rem'}}>Adding New Review </h1></Zoom>


          name:{" "}
          <input
            name="restaurant_name"
            value={this.state.restaurant_name}
            onChange={this.handleChange}

            style={{marginBottom:'10px',padding: "5px 10px",
    border:" none",
    borderBottom: "solid black 1px"}}
          />
          type:{" "}
          <select
            name="restaurant_type"
            value={this.state.restaurant_type}
            onChange={this.handleChange}
            style={{marginBottom:'10px',    width:" 30%",    border: "none",
    borderBottom:" solid 1px black"}}
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
          </select>
          <Fade cascade delay={800} duration={4000}>
          <button className='plus icon"' style={{background:'#E2B045' ,outline:'none',border:'none',padding:'5px 15px',
    marginTop: "10px"}}>next</button></Fade>
    
        </form>
        <Bounce cascade delay={800} duration={2000}>
        <div style={{ width: "40%" }}>
          <img
            style={{ width: "80%", borderRadius: "50%"  ,   marginTop: "25%"
 }}
            alt="food"
            src="http://www.transparentpng.com/thumb/food/AlL8lQ-hamburger-potato-chips-food-free-download.png"
          />
        </div></Bounce>
      </div>
    );
  }
}

export default Menu_item_review;
