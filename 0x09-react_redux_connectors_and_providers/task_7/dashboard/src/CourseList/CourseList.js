import React, { Component } from "react";
import {fetchCourses,selectCourse, unSelectCourse} from "../actions/courseActionCreators";
import CourseListRow from './CourseListRow';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';
import { getCoursesList } from "../selectors/courseSelector";


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


export class CourseList extends Component {
  constructor(props) {
    super(props);
    this.onChangeRow = this.onChangeRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }

  render() {
    const { listCourses } = this.props;
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
            isChecked={course.isSelected}
            onChangeRow={this.onChangeRow}
          />
        ))}
      </tbody>
    </table>
  );
};
}

CourseList.defaultProps = {
  listCourses: null,
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
};

CourseList.propTypes = {
  listCourses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  fetchCourses: PropTypes.func,
  selectCourse: PropTypes.func,
  unSelectCourse: PropTypes.func,
};



export const mapStateToProps = (state) => {
  const coursesList = getCoursesList(state);
  return {
    listCourses: coursesList,
  };
};

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
