const initialState = {
    loading: false,
    photos: [],
    error: '',
    page: 1
  };
  
  const photosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PHOTOS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_PHOTOS_SUCCESS':
        return {
          ...state,
          loading: false,
          photos: [...state.photos, ...action.payload],
          error: '',
        };
      case 'FETCH_PHOTOS_FAILURE':
        return {
          ...state,
          loading: false,
          photos: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default photosReducer;