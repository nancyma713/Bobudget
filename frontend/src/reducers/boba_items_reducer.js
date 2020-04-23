import {
  RECEIVE_BOBA_ITEMS,
  RECEIVE_BOBA_ITEM,
  SEARCH_BOBA_ITEMS,
} from "../actions/boba_item_actions";

const bobaItemsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOBA_ITEMS:
      return action.bobas;
    case RECEIVE_BOBA_ITEM:
      return action.boba;
    case SEARCH_BOBA_ITEMS:
      return action.items;
    default:
      return state;
  }
};

export default bobaItemsReducer;
