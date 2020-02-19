const initialState = {
    loading: false,
    movies: [],
    error: '',
  };
  
  const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'MOVIE_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_MOVIE_SUCCESS':
        return {
          loading: false,
          movies: action.payload,
          error: '',
        };
      case 'GET_MOVIE_FAILURE':
        return {
          loading: false,
          movies: [],
          error: action.payload,
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
        };
  
      default: return state;
    }
  };
  
  export default moviesReducer;