import React from "react";
import { Link } from "react-router-dom";
import "../../assets/stylesheets/splash.scss";

const MainPage = () => (
  <div id="welcome-outer">
    <div id="welcome-middle">
      <div id="welcome-inner">
        <h1>Welcome, <br />Boba Enthusiasts&nbsp;&nbsp;<i className="far fa-laugh-wink" /></h1>

        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  </div>
);

export default MainPage;
