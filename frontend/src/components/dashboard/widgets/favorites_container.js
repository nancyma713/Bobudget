import { connect } from 'react-redux';
import Favorites from './favorites';
import { fetchBobaItems } from '../../../actions/boba_item_actions';
import { fetchFavorites, createFavorite, removeFavorite } from '../../../actions/favorite_actions';
import { fetchUser } from "../../../actions/session_actions";

const mapStateToProps = state => {
  // let currentUser;
  // if (state.session.user.id) {
  //   currentUser = state.session.user;
  // } else {
  //   currentUser = state.session.user.data.user;
  // }

  return {
    bobas: state.entities.bobaItems,
    favorites: state.entities.favorites.data,
    currentUser: state.session.user
  }

};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
  fetchBobaItems: () => dispatch(fetchBobaItems()),
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  fetchFavorites: (userId) => dispatch(fetchFavorites(userId)),
  removeFavorite: (favoriteId) => dispatch(removeFavorite(favoriteId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);