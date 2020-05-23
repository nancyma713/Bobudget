import React from "react";
import { Link } from "react-router-dom";
import Calculator from "./calculator";

class BudgetCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "",
      error: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.price === "") {
      this.setState({ error: true })
    } else {
      let purchase = {
        price: this.state.price
      }

      this.props.createPurchase(purchase).then(() =>
        this.setState({ price: "" })
      );
    }
  }

  update() {
    return (e) => this.setState({ price: e.currentTarget.value });
  }

  render() {
    const { currentUser, purchases } = this.props;

    if (!currentUser || !purchases) return null;

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

    let red = moneyLeft < 0 ? "red" : "green";

    return (
      <>
        <div id="budget" className="flex-column">
          <div id="budget-title">Add a Purchase</div>

          <form onSubmit={this.handleSubmit}>
            <div className="pos-relative">
              <input
                type="number"
                step="0.01"
                onChange={this.update("price")}
                value={this.state.price}
              />
              <button id="budget-button">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div id={this.state.error ? "dash-budg-err" : "none"}>
              <i onClick={() => this.setState({ error: false })} className="fas fa-times"></i>
              Please enter a purchase! 
            </div>
          </form>

          <div className="flex-row align-center pos-relative">
            <h1>Monthly budget: </h1>
            <div className="price">$ {currentUser.budget}</div>
          </div>

          <div className="flex-row align-center pos-relative">
            <h1>Money spent: </h1>
            <div className="price">$ {moneySpent}</div>
          </div>

          <div className='flex-row align-center pos-relative'>
            <h1>Amount left: </h1>
            <div className={`price ${red}`}>$ {moneyLeft}</div>
          </div>

          <Link className="center" to="/purchases">Purchase History</Link>
        </div>

        <div id="calculator">
          <Calculator moneyLeft={moneyLeft} />
        </div>
      </>
    );
  }
}

export default BudgetCalc;
