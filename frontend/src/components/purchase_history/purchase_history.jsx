import React from "react";
import "../../assets/stylesheets/purchases.scss";

class PurchaseHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: "",
      price: "",
      error1: false,
      error2: false,
    };

    this.handleBudget = this.handleBudget.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser().then(() => 
      this.setState({ budget: this.props.currentUser.budget })
    );

    this.props.fetchPurchases(this.props.currentUser.id);
  }

  handleBudget(e) {
    e.preventDefault();

    if (this.state.budget === "") {
      this.setState({ error2: true })
    } else {
      let user = this.props.currentUser;
      user.budget = this.state.budget;
  
      this.props.updateUser(user).then(() => 
        this.props.fetchUser()).then(() => 
        this.setState({ error2: false })
      );
    }
  }

  handlePurchase(e) {
    e.preventDefault();

    if (this.state.price === "") {
      this.setState({ error1: true })
    } else {
      let purchase = {
        price: this.state.price
      }
  
      this.props.createPurchase(purchase).then(() => 
        this.setState({ 
          price: "",
          error1: false,
        })
      );
    }
  }

  handleDelete(e) {
    e.preventDefault();

    this.props.removePurchase(e.currentTarget.value).then(() => 
      this.props.fetchPurchases(this.props.currentUser.id)
    );
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { currentUser, purchases } = this.props;

    if (!purchases) return null;

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
          <span className="purchase-date">{newDateString}</span>
          <div className="purchase-price">${purchase.price}</div>
          <button value={purchase.id} onClick={this.handleDelete}>
            <i className="fas fa-times"></i>
        </button>
        </li>
      );
    });

    return (
      <div id="purchased-items" className="center">
        <h1>{currentUser.firstName}'s {month} {year} Purchase History</h1>

        <div id="purchase-split">
          <section id="purchase-info">

            <div className="budget-orb">
              <h3>Monthly Budget:</h3>
              <p>$ {currentUser.budget}</p>
            </div>

            <div className="budget-orb">
              <h3>Monthly Spend: </h3>
              <p>$ {totalSpend}</p>
            </div>

            <form id="update-budg-form" onSubmit={this.handleBudget}>
              <label>Update budget:</label>
              <div id="b-dollar">$</div>

              <input
                className={this.state.error2 ? "red" : "none"}
                type="number"
                min="5.00"
                step="0.01"
                value={this.state.budget}
                onChange={this.update("budget")}
              />

              <div id="b-desc">a month on boba</div>

              <button type="submit"><i className="fas fa-check"></i></button>
            </form>
          </section>

          <section className="flex-column width-100">
            <form id="p-add-purchase" onSubmit={this.handlePurchase}>
              <span className="purchase-date">{newDate.toDateString()}</span>
              <div className="purchase-price">
                $ <input
                type="number"
                step="0.01"
                value={this.state.price}
                onChange={this.update("price")}
                />
              </div>

              <button>Add a Purchase</button>
              <div id={this.state.error1 ? "hist-budg-err" : "none"}>
                <i onClick={() => this.setState({ error1: false })} className="fas fa-times"></i>
              Please enter a purchase!
              </div>
            </form>
            
            <ul id="all-purchases">
              {purchaseItems}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default PurchaseHistory;