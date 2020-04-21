import { RECEIVE_BOBA_ITEMS, RECEIVE_BOBA_ITEM } from '../actions/boba_item_actions';

const bobaItemReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOBA_ITEMS: 
      return action.bobas;
    case RECEIVE_BOBA_ITEM:
      return action.boba;
    default: 
      return state;
  };
}

export default bobaItemReducer;