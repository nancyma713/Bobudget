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
    this.props.fetchUser().then(() => this.setState({ budget: this.props.currentUser.data.user.budget }))
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
          <span>{newDateString}</span>: <span id='purchase-price'>${purchase.price}</span>
          <button value={purchase.id} onClick={this.handleDelete}>
            DELETE
        </button>
        </li>
      );
    });

    return (
      <div className="purchased-items center">
        <Link to="/dashboard"><i className="fas fa-chevron-left"></i> Back to Dashboard</Link>
        <h1>
          Purchase History for {month} {year}
        </h1>
        <section className='budget-updates'>
          <form onSubmit={this.handleSubmit}>
            <label className='update-budget'>
              Update your budget: $
              <input
                type="number"
                min="5.00"
                step="0.01"
                value={this.state.budget}
                onChange={this.update("budget")}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
        <section className='monthly-budget jus-center flex-row'>
          <h3>Monthly Budget: <span>${this.state.budget}</span></h3>
          <h3>Total Monthly Spend: <span>${totalSpend}</span></h3>
        </section>
        <section className='spends flex-column'>
          <h3>Current Purchases</h3>
          <ul className='purchase-list'>
            {purchaseItems}
          </ul>
        </section>
      </div>
    );
  }
}

export default PurchaseHistory;