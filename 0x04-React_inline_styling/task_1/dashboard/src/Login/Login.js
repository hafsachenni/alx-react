import React from 'react';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  login: {
    padding: "16px 24px",
    marginTop: "160px",
  },
  loginInput: {
    margin: "4px",
  },
  loginButton:{
    cursor: 'pointer',
    margin: "4px",
  },
});

function Login() {
  return (
    <main role='main' className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' className={css(styles.loginInput)}/>
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' id='password' className={css(styles.loginInput)}/>
      <button type='button' className={css(styles.loginButton)}>OK</button>
    </main>
  );
}

export default Login;
