import { RECEIVE_FAVORITE } from '../actions/favorite_actions';

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FAVORITE:
      return action.favorite;
    default:
      return state;
  }
}

export default favoritesReducer;