import React from "react";
import "../../assets/stylesheets/dashboard.scss";

// WIDGETS

import Calculator from './widgets/calculator';
import Weather from './widgets/weather';
import BudgetContainer from './widgets/budget_container';
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
          <Weather />
        </div>

        <div className="d-middle">

          <BudgetContainer />

          <Calculator />
        </div>

        <div className="d-right">
          <div className="bubbles-container">
            <Bubbles />
            <p>CLICK ME!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
