import { connect } from 'react-redux';
import { fetchBobaItems, fetchBobaItem, createBobaItem } from '../../actions/boba_item_actions';
import BobaItem from './boba_item';

const mapStateToProps = state => ({
    bobaItems: state.entities.bobaItems
});

const mapDispatchToProps = dispatch => ({
    fetchBobaItems: () => dispatch(fetchBobaItems()),
    fetchBobaItem: bobaItemId => dispatch(fetchBobaItem(bobaItemId)),
    createBobaItem: bobaItem => dispatch(createBobaItem(bobaItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(BobaItem);