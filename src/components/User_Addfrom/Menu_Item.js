import React, { Component } from "react";
import axiosWithAuth from "../common/axosWithAuth";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


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

  menu_item = body => {
    axiosWithAuth()
      .post("https://foodappapisql.herokuapp.com/auth/api/menu", body)
      .then(res => console.log(` menu item created ${res}`))
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.menu_item(this.state);
    this.props.history.push("/add_other");
  };

  render() {
    return (<div   style={{marginLeft: "10%", display: "flex", flexDirection: "row" }}>
      <form onSubmit={this.handleSubmit}
      style={{
            display: "flex",
            width: "40%",
            marginTop: "5%",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: "40px",
            justifyContent: "center",
   
            
          }}
      >
       <Zoom right cascade delay={800}>
      
      <h1 style={{fontFamily:" 'Righteous', cursive",color:'#D86E20',fontSize:'2rem'}}>Adding New Review </h1>
</Zoom>


     
       Product Name: <input
          name="item_name"
          value={this.state.item_name}
          onChange={this.handleChange}
          style={{marginBottom:'10px',padding: "5px 10px",
    border:" none",
    borderBottom: "solid black 1px"}}
        />
       Picture: <input
      
          name="photo_of_order"
          value={this.state.photo_of_order}
          onChange={this.handleChange}
          style={{marginBottom:'10px',padding: "5px 10px",
    border:" none",
    borderBottom: "solid black 1px"}}
        />
     Rating:   <select
          name="food_rating"
          value={this.state.food_rating}
          onChange={this.handleChange}
          style={{marginBottom:'10px',padding: "5px 10px",
    border:" none",
    borderBottom: "solid black 1px"}}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <Fade cascade delay={800} duration={4000}>
        <button className='plus icon"' style={{background:'#E2B045' ,outline:'none',border:'none',padding:'5px 15px',
    marginTop: "10px"}}>next</button>
   
</Fade>

      </form>
      <Bounce cascade delay={800} duration={2000}>
      <div style={{ width: "40%" }}>
          <img
            style={{ width: "80%", borderRadius: "50%"  ,   marginTop: "15%"
 }}
            alt="food"
            src="https://clipartstation.com/wp-content/uploads/2018/09/fast-food-clipart-png-2.jpg"
          />
        </div>
       </Bounce>
      
      </div>
    );
  }
}

export default Menu_Item;
