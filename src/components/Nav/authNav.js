import React from "react";
import { Link } from "react-router-dom";

// width: 53px;
// display: flex;
// flex-direction: column;
// align-items: center;
// align-content: center;
// justify-content: center;
// margin: auto;
const AuthNav = props => {
  return (
    <div class="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
      <Link class="item" to="/">
        <i aria-hidden="true" class="home icon"></i>
        Home
      </Link>

      <div>
        <Link to="/add_review" class="item">
          <i
            aria-hidden="true"
            class="plus square outline icon
 "
          ></i>
          Add review
        </Link>
        <Link class="item" to="/homepage">
          <i
            aria-hidden="true"
            class="eye icon
 "
          ></i>
          My review
        </Link>

        <Link
          class="item"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.getItem("id");
            props.history.push("/");
          }}
          to="/logout"
        >
          <i aria-hidden="true" class="meh outline icon"></i>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AuthNav;
