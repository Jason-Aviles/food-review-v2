import axios from 'axios';
export default function() {
  

  return axios.create({
    headers: {
    
  
      'Content-Type': 'application/json',
                "Accept": 'application/json',
    },
//baseURL: 'https://projectfoodiesolo.herokuapp.com/'
  });
};

