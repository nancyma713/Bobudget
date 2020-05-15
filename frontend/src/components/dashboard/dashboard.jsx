import React from "react";
import { Link } from 'react-router-dom';
import "../../assets/stylesheets/dashboard.scss";

// WIDGETS
import FavoritesContainer from './widgets/favorites/favorites_container';
import BudgetCalcContainer from './widgets/budget_calc/budget_calc_container';
import BubblesContainer from './widgets/bubbles/bubbles_container';

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

    const firstName = currentUser.firstName;
    let date = new Date();
    date = date.toDateString();

    return (
      <div>
        <h1 id="welcome-msg">Welcome, {firstName}</h1>
        <h1 id="date">{date}</h1>
        <div className="dashboard-container">
          <div className="d-left">
            <div className="favorites-container">
              <i id="fav-info-i" className="fas fa-info-circle"></i>
              <div className="fav-info">
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
              <div className="favorites">
                <FavoritesContainer />
              </div>
            </div>
          </div>

          <div className="d-middle">
            <BudgetCalcContainer />
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
