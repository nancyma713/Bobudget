import { connect } from "react-redux";
import { createPurchase } from "../../../../actions/purchase_actions";
import { fetchUser } from "../../../../actions/session_actions";
import BudgetCalc from "./budget_calc";

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  purchases: state.entities.purchases.data,
});


const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  createPurchase: (purchase) => dispatch(createPurchase(purchase)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetCalc);