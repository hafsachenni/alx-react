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
