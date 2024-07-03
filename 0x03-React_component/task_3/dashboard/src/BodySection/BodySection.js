import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BodySection.css';


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
