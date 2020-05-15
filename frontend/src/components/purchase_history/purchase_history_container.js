import { connect } from 'react-redux';
import PurchaseHistory from './purchase_history';
import { fetchPurchases, removePurchase, createPurchase } from "../../actions/purchase_actions";
import { fetchUser, updateUser } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  purchases: state.entities.purchases.data,
  currentUser: state.session.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchPurchases: userId => dispatch(fetchPurchases(userId)),
  fetchUser: () => dispatch(fetchUser()),
  updateUser: (user) => dispatch(updateUser(user)),
  createPurchase: purchase => dispatch(createPurchase(purchase)),
  removePurchase: (purchaseId) => dispatch(removePurchase(purchaseId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseHistory);