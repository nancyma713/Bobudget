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
        <div id="straw">
          <span id="straw-title">menu</span>
          {this.getLinks()}
        </div>

        <div id="one" className="boba" />
        <div id="two" className="boba" />
        <div id="eleven" className="boba" />
        <div id="twelve" className="boba" />
        <div id="three" className="boba">B</div>
        <div id="four" className="boba">O</div>
        <div id="five" className="boba">B</div>
        <div id="six" className="boba">U</div>
        <div id="seven" className=" boba">D</div>
        <div id="eight" className="boba">G</div>
        <div id="nine" className="boba">E</div>
        <div id="ten" className="boba">T</div>

        <div id="nav">
          <Link to="/"><h1>BoBudget</h1></Link>
          <div id="nav-links">
            {this.getLinks()}
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
