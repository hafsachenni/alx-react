import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { css, StyleSheet } from 'aphrodite';

// Define Aphrodite styles
const styles = StyleSheet.create({
  courseList: {
    width: '95%',
    margin: 'auto',
    marginTop: '200px',
    border: '1px solid gray',
    borderCollapse: 'collapse',
  },
  centerAlign: {
    textAlign: 'center',
  },
  leftAlign: {
    textAlign: 'left',
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray',
  },
});

const CourseList = ({ listCourses }) => {
  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 && (
          <CourseListRow
            textFirstCell='No course available yet'
            isHeader={false}
          />
        )}

        {listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
            isHeader={false}
          />
        ))}
      </tbody>
    </table>
  );
};

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
