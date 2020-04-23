import * as FavoriteAPIUTil from '../util/favorite_api_util';

export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';

const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

export const createFavorite = favorite => dispatch => {
  return FavoriteAPIUTil.createFavorite(favorite)
    .then(favorite => dispatch(receiveFavorite(favorite)));
}