import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <>
          <button onClick={this.logoutUser}>Logout</button>
        </>
      )
    } else {
      return (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      );
    }
  }

  render() {
    return (
      <nav>
        <h1>BoBudget!</h1>
        { this.getLinks() }
      </nav>
    );
  }
}

export default NavBar;