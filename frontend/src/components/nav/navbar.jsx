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
    // return <Redirect to="/" />;
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
          <button onClick={this.logoutUser} className="logout nav-icon">
            <i class="fas fa-sign-out-alt" />
            <span className="nav-text">Logout</span>
          </button>
        </>
      );
    } else {
      return (
        <>
          
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
            <span className="menu-title">menu</span>
            {this.getLinks()}
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
