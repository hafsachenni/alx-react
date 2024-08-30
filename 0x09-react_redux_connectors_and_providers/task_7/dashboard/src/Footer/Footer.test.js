import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import AppContext from "../App/AppContext";
import { user, logOut } from "../App/AppContext";
import { shallowEqual } from "react-redux";

const wrapper = shallow(<Footer />);

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('renders footer', () => {
  expect(wrapper.find('footer.footer').exists()).toEqual(true);
});

it('renders footer', () => {
  expect(wrapper.find('footer.footer p').exists()).toEqual(true);
  expect(wrapper.find('footer.footer p').text()).toContain('Copyright');
});


test("verifying that the link is not displayed when the user is logged out", () => {
  const wrapper = shallow(<Footer user={null} />);
  expect(wrapper.find("div.footer a")).toHaveLength(0);
});


test("verifying that the link is displayed when the user is logged in", () => {
  const wrapper = shallow(
    <Footer user={{ email: "example@oi.com", password: "659562" }} />
  );
  expect(wrapper.find("div.footer a")).toHaveLength(1);
  expect(wrapper.find("div.footer a").text()).toEqual("Contact us");
});
