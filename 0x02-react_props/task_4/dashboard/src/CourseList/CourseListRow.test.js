import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';


test('renders 1 cell with colspan=2 when isHeader is true and textSecondCell doesnt exist', () => {
    const app = shallow(<CourseListRow isHeader={true} textFirstCell="Header text" />);
    expect(app.find('th')).toHaveLength(1);
    expect(app.find('th').prop('colSpan')).toBe('2');
});

test('renders 2 cells when isHeader is true and textSecondCell is present', () => {
    const app = shallow(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
    expect(app.find('th')).toHaveLength(2);
    expect(app.find('th').at(0).text()).toBe('Header 1');
    expect(app.find('th').at(1).text()).toBe('Header 2');
});

test('renders correctly 2 td elems within a tr element when isHeader is false', () => {
    const app = shallow(<CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    expect(app.find('td')).toHaveLength(2);
    expect(app.find('td').at(0).text()).toBe('Cell 1');
    expect(app.find('td').at(1).text()).toBe('Cell 2');
});
