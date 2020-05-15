import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, DELETE_FAVORITE } from "../actions/favorite_actions";

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FAVORITES:
      return action.favorites;
    case RECEIVE_FAVORITE:
      nextState.data.push(action.favorite.data);
      return nextState;
    case DELETE_FAVORITE:
      delete nextState[action.favoriteId];
      return nextState;
    default:
      return state;
  }
}

export default favoritesReducer;