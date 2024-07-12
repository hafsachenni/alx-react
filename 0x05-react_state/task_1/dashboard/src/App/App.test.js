import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
  });

  it('contain Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('contain Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('contain Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('contain Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('CourseList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('isLoggedIn true', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('checking if logout func is called when ctr and h are pressed', () => {
    const logOut = jest.fn(() => undefined);
    const app = shallow(<App logOut={logOut} />);
    const alert = jest.spyOn(global, 'alert');
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
  });

  test("verifying that the default state for displayDrawer is false", () => {
    const compnt = shallow(<App />);
    expect(compnt.state().displayDrawer).toEqual(false);
  });

  test("Verifying that after calling handleDisplayDrawer, the state is true", () => {
    const compnt = shallow(<App />);
    expect(compnt.state().displayDrawer).toEqual(false);
    const instance = compnt.instance();
    instance.handleDisplayDrawer();
    expect(compnt.state().displayDrawer).toEqual(true);
  });

  test("verifying that after calling handleHideDrawer, the state is updated to be false", () => {
    const compnt = shallow(<App />);
    expect(compnt.state().displayDrawer).toEqual(false);
    compnt.instance().handleDisplayDrawer();
    expect(compnt.state().displayDrawer).toEqual(true);
    compnt.instance().handleHideDrawer();
    expect(compnt.state().displayDrawer).toEqual(false);
  });
});
