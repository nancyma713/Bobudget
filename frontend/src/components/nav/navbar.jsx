import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../../assets/stylesheets/navbar.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    debugger;
    e.preventDefault();
    this.props.logout();
    // return <Redirect to="/" />;
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <>
          <button onClick={this.logoutUser} className="logout">
            Logout
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signup" className="signup">
            Signup
          </Link>
          <Link to="/login" className="login">
            Login
          </Link>
        </>
      );
    }
  }

  render() {
    return (
      <>
        {/*   <Link to="/" className='link-to-main'><h1>BoBudget!</h1></Link>
         <div className='links'>{this.getLinks()}</div> */}
        <div className="first boba">
          <div className="menu">
            menu
            <Link to="/">home</Link>
            <Link to="/signup">signup</Link>
            {/* Placeholder log-out button */}
            <button onClick={this.logoutUser} className="logout">
              Logout
            </button>
          </div>
        </div>
        <div className="tenth boba" />
        <div className="second boba">B</div>
        <div className="third boba">O</div>
        <div className="fourth boba">B</div>
        <div className="fifth boba">U</div>
        <div className="sixth boba">D</div>
        <div className="seventh boba">G</div>
        <div className="eighth boba">E</div>
        <div className="ninth boba">T</div>
      </>
    );
  }
}

export default NavBar;
