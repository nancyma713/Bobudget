import { connect } from 'react-redux';
import Favorites from './favorites';
import { fetchBobaItems } from '../../../actions/boba_item_actions';
import { fetchFavorites, createFavorite, removeFavorite } from '../../../actions/favorite_actions';

const mapStateToProps = state => ({
  bobas: state.entities.bobaItems,
  currentUser: state.session.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchBobaItems: () => dispatch(fetchBobaItems()),
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  fetchFavorites: () => dispatch(fetchFavorites()),
  removeFavorite: (favoriteId) => dispatch(removeFavorite(favoriteId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);