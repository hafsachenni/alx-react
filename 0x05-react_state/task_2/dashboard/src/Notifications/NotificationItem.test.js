import React from "react";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";
import { shallow } from "enzyme";

describe("<Notifications />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it(" checking that NotificationItem renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("verifying that by passing dummy type and value props, it renders correct html", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    wrapper.update();
    const listItem = wrapper.find("li");

    expect(listItem).toHaveLength(1);
    expect(listItem.text()).toEqual("test");
    expect(listItem.prop("data-notification-type")).toEqual("default");
  });
  it(" checking that by passing a dummy html prop, it renders correct html", () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    wrapper.update();
    const listItem = wrapper.find("li");
    expect(listItem.props()["data-notification-type"]).toEqual("default");
    expect(listItem.html()).toContain("<u>test</u>");
  });
  it("checking that when calling the function markAsRead on an instance of the component, the spy is called with the right msg", () => {
    const id = 27;

    const wrapper = shallow(
      <NotificationItem type="default" value="test" id={id} />
    );

    const instance = wrapper;

    instance.markAsRead = jest.fn();

    const listItem = wrapper.find("li").first();

    listItem.simulate("click");

    instance.markAsRead(id);

    expect(instance.markAsRead).toHaveBeenCalledWith(27);
    jest.restoreAllMocks();
  });
});
