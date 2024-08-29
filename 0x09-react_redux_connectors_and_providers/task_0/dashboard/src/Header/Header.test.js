import { shallow, mount } from "enzyme";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";
import Header from "./Header";
import AppContext, { user, logOut } from "../App/AppContext";

describe("<Header />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test("checking if the headers component renders without crashing", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual(true);
  });
  test("verifying that the components renders an  image", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.update();
    expect(wrapper.find("div img")).toHaveLength(1);
  });
  test("verifying that  that the components render h1", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.update();
    expect(wrapper.find("div h1")).toHaveLength(1);
  });

  test("checking if the logoutsection is not created", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(0);
  });

  test("checking if the logoutSection is created", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });
});
