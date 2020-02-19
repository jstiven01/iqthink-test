import axios from 'axios';


export const searchRequest = () => ({
  type: 'SEARCH_REQUEST',
});

export const getSearchSuccess = search => ({
  type: 'GET_SEARCH_SUCCESS',
  payload: search,
});

export const getSearchFailure = error => ({
  type: 'GET_SEARCH_FAILURE',
  payload: error,
});

export const postSearchSuccess = message => ({
  type: 'POST_SEARCH_SUCCESS',
  payload: message,
});

export const postSearchFailure = error => ({
  type: 'POST_SEARCH_FAILURE',
  payload: error,
});

export const getResultSearch = (id) => dispatch => {
    dispatch(searchRequest());
    axios
    .get(
      `/searches/${id}`,
      { withCredentials: true },
    )
    .then(response => {
        console.log('search get response', response)
        dispatch(getSearchSuccess(response.data));
    })  
    .catch(error => {
      // error.message is the error message
      dispatch(getSearchFailure(error.message));
    });

} 


export const postSearch = (title, overview, voteCount) => dispatch => {
  dispatch(searchRequest());
  console.log('post search bef', title)
  axios
  .post(
    '/searches',
    {
      title,
      overview,
      votes: voteCount,
    },
    { withCredentials: true },
  )
  .then(response => {
      console.log('search post response', response.data.id)
      dispatch(getResultSearch(response.data.id))
  })  
  .catch(error => {
    // error.message is the error message
    dispatch(postSearchFailure(error.message));
  });
}


