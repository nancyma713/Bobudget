import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/navbar.scss';

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
          <button onClick={this.logoutUser} className='logout'>Logout</button>
        </>
      )
    } else {
      return (
        <>
          <Link to="/signup" className='signup'>Signup</Link>
          <Link to="/login" className='login'>Login</Link>
        </>
      );
    }
  }

  render() {
    return (
      <nav className='navbar'>
        <Link to="/" className='link-to-main'><h1>BoBudget!</h1></Link>
        <div className='links'>{this.getLinks()}</div>
      </nav>
    );
  }
}

export default NavBar;