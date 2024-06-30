import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';


test('verifying that the component renders without crashing', () => {
    shallow(<NotificationItem/>);
});

test('Verifying that by passing dummy type and value props, it renders the correct html', () => {
    const notifs = shallow(<NotificationItem type="default" value="test" />);
    expect(notifs.find('li').text()).toBe('test');
    expect(notifs.find('li').prop('data-notification-type')).toBe('default');
});

test('Verifying that by passing a dummy html prop, it renders the correct html', () => {
    const htmlContent = { __html: '<u>test</u>' };
    const notifs = shallow(<NotificationItem type="urgent" html={htmlContent} />);
    expect(notifs.find('li').prop('data-notification-type')).toBe('urgent');
    expect(notifs.find('li').html()).toContain('<u>test</u>');
});
