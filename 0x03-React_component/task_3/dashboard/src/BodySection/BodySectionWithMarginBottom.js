import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySectionWithMargin">
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
