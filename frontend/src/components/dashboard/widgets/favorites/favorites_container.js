import { connect } from "react-redux";
import { createFavorite, removeFavorite, fetchFavorites } from "../../../../actions/favorite_actions";
import Favorites from "./favorites";

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  bobas: state.entities.bobaItems,
  favorites: state.entities.favorites.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavorites: (userId) => dispatch(fetchFavorites(userId)),
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  removeFavorite: (favoriteId) => dispatch(removeFavorite(favoriteId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);