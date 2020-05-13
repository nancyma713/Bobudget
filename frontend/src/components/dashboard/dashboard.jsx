import React from "react";
import "../../assets/stylesheets/dashboard.scss";

// WIDGETS

import FavoritesContainer from './widgets/favorites_container';
import BudgetCalcContainer from './widgets/budget_calc_container';
import BubblesContainer from '../bubbles/bubbles_container';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: ''
    }
  }
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    console.log(this.props.currentUser);
    const firstName = this.props.currentUser.firstName;
    let date = new Date();
    date = date.toDateString();

    return (
      <div>
        <h1 id="welcome-msg">Welcome, {firstName}</h1>
        <h1 id="date">{date}</h1>
        <div className="dashboard-container">
          <div className="d-left">
            <div className="favorites-container">
              <h3>My Favorites</h3>

              <div className="favorites">
                <FavoritesContainer />
              </div>
            </div>
          </div>

          <BudgetCalcContainer />

          <div className="d-right">
            <div className="bubbles-container">
              <BubblesContainer />
              <p>CLICK A BOBA FOR BOBA SUGGESTION!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
