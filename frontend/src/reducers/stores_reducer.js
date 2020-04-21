import { RECEIVE_STORES, RECEIVE_STORE } from '../actions/store_actions';

const storesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_STORES:
            return action.stores;
        case RECEIVE_STORE:
            return action.store;
        default:
            return state;
    }
}

export default storesReducer;