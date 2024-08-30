import { shallow, mount } from "enzyme";
import React from "react";
import { Header } from "./Header";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";



const USER = { email: "example@test.com", password: "0526262" };

describe("<Header />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test("verifying that the header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  
  test("verifying that the component renders an image", () => {
    const wrapper = shallow(<Header user={USER} />);
    wrapper.update();
    expect(wrapper.find("div img")).toHaveLength(1);
  });

  
  test("verifying that the component renders h1 tag", () => {
    const wrapper = shallow(<Header user={USER} />);
    wrapper.update();
    expect(wrapper.find("div h1")).toHaveLength(1);
  });



  test("checking if the logoutSection is not created", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("#logoutSection")).toHaveLength(0);
  });


  test("checking if the logoutSection is created", () => {
    const wrapper = shallow(<Header user={USER} />);
    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });
});
