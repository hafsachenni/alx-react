import React, { Component } from 'react';


const WithLogging = (WrappedComponent) => {
  class HOC extends Component {
    componentDidMount() {
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount(){
      const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  HOC.displayName = `WithLogging(${componentName})`;
  return HOC;
};

export default WithLogging;
