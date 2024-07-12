import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from "aphrodite";

describe('<Notifications />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.restoreAllMocks();
  });

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders Notification Item with html', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toBeDefined();
  });

  it('renders menuItem with displayDrawer false', () => {
    const wrapper = shallow(<Notifications />);
    const mItem = wrapper.find('div.menuItem');
    expect(mItem).toHaveLength(1);
  });

  it('does not render Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    const dNoti = wrapper.find('div.Notifications');
    expect(dNoti).toHaveLength(0);
  });

  it('renders menuItem with displayDrawer true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const mItem = wrapper.find('div.menuItem');
    expect(mItem).toHaveLength(1);
  });

  it('renders Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const dNoti = wrapper.find('div.Notifications');
    expect(dNoti).toHaveLength(1);
  });
});

describe('listNotifications with values', () => {
  let latestNotification;
  let listNotifications;

  beforeEach(() => {
    latestNotification = getLatestNotification();
    listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: latestNotification } },
    ];
  });

  it('renders NotificationItems with correct values', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists()).toBeTruthy();
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toBeDefined();
    expect(nItem).toHaveLength(3);
    expect(nItem.at(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
    expect(nItem.at(1).html()).toEqual(
      '<li data-notification-type="urgent">New resume available</li>'
    );
    expect(nItem.at(2).html()).toEqual(
      `<li data-notification-type="urgent">${latestNotification}</li>`
    );
  });
});

describe('listNotifications without values', () => {
  let listNotifications;

  beforeEach(() => {
    listNotifications = [];
  });

  it('renders NotificationItem with no notifications', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists()).toBeTruthy();
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(1);
    expect(nItem.html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });

  it('renders NotificationItem without listNotifications prop', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toHaveLength(1);
    expect(nItem.html()).toEqual(
      '<li data-notification-type="default">No new notification for now</li>'
    );
  });
});

describe('markAsRead', () => {
  it('mocks console.log function', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    console.log = jest.fn();
    const instance = wrapper.instance();
    const id = 0;
    instance.markAsRead(id);
    expect(console.log).toHaveBeenCalledWith(
      `Notification ${id} has been marked as read`
    );
  });
});

describe('updating properties of component', () => {
  it('does not rerender when updating with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      'shouldComponentUpdate'
    );
    wrapper.setProps({ listNotifications: listNotifications });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
  });

  it('rerenders when updating with a longer list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const latestNotification = getLatestNotification();
    const listNotifications2 = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: latestNotification } },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      'shouldComponentUpdate'
    );
    wrapper.setProps({ listNotifications: listNotifications2 });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
  });

  test("verifying that clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );

    wrapper.find("#menuItem").simulate("click");

    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).not.toHaveBeenCalled();

    jest.restoreAllMocks();
  });

  test("verifying that clicking on the button calls handleHideDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications
        displayDrawer
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );

    wrapper.find("#closeNotifications").simulate("click");

    expect(handleDisplayDrawer).not.toHaveBeenCalled();
    expect(handleHideDrawer).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
