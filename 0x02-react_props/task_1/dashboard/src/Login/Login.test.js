import Login from "./Login";
import { shallow } from "enzyme";

test('verifying that footer component renders without crashing', () => {
    shallow(<Login/>);
});

test('erifying that the components renders 2 input tags and 2 label tags', () => {
    const login = shallow(<Login/>);
    expect(login.find('input')).toHaveLength(2);
    expect(login.find('label')).toHaveLength(2);
});
