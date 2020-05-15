import { connect } from 'react-redux';
import BudgetCalc from './budget_calc';
import { createPurchase } from '../../../../actions/purchase_actions';
import { fetchUser } from '../../../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    purchases: state.entities.purchases.data
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  createPurchase: purchase => dispatch(createPurchase(purchase)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetCalc);