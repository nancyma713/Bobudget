import { combineReducers } from 'redux';
import bobaItemsReducer from './boba_items_reducer';

export default combineReducers({
  bobaItems: bobaItemsReducer
});