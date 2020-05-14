import React from "react";
import { Link } from "react-router-dom";
import "../../assets/stylesheets/splash.scss";

const MainPage = () => (
  <div className="welcome-form center">
    <section>
      <h1>Welcome, 
        <br />Boba Enthusiasts!&nbsp;&nbsp;
        <i className="far fa-laugh-wink" /></h1>
      <h2>Get poppin' below:</h2>
    </section>

    <section className="flex-column">
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </section>
  </div>
);

export default MainPage;
