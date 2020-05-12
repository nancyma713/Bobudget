import {
    RECEIVE_PURCHASES,
    RECEIVE_PURCHASE,
    DELETE_PURCHASE,
} from "../actions/purchase_actions";

const purchasesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PURCHASES:
            return action.purchases;
        case RECEIVE_PURCHASE:
            // debugger
            let temp = {
                price: action.purchase.data.price,
                date: action.purchase.data.date,
                id: action.purchase.data._id
            };

            nextState.data.push(temp);
            return nextState;
        case DELETE_PURCHASE:
            delete nextState[action.purchaseId];
            return nextState;
        default:
            return state;
    }
}

export default purchasesReducer;