import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};
const headerRowStyle = {
  backgroundColor: '#deb5b545',
};

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  let tr = undefined;

  if (isHeader === true) {
    if (textSecondCell === null) {
      tr = <th colSpan='2' style={headerRowStyle}>{textFirstCell}</th>;
    } else {
      tr = (
        <Fragment>
          <th style={headerRowStyle}>{textFirstCell}</th>
          <th style={headerRowStyle}>{textSecondCell}</th>
        </Fragment>
      );
    }
  }
  if (isHeader === false) {
    tr = (
      <Fragment>
        <td style={rowStyle}>{textFirstCell}</td>
        <td style={rowStyle}>{textSecondCell}</td>
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
