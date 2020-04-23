import React from "react";
import "../../assets/stylesheets/dashboard.scss";

// WIDGETS

import Calculator from './widgets/calculator';
import FavoritesContainer from './widgets/favorites_container';
import BudgetCalcContainer from './widgets/budget_calc_container';
import Bubbles from "../bubbles/bubbles_container";


class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
    // this.props.fetchPurchases(this.props.currentUser.id);
  }

  render() {

    return (
      <div className="dashboard-container">
        <div className="d-left">
          <FavoritesContainer />
        </div>

          <BudgetCalcContainer />

        <div className="d-right">
          <div className="bubbles-container">
            <Bubbles />
            <p>CLICK A BOBA FOR BOBA SUGGESTION!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
