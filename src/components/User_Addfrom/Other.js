import React, { Component } from 'react';
import axiosWithAuth from "../common/axosWithAuth";
class Other extends Component {
  state = {

    comments: "",
    wait_time:0,
    price:'', date_of_visit:'',

   // menu_id: Number(localStorage.getItem("id"))
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  menu_item = body => {
    axiosWithAuth()
      .post("https://foodappapisql.herokuapp.com/auth/api/other", body)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleSubmit= (e)=>{
e.preventDefault()

this.menu_item(this.state)
//this.props.history.push('/')
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
      <form onSubmit={this.handleSubmit}  style={{
            display: "flex",
            width: "40%",
            marginTop: "15%",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: "40px",
            
          }}><h1 style={{fontFamily:" 'Righteous', cursive",color:'#D86E20',fontSize:'2rem'}}>Adding New Review </h1>
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
        <button className='plus icon"' style={{background:'#E2B045' ,outline:'none',border:'none',padding:'5px 15px',
    marginTop: "10px"}}>next</button>
      </form>
      
      
      <div style={{ width: "40%" }}>
          <img
            style={{ width: "80%", borderRadius: "50%"  ,   marginTop: "25%"
 }}
            alt="food"
            src="https://clipartstation.com/wp-content/uploads/2018/09/fast-food-clipart-png-2.jpg"
          />
        </div>
      
      
      
      </div>
    );
  }
}

export default Other;