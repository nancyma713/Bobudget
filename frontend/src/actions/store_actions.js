import * as StoreAPIUtil from "../util/store_api_util";

export const RECEIVE_STORES = "RECEIVE_STORES";
export const RECEIVE_STORE = "RECEIVE_STORE";

const receiveStores = (stores) => ({
  type: RECEIVE_STORES,
  stores,
});

const receiveStore = (store) => ({
  type: RECEIVE_STORE,
  store,
});

export const fetchStores = () => (dispatch) => {
  return StoreAPIUtil.fetchStores().then((stores) => 
    dispatch(receiveStores(stores))
  );
}

export const fetchStore = (storeId) => (dispatch) => {
  return StoreAPIUtil.fetchStore(storeId).then((store) => 
    dispatch(receiveStore(store))
  );
}