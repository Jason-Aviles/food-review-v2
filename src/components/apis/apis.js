import axios from "axios";
import axosWithAuth from "../common/axosWithAuth";
export const register = async user => {
  try {
    const res = await axios.post(
      "https://foodappapisql.herokuapp.com/auth/register",
      user
    );
    return res.data;
  } catch (err) {
    throw new Error(err);
  }
};



export const data = (setone,settwo) => {
  axosWithAuth()
    .get("https://foodappapisql.herokuapp.com/auth/api")
    .then(users => {
      console.log(users);
      setone(users.data.data);
      settwo(users.data.loggedInUser);
    })
    .catch(err => console.log(err));
};

export const Mockdata = () => {
return Promise.resolve({"restaurant_type": "fast-food",
"restaurant_name": "Burger King",
"user_id": 1})
};