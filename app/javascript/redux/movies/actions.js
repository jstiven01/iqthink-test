import axios from 'axios';

const processingDataSearch = (movieArray) => {
  let newMovieArray = []
  console.log('moviearra',movieArray)
  movieArray.forEach(element => {
    const {id, original_title, overview, poster_path, vote_count, release_date} = element
    newMovieArray.push({id, original_title, overview, poster_path, vote_count, release_date})
    console.log(newMovieArray[0], element,'a')
  });
  return newMovieArray
}

export const movieRequest = () => ({
  type: 'MOVIE_REQUEST',
});

export const getMoviesSuccess = movie => ({
  type: 'GET_MOVIE_SUCCESS',
  payload: movie,
});

export const getMoviesFailure = error => ({
  type: 'GET_MOVIE_FAILURE',
  payload: error,
});

export const postMoviesSuccess = message => ({
  type: 'POST_MOVIE_SUCCESS',
  payload: message,
});

export const postMoviesFailure = error => ({
  type: 'POST_MOVIE_FAILURE',
  payload: error,
});



export const postMovie = ( movieId) => dispatch => {
    console.log('post ', movieId)
  dispatch(movieRequest());
  axios
    .get(
      `http://api.themoviedb.org/3/movie/${movieId}`,
      {
          params: {
              api_key: "0ff5b80581bf1b540b658c2d699cc617"
            }
      },
      { withCredentials: true },
    )
    .then(response => {
      const {id, original_title, overview, poster_path, vote_count, release_date} = response.data;
      dispatch(getMoviesSuccess([{id,original_title, overview, poster_path, vote_count, release_date}]))
      console.log('heyyy', original_title, overview, poster_path, vote_count, release_date )
      dispatch(postMovieBackend( original_title, overview, poster_path, vote_count, release_date))

    })
    .catch(error => {
      // error.message is the error message
      dispatch(getMoviesFailure(error.message));
    });

};

export const postMovieBackend = (title, overview, posterPath, voteCount, releaseDate) => dispatch => {
  dispatch(movieRequest());
  axios
  .post(
    '/movies',
    {
      title,
      overview,
      votes: voteCount,
      poster_url: posterPath,
      release_date: releaseDate
    },
    { withCredentials: true },
  )
  .then(response => {
    dispatch(postMoviesSuccess(response.statusText));
  })  
  .catch(error => {
    // error.message is the error message
    dispatch(postMoviesFailure(error.message));
  });
}

export const searchMovies = (name) => dispatch => {
  dispatch(movieRequest());
  axios
  .get(
    'https://api.themoviedb.org/3/search/movie',
    {
        params: {
            api_key: "0ff5b80581bf1b540b658c2d699cc617",
            query: name,
          }
    },
    { withCredentials: true },
  )
  .then(response => {
    //const {original_title, overview, poster_path, vote_count, release_date} = response.data;
    //dispatch(getMoviesSuccess({original_title, overview, poster_path, vote_count, release_date}))
    //console.log('heyyy search movies', response)
    dispatch(getMoviesSuccess(processingDataSearch(response.data.results)));
    //dispatch(postMovieBackend( original_title, overview, poster_path, vote_count, release_date))

  })
  .catch(error => {
    // error.message is the error message
    dispatch(getMoviesFailure(error.message));
  });

}

