import { shallow } from 'enzyme';
import App from './App';

test('testing that App renders without crashing', () => {
    shallow(<App />);
});

test('testing if App renders a div with the class App-header', () => {
    const app = shallow(<App />);
    expect(app.find('.App-header')).toHaveLength(1);
});

test('testing if App renders a div with the class App-body', () => {
    const app = shallow(<App />);
    expect(app.find('.App-body')).toHaveLength(1);
});

test('testing if App renders a div with the class App-footer', () => {
    const app = shallow(<App />);
    expect(app.find('.App-footer')).toHaveLength(1);
});
