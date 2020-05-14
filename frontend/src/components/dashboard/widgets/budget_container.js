import { connect } from 'react-redux';
import Budget from './budget';
import { createPurchase, fetchPurchases } from '../../../actions/purchase_actions';
import { fetchUser } from '../../../actions/session_actions';

const mapStateToProps = state => {

  // let currentUser;
  // if (state.session.user.id) {
  //   currentUser = state.session.user;
  // } else {
  //   currentUser = state.session.user.data.user;
  // }

  return {
    currentUser: state.session.user,
    purchases: state.entities.purchases.data
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  createPurchase: purchase => dispatch(createPurchase(purchase)),
  // fetchPurchases: userId => dispatch(fetchPurchases(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Budget);