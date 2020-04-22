import React from "react";
import "../../assets/stylesheets/splash.scss";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
    };
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <>
        <ul className="bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="center welcome-form">
            <div className="flex-column">
                <h1>Welcome, Boba Enthusiasts!</h1>
                <h2>Get poppin' below:</h2>
                <Link to="/signup" className="splash-link">Signup</Link>
                <Link to="/login" className="splash-link">Login</Link>
            </div>
        </div>
      </>
    );
  }
}

export default MainPage;
