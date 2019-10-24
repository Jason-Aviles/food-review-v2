import axios from 'axios';

export default function() {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token,
      AccessControlAllowOrigin: "http://localhost:3006"
    },
//baseURL: 'https://projectfoodiesolo.herokuapp.com/'
  });
};

