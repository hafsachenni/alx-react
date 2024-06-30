import Notifications from './Notifications';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';


test('testing that notifications renders without crashing', () => {
    shallow(<Notifications />);
});

test('verifying that notifications renders three list items', () => {
    const app = shallow(<Notifications />);
    expect(app.find('(NotificationItem')).toHaveLength(3);
});

test('verify that Notifications renders the text Here is the list of notifications', () => {
    const app = shallow(<Notifications />);
    expect(app.text()).toContain('Here is the list of notifications');
});

test('verify that the first NotificationItem element renders correct HTML', () => {
    const app = shallow(<Notifications />);
    const firstNotificationItem = app.find(NotificationItem).at(0);
    
    expect(firstNotificationItem.prop('type')).toBe('default'); 
    expect(firstNotificationItem.prop('value')).toBe('New course available'); 
    expect(firstNotificationItem.html()).toContain('New course available'); 
});

test('menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    const item = wrapper.find('div.menuItem');
    expect(item).toHaveLength(1);
});

test('div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    const notifs = wrapper.find('div.Notifications');
    expect(notifs).toHaveLength(0);
});

test(' menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const menu = wrapper.find('div.menuItem');
    expect(menu).toHaveLength(1);
});

test('div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const notifs = wrapper.find('div.Notifications');
    expect(notifs).toHaveLength(1);
});
