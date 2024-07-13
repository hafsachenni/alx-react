import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

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


test("verifying that the link isnt displayed when the user is logged out", () => {
  const wrapper = mount(
    <AppContext.Provider value={{ user, logOut }}>
      <Footer />
    </AppContext.Provider>
  );
  expect(wrapper.find("div.footer a")).toHaveLength(0);
});

test("verifying that the link is displayed when the user is logged in", () => {
  const wrapper = mount(
    <AppContext.Provider
      value={{ user: { ...user, isLoggedIn: true }, logOut }}
    >
      <Footer />
    </AppContext.Provider>
  );
  expect(wrapper.find("div.footer a")).toHaveLength(1);
  expect(wrapper.find("div.footer a").text()).toEqual("Contact us");
});
