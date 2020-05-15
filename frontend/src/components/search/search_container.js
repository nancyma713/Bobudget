import { connect } from "react-redux";
import Search from "./search";
import { fetchBobaItems, searchBobas } from "../../actions/boba_item_actions";
import { fetchFavorites, createFavorite, removeFavorite } from '../../actions/favorite_actions';

const msp = (state) => {
  return {
    bobas: state.entities.bobaItems,
    stores: state.entities.stores,
    currentUser: state.session.user,
    favorites: state.entities.favorites.data,
  };
};

const mdp = (dispatch) => ({
  fetchBobaItems: () => dispatch(fetchBobaItems()),
  searchBobas: (bobaName) => dispatch(searchBobas(bobaName)),
  fetchFavorites: userId => dispatch(fetchFavorites(userId)),
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  removeFavorite: (favoriteId) => dispatch(removeFavorite(favoriteId))
});

export default connect(msp, mdp)(Search);
