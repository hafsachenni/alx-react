import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    shallow(<NotificationItem />);
  });

  it('renders type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li');
    expect(li).toHaveLength(1);
    expect(li.text()).toEqual('test');
    expect(li.prop('data-notification-type')).toEqual('default');
  });

  it('renders html prop', () => {
    const text = 'Here is the list of notifications';
    const wrapper = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    const li = wrapper.find('li');
    expect(li.html()).toEqual(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });

  describe('NotificationItem Component', () => {
  test('checking when simulating a click he spy is called with the right ID', () => {
    const markAsReadMock = jest.fn();
    const props = {
      id: 1,
      type: 'default',
      value: 'New course available',
      markAsRead: markAsReadMock,
    };

    const wrapper = shallow(<NotificationItem {...props} />);

    wrapper.find('li').simulate('click');

    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
});
