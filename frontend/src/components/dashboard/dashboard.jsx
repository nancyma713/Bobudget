import React from "react";
import "../../assets/stylesheets/dashboard.scss";

// WIDGETS

import FavoritesContainer from './widgets/favorites_container';
import BudgetContainer from './widgets/budget_container';
import BubblesContainer from '../bubbles/bubbles_container';
import Calculator from './widgets/calculator';


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
    this.props.fetchUser();
    this.props.fetchPurchases(this.props.currentUser.id);
    this.props.fetchFavorites(this.props.currentUser.id);
  }

  render() {
    const { purchases, currentUser } = this.props;

    if (!purchases) return null;
    if (!currentUser) return null;

    const firstName = this.state.firstName;
    let date = new Date();
    date = date.toDateString();

    const newDate = new Date();
    const monthNum = newDate.getMonth();
    let monthlyPurchases = purchases.filter((purchase) => {
      const purchaseDate = new Date(purchase.date);
      const purchaseMonth = purchaseDate.getMonth();
      return purchaseMonth === monthNum;
    });

    let moneySpent = 0;

    for (let i = 0; i < monthlyPurchases.length; i++) {
      moneySpent += monthlyPurchases[i].price;
    }

    let moneyLeft = currentUser.budget - moneySpent;

    return (
      <div>
        <h1 id="welcome-msg">Welcome, {firstName}</h1>
        <h1 id="date">{date}</h1>
        <div className="dashboard-container">
          <div className="d-left">
            <div className="favorites-container">
              <h3>My Favorites</h3>

              <div className="favorites">
                <FavoritesContainer currentUser={currentUser}/>
              </div>
            </div>
          </div>

          <div className="d-middle">
            <div className="budget flex-column">
              <BudgetContainer />
            </div>

            <div className="calculator">
              <Calculator moneyLeft={moneyLeft}/>
            </div>
          </div>

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
