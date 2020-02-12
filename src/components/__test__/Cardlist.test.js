import React from "react";
import CardList from "../test/CardList.js";
import { Mockdata,data} from "../apis/apis.js";
import { render, fireEvent, wait, cleanup } from "@testing-library/react";
import Adapter from 'enzyme-adapter-react-16';
import {shallow,configure} from 'enzyme'
import axios from "axios";

// import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });
jest.mock("axios");
// Enzyme.configure({ adapter: new Adapter() })
afterEach(cleanup);

test("get CardList", async () => {
  const route = { get: jest.fn(()=> Promise.resolve({data:null})) };

//  const data = {"restaurant_type": "fast-food",
// "restaurant_name": "Burger King",
// "user_id": 1};
//     axios.get.mockImplementationOnce(() => Promise.resolve(data));
//     await expect(Mockdata('react')).resolves.toEqual(data);
// Mockdata.mockResolvedValueOnce({id:1})
console.log(data())

// return Mockdata().then(data => {
//   expect(data).toMatchObject( {"restaurant_name": "Burger King", "restaurant_type": "fast-food", "user_id": 1});
// });
/* everything below is put in the end of the queue 
 - so after mocked fetch() has resolved and response processed */
// expect(fetchSpy).toHaveBeenCalled(1);
// wrapper.update(); // it is not required
// expect(wrapper).toMatchSnapshot();
  // expect(wrapper.length).toEqual(1);

  wait();
});
