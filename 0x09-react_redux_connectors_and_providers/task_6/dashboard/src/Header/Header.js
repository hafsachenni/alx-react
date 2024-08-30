import React, { Component } from 'react';
import { connect } from "react-redux";
import { logout } from "../actions/uiActionCreators";
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";
import PropTypes from "prop-types";

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

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.props;
    return (
      <header className={css(styles.header)}>
        <img src={logo} alt='logo' className={css(styles.headerImg)} />
        <h1 className={css(styles.h1)}>School dashboard</h1>
        {user && (
          <div className={css(styles.logoutSection)} id="logoutSection">
            Welcome {user.email} (<span className={css(styles.logoutLink)} onClick={logOut}>logout</span>)
          </div>
        )}
      </header>
    );
  }
}

Header.defaultProps = {
  user: null,
  logout: () => {},
};
Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};


const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
