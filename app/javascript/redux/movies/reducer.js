const initialState = {
    loading: false,
    movie: {},
    error: '',
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'MOVIE_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_MOVIE_SUCCESS':
        return {
          loading: false,
          movie: action.payload,
          error: '',
        };
      case 'GET_MOVIE_FAILURE':
        return {
          loading: false,
          movie: [],
          error: action.payload,
        };
  
      case 'POST_MOVIE_SUCCESS':
        return {
          loading: false,
          movie: [...state.movie, action.payload],
          error: '',
        };
      case 'POST_MOVIE_FAILURE':
        return {
          loading: false,
          movie: [],
          error: action.payload,
        };
  
      default: return state;
    }
  };
  
  export default movieReducer;