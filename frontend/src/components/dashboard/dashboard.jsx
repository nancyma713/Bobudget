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
      .then(() => this.setState({ firstName: this.props.currentUser.firstName, lastName: this.props.currentUser.lastName, username: this.props.currentUser.username }));
  }

  render() {
    const firstName = this.state.firstName;
    let date = new Date();
    date = date.toDateString();

    return (
      <div>
        <h1 id="welcome-msg">Welcome, {firstName}</h1>
        <h1 id="date">{date}</h1>
        <div className="dashboard-container">
          <div className="d-left">
            <FavoritesContainer />
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
