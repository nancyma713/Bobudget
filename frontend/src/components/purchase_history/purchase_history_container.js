import { connect } from "react-redux";
import { fetchPurchases, removePurchase, createPurchase } from "../../actions/purchase_actions";
import { fetchUser, updateUser } from "../../actions/session_actions";
import PurchaseHistory from "./purchase_history";

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  purchases: state.entities.purchases.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  updateUser: (user) => dispatch(updateUser(user)),
  fetchPurchases: (userId) => dispatch(fetchPurchases(userId)),
  createPurchase: (purchase) => dispatch(createPurchase(purchase)),
  removePurchase: (purchaseId) => dispatch(removePurchase(purchaseId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseHistory);