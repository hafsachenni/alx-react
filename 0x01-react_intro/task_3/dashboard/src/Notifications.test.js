import Notifications from './Notifications';
import { shallow } from 'enzyme';

test('testing that notifications renders without crashing', () => {
    shallow(<Notifications />);
});

test('verifying that notifications renders three list items', () => {
    const app = shallow(<Notifications />);
    expect(app.find('li')).toHaveLength(3);
});

test('verify that Notifications renders the text Here is the list of notifications', () => {
    const app = shallow(<Notifications />);
    expect(app.text()).toContain('Here is the list of notifications');
});
