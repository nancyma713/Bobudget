import React from "react";
import { Link } from "react-router-dom";
import "../../assets/stylesheets/navbar.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <>
          <Link className="nav-icon" to="/dashboard">
            <i className=" fas fa-columns" />
            <span className="nav-text">Dashboard</span>
          </Link>
          <Link className="nav-icon" to="/purchases">
            <i className="fas fa-money-check-alt" />
            <span className="nav-text">Purchases</span>
          </Link>
          <Link className="nav-icon" to="/search">
            <i className="fas fa-search" />
            <span className="nav-text">Search</span>
          </Link>
          <Link className="nav-icon" to="/creators">
            <i className="fas fa-users"></i>
            <span className="nav-text">Developers</span>
          </Link>
          <button className="logout nav-icon" onClick={this.logoutUser}>
            <i className="fas fa-sign-out-alt" />
            <span className="nav-text">Logout</span>
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link className="nav-icon" to="/">
            <i className="fas fa-home" />
            <span className="nav-text">Home</span>
          </Link>
          <Link className="nav-icon" to="/creators">
            <i className="fas fa-users"></i>
            <span className="nav-text">Developers</span>
          </Link>
        </>
      );
    }
  }

  render() {
    return (
      <>
        <div className="straw">
          <span className="straw-title">menu</span>
          {this.getLinks()}
        </div>
        <div className="one boba" />
        <div className="two boba" />
        <div className="eleven boba" />
        <div className="twelve boba" />
        <div className="three boba">B</div>
        <div className="four boba">O</div>
        <div className="five boba">B</div>
        <div className="six boba">U</div>
        <div className="seven boba">D</div>
        <div className="eight boba">G</div>
        <div className="nine boba">E</div>
        <div className="ten boba">T</div>

        <div className="nav">
          <Link to="/"><h1>BoBudget</h1></Link>
          <div className="nav-links">
            {this.getLinks()}
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
