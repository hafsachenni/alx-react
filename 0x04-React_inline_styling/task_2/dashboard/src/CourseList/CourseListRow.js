import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
  headerRowStyle: {
    backgroundColor: '#deb5b545',
  },
  rowStyle: {
    backgroundColor: '#f5f5f5ab',
  },
  thStyle: {
    textAlign: 'center',
    borderBottom: '1px solid gray',
    borderTop: '1px solid gray',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  let tr = undefined;

  if (isHeader === true) {
    if (textSecondCell === null) {
      tr = <th colSpan='2' className={css(styles.headerRowStyle, styles.thStyle)}>{textFirstCell}</th>;
    } else {
      tr = (
        <Fragment>
          <th className={css(styles.headerRowStyle, styles.thStyle)}>{textFirstCell}</th>
          <th className={css(styles.headerRowStyle, styles.thStyle)}>{textSecondCell}</th>
        </Fragment>
      );
    }
  }
  if (isHeader === false) {
    tr = (
      <Fragment>
        <td className={css(styles.rowStyle)}>{textFirstCell}</td>
        <td className={css(styles.rowStyle)}>{textSecondCell}</td>
      </Fragment>
    );
  }

  return <tr>{tr}</tr>;
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
