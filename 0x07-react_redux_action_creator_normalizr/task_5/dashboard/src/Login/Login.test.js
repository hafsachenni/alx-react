import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from "aphrodite";
import Login from './Login';

const wrapper = shallow(<Login />);

it('renders without crashing', () => {
  shallow(<Login />);
});

it('renders login', () => {
  expect(wrapper.find('main.login').exists()).toEqual(true);
});

it('renders login', () => {
  expect(wrapper.find('main.login input')).toHaveLength(2);
});

it('renders login', () => {
  expect(wrapper.find('main.login label')).toHaveLength(2);
});

it("verifing that the submit button is disabled by default", () => {
  const wrapper = shallow(<Login />);
  const emailInput = wrapper.find("#email");
  const passwordInput = wrapper.find("#password");

  emailInput.simulate("change", {
    target: { name: "email", value: "Larry@email.com" },
  });

  let submitInput = wrapper.find("form input[type='submit']");

  expect(submitInput.prop("disabled")).toEqual(true);

  passwordInput.simulate("change", {
    target: { name: "password", value: "123456789" },
  });

  submitInput = wrapper.find("form input[type='submit']");
  expect(submitInput.prop("disabled")).toEqual(false);
});
