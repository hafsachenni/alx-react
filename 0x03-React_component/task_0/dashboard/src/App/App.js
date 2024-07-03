import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
      isLoggedIn: props.isLoggedIn,
    };
  }

  render() {
    const { isLoggedIn, listCourses, listNotifications } = this.state;
    const component = isLoggedIn ? (
      <CourseList listCourses={listCourses} />
    ) : (
      <Login />
    );

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <Header />
        {component}
        <Footer />
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;

