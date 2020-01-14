import React, { Component } from 'react';
import axiosWithAuth from "../common/axosWithAuth";

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

class Other extends Component {
  state = {

    comments: "",
    wait_time:0,
    price:'', date_of_visit:'',

   user_id: Number(localStorage.getItem("id"))
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  menu_item = body => {
    axiosWithAuth()
      .post("https://foodappapisql.herokuapp.com/auth/api/other", body)
      .then(res => console.log(` others created ${res}`))
      .catch(err => console.log(err));
  };

  handleSubmit= (e)=>{
e.preventDefault()

this.menu_item(this.state)
this.props.history.push('/loginCon')
//this.props.history.push('/test')
// setTimeout(function(){    window.location.reload()  }, 2100);
  }

  render() {
    return (
      <div style={{marginLeft: "10%", display: "flex", flexDirection: "row" }}>
      <form onSubmit={this.handleSubmit}  style={{
            display: "flex",
            width: "40%",
            marginTop: "5%",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: "40px",
            justifyContent: "center",
    alignItems: "center" 
          }}><Zoom right cascade delay={800}> <h1 style={{fontFamily:" 'Righteous', cursive",color:'#D86E20',fontSize:'2rem'}}>Adding New Review </h1></Zoom>
      <label>
       write your review: </label> <textarea
          name="comments"
          value={this.state.comments}
          onChange={this.handleChange}
          style={{marginBottom:'10px',padding: "5px 10px",
    border:" none",
    borderBottom: "solid black 1px",borderRight:"solid black ",borderLeft:"solid black 1px "}}
        />
       price: <input
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
          style={{marginBottom:'10px',padding: "5px 10px",
    border:" none",
    borderBottom: "solid black 1px"}}
        />
        wait time: <input
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
        />

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

export default Other;