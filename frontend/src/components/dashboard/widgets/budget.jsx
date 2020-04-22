import React from 'react';
import { Link } from 'react-router-dom';

class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchPurchases();
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();
    let purchase = {
      price: this.state.price
    }
    debugger;
    this.props.createPurchase(purchase);
      // .then(() => this.props.history.push("/dashboard"))
  }

  update() {
    return e => this.setState({['price']: e.currentTarget.value})
  }

  render() {
    const { currentUser, purchases} = this.props;
    
    if (!currentUser) return null;
    if (!purchases) return null;

    let moneySpent = 0;

    for(let i = 0; i < purchases.length; i++) {
      moneySpent += purchases[i].price
    }

    let date = new Date();
    date = date.toDateString();

    return (
      <div className="budget flex-row space-around">
        <div className="flex-column">
          <div className="flex-row align-center">
            <h1>Monthly budget: </h1>
            <div className="price">$ {currentUser.user.budget}</div>
          </div>
          <div className="flex-row align-center">
            <h1>Money spent: </h1>
            <div className="price">$ {moneySpent}</div>
          </div>
        <div className="flex-row align-center">
          <h1>Amount left: </h1>
          <div className="price">$ {currentUser.user.budget}</div>
        </div>
        </div>
        <div className="flex-column jus-center">
          Add a purchase: {date}
          <form className="flex-row" onSubmit={this.handleSubmit}>
            <div className="pos-relative">
              <input
                className="budget-input"
                type="number"
                step="0.01"
                onChange={this.update()}
                value={this.state.price}
              />
              <button
                className="budget-button flex-row jus-center align-center"
                onSubmit={this.handleSubmit}
              >
                <i className="fas fa-plus-circle" />
              </button>
            </div>
          </form>
        </div>

        {/* <div className="budget-bottom-right">
          <Link to="/purchases">Purchase History</Link>
        </div> */}
      </div>
    );
  }
}

export default Budget;