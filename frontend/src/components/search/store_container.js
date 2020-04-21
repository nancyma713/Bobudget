import { connect } from 'react-redux';
import Store from './store';
import { fetchStores, fetchStore } from '../../actions/store_actions';
// import { fetchStoreBobaItems, fetchStoreBobaItem } from '../../actions/store_boba_item_actions';

const mapStateToProps = state = ({
    stores: state.entities.stores
});

const mapDispatchToProps = dispatch => ({
    fetchStores: () => dispatch(fetchStores()),
    fetchStore: (storeId) => dispatch(fetchStore(storeId)),
    // fetchStoreBobaItems: () => dispatch(fetchStoreBobaItems()),
    // fetchStoreBobaItem: (storeBobaItemId) => dispatch(fetchStoreBobaItem(storeBobaItemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Store);