import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axosWithAuth from "../common/axosWithAuth";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";
import {data} from '../apis/apis'
const CardList = props => {


  const [username, setUserName] = useState();
  const [user, setUser] = useState();

  // const data = () => {
  //   axosWithAuth()
  //     .get("https://foodappapisql.herokuapp.com/auth/api")
  //     .then(users => {
  //       console.log(users);
  //       setUser(users.data.data);
  //       setUserName(users.data.loggedInUser);
  //     })
  //     .catch(err => console.log(err));
  // };

  const id =Number( localStorage.getItem("id"));
  useEffect(() => {
    data(setUser,setUserName);
  }, []);



const filteredUsers = user && user.filter(data => data.user_id ===id)
  return !user ? (
    <Fade>
      <h1>Loading...</h1>
    </Fade>
  ) : (
    user !== undefined && (
      <div style={{ width: "25%", margin: "auto", marginTop: "10%" }}>
        <Roll cascade delay={400} duration={1500}>
          <img
            alt="here"
            src="https://cdn.clipart.email/48ad6b78b3ced0d25248c112a5d62441_pixel-dividers-tumblr_500-442.png"
          />
        </Roll>
        <h1
          style={{
            fontFamily: " 'Righteous', cursive",
            color: "#D86E20",
            fontSize: "2rem"
          }}
        >
          My Review{" "}
          <button
            style={{ background: "yellow", color: "black", padding: "10px" }}
            onClick={() => window.location.reload()}
          >
            Update List
          </button>
        </h1>

        {user.length !== 0 &&
          filteredUsers.map((x, i) => (
            <div class="ui segment" key={i}>
              <Fade bottom cascade delay={700} duration={1200}>
                <div role="list" class="ui divided  relaxed list">
                  <div role="listitem" class="item">
                    <div className="content">
                      restaurant-name:{" "}
                      <Link className="header" to={`/homepage/${x.id}/${x.user_id}`}>
                        <h1 style={{ color: "orange" }}>
                          {" "}
                          {x.restaurant_name}
                        </h1>{" "}
                      </Link>
                      restaurant-type: <h2>{x.restaurant_type}</h2>{" "}
                    </div>
                  </div>{" "}
                </div>
              </Fade>
            </div>
          ))}
        <img
          alt="2"
          src="https://danettemay.com/wp-content/uploads/2016/05/woman-eating-giant-sandwich350-1.png"
        />
      </div>
    )
  );
};

export default CardList;
