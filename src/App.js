import React, { useState, useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
// import UserList from './components/User/Userlist'
// import User from './components/User/User.js'

import "./App.css";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import ReviewAdd from "./components/User_Addfrom/Menu_item_review";
import Menu_Add from "./components/User_Addfrom/Menu_Item";
import Other_Add from "./components/User_Addfrom/Other";
import axosWithAuth from "./components/common/axosWithAuth";
import ReviewEdit from "./components/User_Editfrom/Menu_item_review";
import ReviewMenuEdit from "./components/User_Editfrom/Menu_item";
import ReviewOtherEdit from "./components/User_Editfrom/Other";
import Test1 from "./components/test/CardList";
import Test2 from "./components/test/Card";
import Logout from "./components/Logout";
import HomePage from "./components/view/Homepage";
import HomepageAuth from "./components/view/HomepageAuth";
import AuthNav from "./components/Nav/authNav";
import PublicNav from "./components/Nav/publicNav";
import PrivateRoute from './components/Private/PrivateRoute'
import LoginCon from "./components/confirmation/LoginCon";
import NotFound from "./components/notfound/NotFound";
import ForgotPw from "./components/forgot_password/forgot_password"
import Email from "./components/confirmation/Email_sent"
function App(props) {
  const [username, setUserName] = useState();
  const [user, setUser] = useState();

  const data = () => {
    axosWithAuth()
      .get("https://foodappapisql.herokuapp.com/auth/api")
      .then(users => {
        console.log(users);
        setUser(users.data.data);
        setUserName(users.data.loggedInUser);
      })
      .catch(err => console.log(err));
  };

  const token = localStorage.getItem("token");
  useEffect(() => {
    data();
  }, []);

  console.log(user, "here");
  return (
    <div className="App">
      {/* <Route path='/'  render={(props)=> <UserList user={user} {...props}/>}/>
   <Route path='/:id' exact  render={(props)=> <User user={user} {...props}/>}/> */}

      {/* //////////uncomment under here ///////////////////////// */}

      {/* 
{
!token ? (<div>  <Route  path='/' component={PublicNav}/>   </div>) : (<div>   <Route   path='/' component={AuthNav}/>  </div>)


} */}

      {!token ? (
        <div>
          <Route path="/" component={PublicNav} />
          <Route exact path="/register" component={Register} />
          <Route path="/" exact component={HomePage} />
          <Route exact path="/reset_password" component={ForgotPw} />
          <Route exact path="/email_sent" component={Email} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <Redirect from="/add_review" to="/notfound" />
            <Redirect from="/add_menu" to="/notfound" />
            <Redirect from="/add_other" to="/notfound" />
            <Redirect from="/edit/:id" to="/notfound" />

            <Route exact path="/notfound" component={NotFound} />
          </Switch>

          {/* <Redirect to="/"/> */}
        </div>
      ) : (
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flexEnd",
              margin: "auto",
              flexDirection: "row",
              marginLeft: "79%"
            }}
          >
            <i
              style={{ fontSize: ".5em", color: "#3ee23e" }}
              class="user icon"
            ></i>
            <span style={{ color: "black", fontSize: ".8rem" }}>
              {localStorage.getItem("username")}
            </span>
            <span style={{ fontSize: ".9rem", marginLeft: "2px" }}>
              {" "}
              is logged in
            </span>
          </h1>
          {/* <Route
          exact
            path="/homepage"
            
            render={props => <Test1 user={user} {...props} />}
          /> */}
            
          {/* <Route
          exact
            path="/homepage"
            
            render={props => <Test1 user={user} {...props} />}
          /> */}
 
          <Route path="/" component={AuthNav} />
          <Route path="/" exact component={HomepageAuth} />

          <Route
            exact
            path="/homepage/:id"
            render={props => <Test2 {...props} />}
          />

          <Route
            exact
            path="/edit/:id"
            render={props => <ReviewEdit {...props} />}
          />
          <Route
            exact
            path="/edit/other/:id"
            render={props => <ReviewOtherEdit {...props} />}
          />

          <Route
            exact
            path="/edit/menu/:id"
            render={props => <ReviewMenuEdit {...props} />}
          />

          <Route path="/add_review" exact component={ReviewAdd} />
          <Route path="/add_menu" exact component={Menu_Add} />
          <Route path="/add_other" exact component={Other_Add} />

          <Route path="/loginCon" exact component={LoginCon} />

          {/* <Switch>
            <Redirect from="/test" to="/test" />
          </Switch> */}
        </div>
      )}
<PrivateRoute  path="/homepage" exact props={user} component={Test1}/>
      <Route path="/logout" exact component={Logout} />

      {/* <Route path='/add' exact  component={ADD}/> */}
    </div>
  );
}

export default withRouter(App);
