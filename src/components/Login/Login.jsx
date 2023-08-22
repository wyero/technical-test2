import React, { useState } from "react";
import styles from "./style.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    navigate("/article");
  };
  return (
    <Card title="login">
      <section className={styles.login}>
        <form onSubmit={loginHandler} className={styles.loginForm}>
          <div className={styles["login-control"]}>
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles["login-control"]}>
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button>login</Button>
        </form>
      </section>
    </Card>
  );
};

export default Login;
