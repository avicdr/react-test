import axios from 'axios';

const ACCESS_KEY = 'xNGsggNybLuR65vRzC2yZisMvAqIq-lZiOWKJgsoTE4';
const PER_PAGE = 10;

export const fetchPhotosRequest = () => {
  return {
    type: 'FETCH_PHOTOS_REQUEST',
  };
};

export const fetchPhotosSuccess = (photos) => {
  return {
    type: 'FETCH_PHOTOS_SUCCESS',
    payload: photos,
  };
};

export const fetchPhotosFailure = (error) => {
  return {
    type: 'FETCH_PHOTOS_FAILURE',
    payload: error,
  };
};

export const fetchPhotos = (page) => {
  return (dispatch) => {
    dispatch(fetchPhotosRequest());
    axios
      .get(
        `https://api.unsplash.com/photos?page=${page}&per_page=${PER_PAGE}&client_id=${ACCESS_KEY}`
      )
      .then((response) => {
        dispatch(fetchPhotosSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPhotosFailure(error.message));
      });
  };
};
