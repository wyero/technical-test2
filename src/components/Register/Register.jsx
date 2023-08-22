import React, { useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./style.module.css";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [profile, setProfile] = useState("");

  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <Card title="register">
      <section className={styles.register}>
        <form onSubmit={registerHandler} className={styles.formRegister}>
          <div className={styles["register-form__control"]}>
            <label htmlFor="firstname">first name</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles["register-form__control"]}>
            <label htmlFor="lastname">last name</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className={styles["register-form__control"]}>
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles["register-form__control"]}>
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles["register-form__control"]}>
            <label htmlFor="telephone">telephone</label>
            <input
              type="number"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div className={styles["register-form__control"]}>
            <label htmlFor="country">country</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className={styles["register-form__control"]}>
            <label htmlFor="province">province</label>
            <input
              type="text"
              id="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
          <div className={styles["register-form__control"]}>
            <label htmlFor="city">city</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className={styles["register-form__control"]}>
            <label htmlFor="address">address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles["register-form__control"]}>
            <label htmlFor="profile">profile image</label>
            <input
              type="file"
              id="profile"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            />
          </div>
          <Button>register</Button>
        </form>
      </section>
    </Card>
  );
};

export default Register;
