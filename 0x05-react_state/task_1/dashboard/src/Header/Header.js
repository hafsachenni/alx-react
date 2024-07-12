import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";


const cssVariable = {
  mainColor: "#e01d3f",
};
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    color: '#e0344a',
    alignitems: 'center',
    borderbottom: `thick solid ${cssVariable.mainColor}`,
    width: "100%",
    position: 'fixed',
  },
  headerImg: {
    width: "200px",
  },
  h1:{
    margin: '0',
  },
});



function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} alt='logo' className={css(styles.headerImg)} />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </header>
  );
}

export default Header;
