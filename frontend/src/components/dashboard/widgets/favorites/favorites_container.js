import { connect } from 'react-redux';
import Favorites from './favorites';
import { fetchFavorites, createFavorite, removeFavorite } from '../../../../actions/favorite_actions';

const mapStateToProps = state => {
  return {
    bobas: state.entities.bobaItems,
    favorites: state.entities.favorites.data,
    currentUser: state.session.user
  }
};

const mapDispatchToProps = (dispatch) => ({
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  fetchFavorites: (userId) => dispatch(fetchFavorites(userId)),
  removeFavorite: (favoriteId) => dispatch(removeFavorite(favoriteId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);