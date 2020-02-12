import React from "react";
import Register from "../Register.js";
import { register } from "../apis/apis.js";
import { render, fireEvent, wait, cleanup } from "@testing-library/react";
import Adapter from 'enzyme-adapter-react-16';
import {shallow,configure} from 'enzyme'
import { Item } from "semantic-ui-react";
// import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });
jest.mock("../apis/apis.js");
// Enzyme.configure({ adapter: new Adapter() })
afterEach(cleanup);

test("should register", async () => {

  let savedError;

  beforeEach(() => {
    savedError = console.error;  // save the real console.error
    console.error = jest.fn();  // replace it with a spy
  });

  afterEach(() => {
    console.error = savedError;  // restore the real console.error
  });

register.mockResolvedValueOnce({id:1})

  const historyMock = { push: jest.fn() };
  const state = { username: "jason", password: "1122" };
  const { getByLabelText, getByText, getByTestId } = render(
    shallow(<Register key={1} history={historyMock} />)
  );

  const name = getByTestId("username");
  const pass = getByTestId("password");

  fireEvent.change(name, { target: { value: state.username } });
  fireEvent.change(pass, { target: { value: state.password } });
  const SubmitBtn = getByTestId("btn");

  fireEvent.click(SubmitBtn);
  
   expect(register).toHaveBeenCalledTimes(1);
   expect(register).toHaveBeenCalledWith(state);
  // expect(historyMock).toHaveBeenCalledWith('/login');
  wait(()=> expect({id:1}));
});
