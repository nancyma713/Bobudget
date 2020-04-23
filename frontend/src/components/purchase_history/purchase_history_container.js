import { connect } from 'react-redux';
import PurchaseHistory from './purchase_history';
import { fetchPurchases, removePurchase } from "../../actions/purchase_actions";
import { fetchUser, updateUser } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
  purchases: state.entities.purchases.data,
  // purchase: state.entities.purchases.data[ownProps.match.params.purchaseId],
  currentUser: state.session.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchPurchases: userId => dispatch(fetchPurchases(userId)),
  fetchUser: () => dispatch(fetchUser()),
  updateUser: (user) => dispatch(updateUser(user)),
  removePurchase: (purchaseId) => dispatch(removePurchase(purchaseId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseHistory);