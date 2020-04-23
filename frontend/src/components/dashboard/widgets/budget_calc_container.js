import { connect } from 'react-redux';
import BudgetCalc from './budget_calc';
import { createPurchase, fetchPurchases } from '../../../actions/purchase_actions';
import { fetchUser } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.user,
  purchases: state.entities.purchases.data
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  createPurchase: purchase => dispatch(createPurchase(purchase)),
  fetchPurchases: userId => dispatch(fetchPurchases(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetCalc);