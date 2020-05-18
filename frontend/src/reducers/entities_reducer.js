import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import bobaItemsReducer from "./boba_items_reducer";
import purchasesReducer from "./purchases_reducer";
import favoritesReducer from "./favorites_reducer";

export default combineReducers({
  users: usersReducer,
  bobaItems: bobaItemsReducer,
  purchases: purchasesReducer,
  favorites: favoritesReducer,
});