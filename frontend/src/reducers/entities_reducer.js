import { combineReducers } from 'redux';
import bobaItemsReducer from './boba_items_reducer';
import storesReducer from './stores_reducer';

export default combineReducers({
  bobaItems: bobaItemsReducer,
  stores: storesReducer
});