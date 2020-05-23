import { RECEIVE_CURRENT_USER, RECEIVE_USER_SIGN_IN, RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const initialState = {
  isAuthenticated: false,
  user: {}
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let user = action.currentUser;

      if (action.currentUser.data) {
        const { _id, username, firstName, lastName, budget, zipcode } = action.currentUser.data;

        user = {
          id: _id,
          username,
          firstName,
          lastName,
          budget,
          zipcode
        }
      }

      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user,
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      };
    default:
      return state;
  }
}

export default sessionReducer;