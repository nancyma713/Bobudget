import React from "react";
import "../../assets/stylesheets/dashboard.scss";

import FavoritesContainer from "./widgets/favorites/favorites_container";
import BudgetCalcContainer from "./widgets/budget_calc/budget_calc_container";
import BubblesContainer from "./widgets/bubbles/bubbles_container";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchPurchases(this.props.currentUser.id);
    this.props.fetchFavorites(this.props.currentUser.id);
  }

  render() {
    const { purchases, currentUser } = this.props;

    if (!purchases || !currentUser) return null;

    let date = new Date().toDateString();

    return (
      <>
        <h1 id="welcome-msg">Welcome, {currentUser.firstName}</h1>
        <h1 id="date">{date}</h1>
        
        <div id="dashboard-container">
          <section id="dash-left">
            <div id="favorites-container">
              <i id="fav-info-i" className="fas fa-info-circle"></i>
              <div id="fav-info">
                How to add a Favorite: 
                <ol>
                  <li>Search for your favorite boba drinks in the Search page</li>
                  <li>Click on the <i className="far fa-heart"></i> to favorite the ones you like</li>
                  <li>All the ones you heart will appear here!</li>
                </ol>
                <br />
                How to remove a Favorite: 
                <ol>
                  <li>On the Dashboard: </li>
                  <ul>
                    <li>For the boba drink you would like to remove, click on the <i className="fas fa-heart"></i></li>
                  </ul>
                  <li>On the Search page: </li>
                  <ul>
                    <li>Search the boba drink you would like to unfavorite</li>
                    <li>Click on the <i className="fas fa-heart"></i></li>
                  </ul>
                </ol>
              </div>

              <h3>My Favorites</h3>
              <div id="favorites">
                <FavoritesContainer />
              </div>
            </div>
          </section>

          <section id="dash-middle">
            <BudgetCalcContainer />
          </section>

          <section id="dash-right">
            <div id="bubbles-container">
              <BubblesContainer />
              <p>CLICK A BOBA FOR BOBA SUGGESTION!</p>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Dashboard;
