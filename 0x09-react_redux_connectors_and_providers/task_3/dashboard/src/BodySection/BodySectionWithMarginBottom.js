import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
    width: "100%",
  },
});

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection {...props} />
    </div>
  );
};


BodySectionWithMarginBottom.defaultProps = {
   title: '',
};

BodySectionWithMarginBottom.propTypes = {
   title: PropTypes.string,
};

export default BodySectionWithMarginBottom;
