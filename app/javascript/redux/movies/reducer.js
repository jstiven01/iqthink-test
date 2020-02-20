const initialState = {
  loading: false,
  movies: [],
  error: '',
  message: '',
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVIE_REQUEST':
      return {
        ...state,
        loading: true,
        error: '',
        message: '',
      };
    case 'GET_MOVIE_SUCCESS':
      return {
        loading: false,
        movies: action.payload,
        error: '',
        message: '',
      };
    case 'GET_MOVIE_FAILURE':
      return {
        loading: false,
        movies: [],
        error: action.payload,
        message: '',
      };

    case 'POST_MOVIE_SUCCESS':
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case 'POST_MOVIE_FAILURE':
      return {
        loading: false,
        movies: [],
        error: action.payload,
        message: '',
      };

    default: return state;
  }
};

export default moviesReducer;
