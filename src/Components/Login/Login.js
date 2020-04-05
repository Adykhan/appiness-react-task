import React, { useState } from "react";
import Input from "../Common/Input";
import "./index.css";
import { authData } from "../../utilities/data";

function Login(props) {
  const [state, setState] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (
      state.email !== authData.username ||
      state.password !== authData.password
    ) {
      alert("Please enter valid credentials");
      return;
    }
    props.history.push("/dashboard");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mx-auto">
          <div className="card login-container">
            <div className="login-container-body my-auto">
              <h5 className="title text-center">Log In</h5>
              <form className="login-form" onSubmit={handleSubmit}>
                <Input
                  name="email"
                  value={state.email}
                  label="Email"
                  type="email"
                  onChange={handleInputChange}
                />
                <Input
                  name="password"
                  value={state.password}
                  label="Password"
                  type="password"
                  onChange={handleInputChange}
                />
                <button className="btn btn-lg btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
