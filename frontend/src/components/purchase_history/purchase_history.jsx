import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/stylesheets/purchases.scss';

class PurchaseHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: ''
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.deleteButton = this.deleteButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser().then(() => this.setState({ budget: this.props.currentUser.budget }))
    this.props.fetchPurchases(this.props.currentUser.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.props.currentUser.data.user;
    user.budget = this.state.budget;
    this.props.updateUser(user)
      .then(() => window.location.reload());
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removePurchase(e.currentTarget.value)
      .then(() => window.location.reload());
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { purchases } = this.props;

    const newDate = new Date();
    const monthNum = newDate.getMonth();
    const year = newDate.getFullYear();
    let month = "";
    switch (monthNum) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        return;
    }

    if (!purchases) return null;

    let monthlyPurchases = purchases.filter((purchase) => {
      const purchaseDate = new Date(purchase.date);
      const purchaseMonth = purchaseDate.getMonth();
      return purchaseMonth === monthNum;
    });

    let totalSpend = 0;

    let purchaseItems = monthlyPurchases.map((purchase) => {
      const newDate = new Date(purchase.date);
      const newDateString = newDate.toDateString();
      totalSpend += purchase.price;
      return (
        <li key={`p-${purchase.date}-${purchase.price}`}>
          <span className="p-date">{newDateString}</span>
          <div id='purchase-price'>${purchase.price}</div>
          <button value={purchase.id} onClick={this.handleDelete}>
            <i className="fas fa-times"></i>
        </button>
        </li>
      );
    });

    return (
      <div className="purchased-items center">

        <h1>{month} {year} Purchase History</h1>

        <div className="purchase-split">
          <section className="purchase-info">

            <div className="budget-orb">
              <h3>Monthly Budget:</h3>
              <p>$ {this.state.budget}</p>
            </div>

            <div className="budget-orb">
              <h3>Monthly Spend: </h3>
              <p>$ {totalSpend}</p>
            </div>

            <form id="update-budg-form" onSubmit={this.handleSubmit}>
              <label>Update budget:</label>
              <div className="b-dollar">$</div>

              <input
                type="number"
                min="5.00"
                step="0.01"
                value={this.state.budget}
                onChange={this.update("budget")}
              />
              <div className="b-desc">a month on boba</div>

              <button type="submit"><i class="fas fa-check"></i></button>
            </form>
          </section>

          <section className='spends flex-column'>
            <ul>
              {purchaseItems}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default PurchaseHistory;