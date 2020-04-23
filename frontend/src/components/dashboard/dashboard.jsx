import React from "react";
import "../../assets/stylesheets/dashboard.scss";

// WIDGETS
import Calculator from "./widgets/calculator";
import Weather from "./widgets/weather";
import Budget from "./widgets/budget";
import Bubbles from "../bubbles/bubbles_container";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const {
      currentUser,
      purchases,
      createPurchase,
      fetchPurchases,
    } = this.props;
    return (
      <div className="dashboard-container">
        <div className="d-left">
          <Weather />
        </div>

        <div className="d-middle">
          <Budget
            currentUser={currentUser}
            purchases={purchases}
            createPurchase={createPurchase}
            fetchPurchases={fetchPurchases}
          />
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
