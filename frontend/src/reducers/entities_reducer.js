import { combineReducers } from 'redux';
import bobaItemsReducer from './boba_items_reducer';
import storesReducer from './stores_reducer';
import purchasesReducer from './purchases_reducer';
import usersReducer from './users_reducer';
import favoritesReducer from './favorites_reducer';

export default combineReducers({
  users: usersReducer,
  bobaItems: bobaItemsReducer,
  stores: storesReducer,
  purchases: purchasesReducer,
  favorites: favoritesReducer
});