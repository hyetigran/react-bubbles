import React, { useState } from "react";
import { axiosWithAuth } from "../auth/axiosAuth";

const initialCredentails = { username: "", password: "" };
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState(initialCredentails);

  const handleLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://localhost:5000/api/login", credentials)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div>
        <h1>Welcome to the Bubble App!</h1>
      </div>
      <form className="login-form" onSubmit={e => handleLogin(e)}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          placeholder="username"
          onChange={e => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          placeholder="password"
          onChange={e => handleChange(e)}
        />
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
