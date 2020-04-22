import React from "react";
// import SignUpFormContainer from '../session/signup_form_container';
import "../../assets/stylesheets/splash.scss";
import { Link, Redirect } from "react-router-dom";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  // handleSubmit(e) {
  //     e.preventDefault();
  //     return <Link to="/signup" />
  // }

  render() {
    return (
      <>
        <ul class="bubbles">
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
