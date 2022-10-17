import { useState } from "react";
import AppButton from "../components/AppButton";
import Head from "../components/Head";
import InputField from "../components/InputField";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [authDetails, setAuthDetails] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      success: true,
      message: "Loging in...",
      data: authDetails,
    });
  };
  const handleChange = (enteredInput, fieldLabel) => {
    setAuthDetails({
      ...authDetails,
      [fieldLabel]: enteredInput,
    });
  };
  return (
    <>
      <Head title="UG|SPMS" />
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Welcome, login here</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <InputField
              label="Email"
              type="email"
              placeholder="exampleemail@example.com"
              name="email"
              onInputChange={handleChange}
              value={authDetails.email}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              onInputChange={handleChange}
              value={authDetails.password}
            />
            <AppButton title="Login" type="submit" />
          </form>
        </div>
      </section>
    </>
  );
}
