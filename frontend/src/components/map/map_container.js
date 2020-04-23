import { connect } from 'react-redux';
import { fetchStores } from '../../actions/store_actions';
// import { Map, GoogleApiWrapper } from "google-maps-react";
import Map from './map';

const mapStateToProps = state => ({
    stores: state.entities.store
});

const mapDispatchToProps = dispatch => ({
    fetchStores: () => dispatch(fetchStores()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Map);

