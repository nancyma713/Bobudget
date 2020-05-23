import { connect } from "react-redux";
import { fetchBobaItems, searchBobas } from "../../actions/boba_item_actions";
import { fetchFavorites, createFavorite, removeFavorite } from "../../actions/favorite_actions";
import Search from "./search";

const mapStateToProps = (state) => ({
  currentUser: state.session.user,
  bobas: state.entities.bobaItems,
  favorites: state.entities.favorites.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBobaItems: () => dispatch(fetchBobaItems()),
  searchBobas: (bobaName) => dispatch(searchBobas(bobaName)),
  fetchFavorites: (userId) => dispatch(fetchFavorites(userId)),
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  removeFavorite: (favoriteId) => dispatch(removeFavorite(favoriteId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
