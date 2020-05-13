import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, DELETE_FAVORITE } from "../actions/favorite_actions";

const favoritesReducer = (state = {}, action) => {


  Object.freeze(state);
  let nextState = Object.assign({}, state);


  switch (action.type) {
    case RECEIVE_FAVORITES:
      return action.favorites;
    case RECEIVE_FAVORITE:

      // let temp = {
      //   bobaItemId: action.favorite.data.bobaItemId,
      //   userId: action.favorite.data.userId,
      //   _id: action.favorite.data._id
      // };

      // nextState.data.push(temp);
      return action.favorite.data;
    case DELETE_FAVORITE:


      delete nextState[action.favoriteId];
      return nextState;
    default:
      return state;
  }
}

export default favoritesReducer;