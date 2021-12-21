import React from 'react';
import {NavLink} from 'react-router-dom';
import loginImg from "../images/signin.svg";

const Login = () => {
    return (
        <section className="sign-in">
      <div className="container mt-5">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src={loginImg} alt="Login pic" />
            </figure>
            <NavLink className="signup-image-link" to="/signup">
              Create an Account
            </NavLink>
          </div>
          <div className="signin-form">
            <h2 className="form-title">Signin</h2>
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
                <label for="email">
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="off"
                  placeholder="Your Email"
                 // onChange={(e) => setEmail(e.target.value)}
                //  value={email}
                />
              </div>
              <div className="form-group">
                <label for="password">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="off"
                  placeholder="Your Password"
                 // onChange={(e) => setPassword(e.target.value)}
                //  value={password}
                />
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Signin"
                 // onClick={loginUser}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Login
