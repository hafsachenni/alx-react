import React, { Component, Fragment } from 'react';
import { css, StyleSheet } from 'aphrodite';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

const cssVariable = {
  mainColor: "#e01d3f",
};
const styles = StyleSheet.create({
  body: {
    padding: '16px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  footer: {
    width: "100%",
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: `3px solid ${cssVariable.mainColor}`,
    padding: '10px 0', 
    backgroundColor: '#fff',
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Fragment>
        <Notifications listNotifications={listNotifications} />
        <Header />
        <div className={css(styles.body)}>
          {!isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Hello, have you finished your tasks?</p>
          </BodySection>
        </div>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
