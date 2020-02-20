const initialState = {
  loading: false,
  search: [],
  error: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_SEARCH_SUCCESS':
      return {
        loading: false,
        search: action.payload,
        error: '',
      };
    case 'GET_SEARCH_FAILURE':
      return {
        loading: false,
        search: [],
        error: action.payload,
      };

    case 'POST_SEARCH_SUCCESS':
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case 'POST_SEARCH_FAILURE':
      return {
        loading: false,
        search: [],
        error: action.payload,
      };

    default: return state;
  }
};

export default searchReducer;
