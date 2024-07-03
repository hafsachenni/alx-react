import { shallow } from 'enzyme';
import App from './App';

test('testing that App renders without crashing', () => {
    shallow(<App />);
});

test('checking if app contain the Notifications component', () => {
    const app = shallow(<App />);
    expect(app.find('Notifications')).toHaveLength(1);
});

test('checking if app contain the Header component', () => {
    const app = shallow(<App />);
    expect(app.find('Header')).toHaveLength(1);
});

test('checking if app contain the Login component', () => {
    const app = shallow(<App />);
    expect(app.find('Login')).toHaveLength(1);
});

test('checking if app contain the Footer component', () => {
    const app = shallow(<App />);
    expect(app.find('Footer')).toHaveLength(1);
});

test('CourseList with isLoggedIn false', () => {
    const app = shallow(<App />);
    expect(app.find('CourseList')).toHaveLength(0);
});

test('isLoggedIn is true', () => {
    const app = shallow(<App isLoggedIn />);
    expect(app.find('Login')).toHaveLength(0);
    expect(app.find('CourseList')).toHaveLength(1);
});
