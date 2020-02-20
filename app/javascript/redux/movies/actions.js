import axios from 'axios';

const processingDataSearch = movieArray => {
  const newMovieArray = [];
  movieArray.forEach(element => {
    const {
      /* eslint-disable camelcase */
      id, original_title, overview, poster_path, vote_count, release_date,
    } = element;
    newMovieArray.push({
      id, original_title, overview, poster_path, vote_count, release_date,
    });
  });
  return newMovieArray;
};

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

export const postMovieBackend = (title, overview,
  posterPath, voteCount, releaseDate, mdbId) => dispatch => {
  dispatch(movieRequest());
  axios
    .post(
      '/movies',
      {
        movie: {
          title,
          overview,
          votes: voteCount,
          poster_url: posterPath,
          release_date: releaseDate,
          mdb_id: mdbId,
        },

      },
    )
    .then(response => {
      dispatch(postMoviesSuccess(response.statusText));
    })
    .catch(error => {
      // error.message is the error message
      dispatch(postMoviesFailure(error.response.data.message));
    });
};


export const postMovie = movieId => dispatch => {
  dispatch(movieRequest());
  axios
    .get(
      `http://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: '0ff5b80581bf1b540b658c2d699cc617',
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      const {
        /* eslint-disable camelcase */
        id, original_title, overview, poster_path, vote_count, release_date,
      } = response.data;
      dispatch(getMoviesSuccess([{
        id, original_title, overview, poster_path, vote_count, release_date,
      }]));
      dispatch(postMovieBackend(original_title,
        overview, poster_path,
        vote_count, release_date, id));
    })
    .catch(error => {
      // error.message is the error message
      dispatch(getMoviesFailure(error.response.data.status_message));
    });
};


export const searchMovies = name => dispatch => {
  dispatch(movieRequest());
  axios
    .get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params: {
          api_key: '0ff5b80581bf1b540b658c2d699cc617',
          query: name,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      dispatch(getMoviesSuccess(processingDataSearch(response.data.results)));
    })
    .catch(error => {
    // error.message is the error message
      dispatch(getMoviesFailure(error.message));
    });
};
