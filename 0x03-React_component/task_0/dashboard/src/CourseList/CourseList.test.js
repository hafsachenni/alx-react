import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';


test('checking if CourseList component renders without crashing', () => {
    shallow(<CourseList />);
});

  
test('checking that CourseList component renders the 5 different rows', () => {
    const rows = wrapper.find('CourseListRow');
    expect(rows).toHaveLength(5);
    expect(rows.at(0).prop('textFirstCell')).toEqual('Available courses');
    expect(rows.at(0).prop('isHeader')).toEqual(true);
    expect(rows.at(1).prop('textFirstCell')).toEqual('Course name');
    expect(rows.at(1).prop('textSecondCell')).toEqual('Credit');
    expect(rows.at(1).prop('isHeader')).toEqual(true);
    expect(rows.at(2).prop('textFirstCell')).toEqual('ES6');
    expect(rows.at(2).prop('textSecondCell')).toEqual('60');
    expect(rows.at(2).prop('isHeader')).toEqual(false);
    expect(rows.at(3).prop('textFirstCell')).toEqual('Webpack');
    expect(rows.at(3).prop('textSecondCell')).toEqual('20');
    expect(rows.at(3).prop('isHeader')).toEqual(false);
    expect(rows.at(4).prop('textFirstCell')).toEqual('React');
    expect(rows.at(4).prop('textSecondCell')).toEqual('40');
    expect(rows.at(4).prop('isHeader')).toEqual(false);
});
