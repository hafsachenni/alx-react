import React, { Component, Fragment } from 'react';
import { css, StyleSheet } from 'aphrodite';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import AppContext, { user as defaultUser } from "./AppContext";

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
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {displayDrawer: false, user: defaultUser, logOut: this.logOut };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({ user: defaultUser });
  }

  render() {
    const { user, user: { isLoggedIn }, logOut, displayDrawer } = this.state;
    const value = { user, logOut };

    return (
      <AppContext.Provider value={value}>
        <Fragment>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <Header />
          <div className={css(styles.body)}>
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
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
      </AppContext.Provider>
    );
  }
}

export default App;
