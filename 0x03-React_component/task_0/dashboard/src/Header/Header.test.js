import Header from "./Header";
import { shallow } from "enzyme";

test('testing that Header renders without crashing', () => {
    shallow(<Header/>);
});

test('verifying that the components render img and h1 tags', () => {
    const header = shallow(<Header />);
    expect(header.find('img')).toHaveLength(1);
    expect(header.find('h1')).toHaveLength(1); 
})
