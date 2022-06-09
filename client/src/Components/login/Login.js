import React from "react";
import "./css/styles.css";
const styles = {
  signup: {
    height: "460px",
    background: "rgb(250, 250, 250)",
    float: "left",
    borderRadius: "60% / 30%",
    width: "350px",
    border: "black",
    padding: "50px",
    margin: "20px",
  },
  login: {
    height: "460px",
    background: "rgb(250, 250, 250)",
    borderRadius: "60% / 30%",
    display: "inline-block",
    width: "350px",
    border: "black",
    padding: "50px",
    margin: "20px",
  },
  label: {
    color: "#573b8a",
    fontSize: "2.3em",
    justifyContent: "center",
    display: "flex",
    margin: "60px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.5s ease-in-out",
  },
  input: {
    width: "60%",
    height: "20px",
    background: "#e0dede",
    justifyContent: "center",
    display: "flex",
    margin: "20px auto",
    padding: "10px",
    border: "none",
    outline: "none",
    borderRadius: "5px",
  },
  button: {
    width: "60%",
    height: "40px",
    margin: "10px auto",
    justifyContent: "center",
    display: "block",
    color: "#fff",
    background: "#573b8a",
    fontSize: "1em",
    fontWeight: "bold",
    marginTop: "20px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    transition: "0.2s ease-in",
    cursor: "pointer",
  }
};
function Login() {
  return (
    <div>
      <div>
        <div style={styles.signup}>
          <form style={styles.form}>
            <h2 style={styles.label} aria-hidden="true">
              Sign up
            </h2>
            <input
              style={styles.input}
              type="text"
              name="txt"
              placeholder="Username"
              required=""
            />
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              style={styles.input}
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button style={styles.button}>Sign up</button>
          </form>
        </div>
      </div>
      <div>
        <div style={styles.login}>
          <form style={styles.form}>
            <h2 style={styles.label} aria-hidden="true">
              Login
            </h2>
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              style={styles.input}
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button style={styles.button}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
