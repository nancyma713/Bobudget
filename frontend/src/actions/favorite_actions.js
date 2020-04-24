import * as FavoriteAPIUTil from '../util/favorite_api_util';

export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

const receiveFavorites = (favorites) => ({
  type: RECEIVE_FAVORITES,
  favorites,
});

const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

const deleteFavorite = (favoriteId) => ({
  type: DELETE_FAVORITE,
  favoriteId,
});

export const fetchFavorites = userId => dispatch => {
  return FavoriteAPIUTil.fetchFavorites(userId).then((favorites) =>
    dispatch(receiveFavorites(favorites))
  );
}

export const createFavorite = favorite => dispatch => {
  return FavoriteAPIUTil.createFavorite(favorite)
    .then(favorite => dispatch(receiveFavorite(favorite)));
}

export const removeFavorite = favoriteId => dispatch => {


  return FavoriteAPIUTil.removeFavorite(favoriteId).then(() =>
    dispatch(deleteFavorite(favoriteId))
  );
}