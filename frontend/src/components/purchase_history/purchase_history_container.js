import { connect } from 'react-redux';
import PurchaseHistory from './purchase_history';
import { fetchPurchases } from '../../actions/purchase_actions';

const mapStateToProps = state => ({
  purchases: state.entities.purchases
});

const mapDispatchToProps = dispatch => ({
  fetchPurchases: () => dispatch(fetchPurchases())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseHistory)