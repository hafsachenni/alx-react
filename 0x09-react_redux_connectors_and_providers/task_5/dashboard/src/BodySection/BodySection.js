import React from 'react';
import PropTypes from 'prop-types';


const BodySection = ({ title, children }) => {
  return (
    <div className="bodySection">
      <h2>{title}</h2>
      {children}
    </div>
  );
};


BodySection.defaultProps = {
  title: '',
};

BodySection.propTypes = {
  title: PropTypes.string,
};

export default BodySection;
