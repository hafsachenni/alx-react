import Footer from './Footer';
import { shallow } from 'enzyme';

test('checking if footer renders Footer component without crashing', () => {
    shallow(<Footer />);
  });

test('Verifying that the components at the very least render the text Copyright', () => {
    const footer = shallow(<Footer />);
    expect(footer.text()).toContain(`Copyright ${getFullYear()} - ${getFooterCopy(true)}`);
});
