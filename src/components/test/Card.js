import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axosWithAuth from "../common/axosWithAuth";

const Card = props => {
  const [state, setState] = useState();
  const [stateOther, setOther] = useState();
  const ids = props.match.params.id;

  const fetchAllinfo = async id => {
    await axosWithAuth()
      .get(`https://foodappapisql.herokuapp.com/photo-of-day/${id}`)
      .then(user => setState(user.data))
      .catch(err => console.log(err));
  };

  const deleteReviews = async id => {
    await axosWithAuth()
      .delete(`https://foodappapisql.herokuapp.com/auth/api/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const deleteMenu = async id => {
    await axosWithAuth()
      .delete(`https://foodappapisql.herokuapp.com/auth/api/menu/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const deleteOther = async id => {
    await axosWithAuth()
      .delete(`https://foodappapisql.herokuapp.com/auth/api/other/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const fetchAllother = async id => {
    await axosWithAuth()
      .get(`https://foodappapisql.herokuapp.com/auth/api/foodie/${id}`)
      .then(user => setOther([user.data.data]))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchAllother(ids);
  }, []);

  // const id = props.match !==  undefined && props.match.params.id ;
  // const singleUser = props.data.find(user => `${user.id}` === id )
  console.log(stateOther, "stateOther");
  console.log(state, "state");
  return (
    // <div style={{marginTop:'10%'} }className='ui centered cards'>
    // <div class="card">
    //         <div class="image">
    //           <img src={state.photo_of_order  === ""  ?   "https://p1.hiclipart.com/preview/471/910/508/krzp-dock-icons-v-1-2-empty-empty-text-png-clipart-thumbnail.jpg"  : state.photo_of_order}/>
    //         </div>
    //         <div class="content">
    //           <div class="header">{state.menu_item_name}</div>
    //           <div class="meta">
    //             <a>Review</a>
    //           </div>
    //           <div class="description">
    //             {stateOther.comments}
    //           </div>
    //         </div>
    //         <div class="extra content">
    //           <span class="right floated" >
    //             date:<span style={{color:'orange'}}> {stateOther.date_of_visit}</span> <Link to={`/edit/${state.id}`}><i class="edit icon"></i></Link>
    //           </span>
    //           <span>
    //             <i class="credit card outline icon"></i>
    //             price:{stateOther.price}

    //           </span>
    //         </div>
    //       </div></div>

    <div>
      {stateOther &&
        stateOther.map(detial => (
          <div style={{ marginTop: "10%" }} className="ui centered cards">
            <div class="card">
              <div class="image">
                <img
                  alt="food"
                  src={
                    detial.photo_of_order === "" ||
                    !detial.photo_of_order ||
                    detial.photo_of_order === undefined
                      ? "https://p1.hiclipart.com/preview/471/910/508/krzp-dock-icons-v-1-2-empty-empty-text-png-clipart-thumbnail.jpg"
                      : detial.photo_of_order
                  }
                />
              </div>
              <div class="content">
                <div class="header">{detial.item_name}</div>
                <div class="meta">
                  <a>Review</a>
                </div>
                <div class="description">{detial.comments}</div>
              </div>
              <div class="extra content">
                <span class="right floated">
                  date:
                  <span style={{ color: "orange" }}>
                    {" "}
                    {detial.date_of_visit}
                  </span>{" "}
                  <Link to={`/edit/${detial.id}`}>
                    <i class="edit icon"></i>
                  </Link>
                </span>
                <span>
                  <i class="credit card outline icon"></i>
                  price:${detial.price}.00
                </span>
              </div>
              <span>
                <button
                  onClick={
                    (() => deleteMenu(ids),
                    deleteReviews(ids),
                    deleteOther(ids))
                  }
                >
                  {" "}
                  <i class="trash icon"></i> Delete
                </button>
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
