import { connect } from 'react-redux';
import Budget from './budget';
import { createPurchase, fetchPurchases } from '../../../actions/purchase_actions';
import { fetchUser } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.user.data,
  purchases: state.entities.purchases.data
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  createPurchase: purchase => dispatch(createPurchase(purchase)),
  fetchPurchases: () => dispatch(fetchPurchases())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Budget);