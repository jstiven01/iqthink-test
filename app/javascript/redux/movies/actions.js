import axios from 'axios';

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

export const postMoviesSuccess = movie => ({
  type: 'POST_MOVIE_SUCCESS',
  payload: movie,
});

export const postMoviesFailure = error => ({
  type: 'POST_MOVIE_FAILURE',
  payload: error,
});



export const postMovie = ( movieId, name) => dispatch => {
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
      const {original_title, overview, poster_path, vote_count, release_date} = response.data;
      dispatch(getMoviesSuccess({original_title, overview, poster_path, vote_count, release_date}))
      console.log('heyyy', original_title, overview, poster_path, vote_count, release_date )

    })
    .catch(error => {
      // error.message is the error message
      //dispatch(getMoviesFailure(error.message));
    });

  /* dispatch(movieRequest());
  axios
    .post(
      '/movie',
      {
        name,
        units,
        date_progress: dateProgress,
        total_nutrient: totalMovie,

      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      const movie = response.data;
      dispatch(postMoviesSuccess(movie));
    })  dispatch(getMovie(movieId, name));
atch(postMoviesFailure(error.message));
    }); */
};

