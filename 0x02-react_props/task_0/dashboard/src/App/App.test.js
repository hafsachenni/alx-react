import { shallow } from 'enzyme';
import App from './App';

test('testing that App renders without crashing', () => {
    shallow(<App />);
});
