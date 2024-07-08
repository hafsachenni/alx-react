import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const rowStyles = { backgroundColor: "#f5f5f5ab" };
const headerRowStyles = { backgroundColor: "#deb5b545" };

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let element;

  const tableItemStyle = css(
    isHeader ? styles.CourseListth : styles.CourseListtd
  );

  if (isHeader === true) {
    if (textSecondCell === null) {
      element = (
        <th colSpan="2" className={css(styles.CourseListThSpan)}>
          {textFirstCell}
        </th>
      );
    } else {
      element = (
        <>
          <th className={tableItemStyle}>{textFirstCell}</th>
          <th className={tableItemStyle}>{textSecondCell}</th>
        </>
      );
    }
  } else if (isHeader === false) {
    element = (
      <>
        <td className={tableItemStyle}>{textFirstCell}</td>
        <td className={tableItemStyle}>{textSecondCell}</td>
      </>
    );
  }

  let isHeaderStyle;

  if (isHeader) isHeaderStyle = headerRowStyles;
  else isHeaderStyle = rowStyles;

  return <tr style={isHeaderStyle}>{element}</tr>;
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


const styles = StyleSheet.create({
  CourseListth: {
    borderTop: `1px solid rgb(130, 130, 130)`,
    borderBottom: `1px solid rgb(130, 130, 130)`,
    textAlign: "left",
    fontSize: "18px",
  },
  CourseListThSpan: {
    textAlign: "center",
  },
  CourseListtd: {
    textAlign: "left",
  },
});

export default CourseListRow;
