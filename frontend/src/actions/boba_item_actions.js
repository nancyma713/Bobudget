import * as BobaItemAPIUtil from '../util/boba_item_api_util';

export const RECEIVE_BOBA_ITEMS = 'RECEIVE_BOBA_ITEMS';
export const RECEIVE_BOBA_ITEM = 'RECEIVE_BOBA_ITEM';

const receiveBobaItems = bobas => ({
  type: RECEIVE_BOBA_ITEMS,
  bobas
});

const receiveBobaItem = boba => ({
  type: RECEIVE_BOBA_ITEM, 
  boba
});

export const fetchBobaItems = () => dispatch => {
  return BobaItemAPIUtil.fetchBobaItems()
    .then(bobas => dispatch(receiveBobaItems(bobas)))
}

export const fetchBobaItem = bobaItemId => dispatch => {
  return BobaItemAPIUtil.fetchBobaItem(bobaItemId)
    .then(boba => dispatch(receiveBobaItem(boba)))
}

export const createBobaItem = bobaItem => dispatch => {
  return BobaItemAPIUtil.createBobaItem(bobaItem)
    .then(boba => dispatch(receiveBobaItem(boba)))
}

