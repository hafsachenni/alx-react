import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

const cssVariable = {
  mainColor: "#e01d3f",
};
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    color: '#e0344a',
    alignItems: 'center',
    borderBottom: `thick solid ${cssVariable.mainColor}`,
    width: "100%",
    position: 'fixed',
    top: 0, 
    backgroundColor: '#fff', 
    zIndex: 1000,
  },
  headerImg: {
    width: "200px",
  },
  h1: {
    margin: '0',
  },
  logoutSection: {
    marginLeft: 'auto',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
    color: '#000',
  },
  logoutLink: {
    marginLeft: '10px',
    cursor: 'pointer',
    color: cssVariable.mainColor,
    textDecoration: 'underline',
  },
});

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <header className={css(styles.header)}>
        <img src={logo} alt='logo' className={css(styles.headerImg)} />
        <h1 className={css(styles.h1)}>School dashboard</h1>
        {user.isLoggedIn && (
          <div className={css(styles.logoutSection)} id="logoutSection">
            Welcome {user.email} (<span className={css(styles.logoutLink)} onClick={logOut}>logout</span>)
          </div>
        )}
      </header>
    );
  }
}

export default Header;
