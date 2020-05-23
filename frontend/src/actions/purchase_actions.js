import * as PurchaseAPIUtil from "../util/purchase_api_util";

export const RECEIVE_PURCHASES = "RECEIVE_PURCHASES";
export const RECEIVE_PURCHASE = "RECEIVE_PURCHASE";
export const DELETE_PURCHASE = "DELETE_PURCHASE";

const receivePurchases = (purchases) => ({
  type: RECEIVE_PURCHASES,
  purchases,
});

const receivePurchase = (purchase) => ({
  type: RECEIVE_PURCHASE,
  purchase,
});

const deletePurchase = (purchaseId) => ({
  type: DELETE_PURCHASE,
  purchaseId,
});

export const fetchPurchases = (userId) => (dispatch) => {
  return PurchaseAPIUtil.fetchPurchases(userId).then((purchases) => 
    dispatch(receivePurchases(purchases))
  );
}

export const createPurchase = (data) => (dispatch) => {
  return PurchaseAPIUtil.createPurchase(data).then((purchase) => 
    dispatch(receivePurchase(purchase))
  );
}

export const removePurchase = (purchaseId) => (dispatch) => {
  return PurchaseAPIUtil.removePurchase(purchaseId).then(() => 
    dispatch(deletePurchase(purchaseId))
  );
}