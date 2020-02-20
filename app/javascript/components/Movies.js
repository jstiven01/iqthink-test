import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postMovie, searchMovies } from '../redux/movies/actions';


const Movies = ({ moviesData, postMovie, searchMovies }) => {
  const [form, setState] = useState({
    movieId: '',
    name: '',

  });

  const handleChange = event => {
    setState({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (event.target.id === 'form-movie-id') {
      postMovie(form.movieId);
    } else {
      searchMovies(form.name);
    }
  };

  const handleClick = event => {
    setState({
      ...form,
      name: '',
    });
    postMovie(event.target.id);
  };

  const jsxMovie = moviesData.movies.map(movie => (
    <div key={movie.id} className="card flex-row justify-content-between">
      <div className="card-title">
        Title:
        {movie.original_title}
      </div>
      { form.name !== '' ? <div className="card-link"><button onClick={handleClick} type="button" className="btn btn-primary" id={movie.id}>Add Movie</button></div> : null }
    </div>
  ));

  const jsxErrorMessage = moviesData.error !== '' ? <div className="alert-info">{moviesData.error}</div> : null;
  const jsxMessage = moviesData.message !== '' ? (
    <div className="alert-info">
      <span>Movie </span>
      {moviesData.message}
    </div>
  ) : null;


  return (
    <div>
      <form onSubmit={handleSubmit} id="form-movie-id">
        <div>Add a movie with Movie ID</div>
        <div className="form-group">
          <input type="number" name="movieId" placeholder="Enter Movie ID" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Create a Movie</button>
      </form>

      <form onSubmit={handleSubmit} id="form-name-search">
        <div>Adding  by name search</div>
        <div className="form-group">
          <input type="text" name="name" placeholder="Enter name search" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Search in Movie Database API</button>
      </form>


      {jsxErrorMessage}
      {jsxMessage || jsxMovie}

    </div>
  );
};

const mapStateToProps = state => ({
  moviesData: state.movies,
});

const mapDispatchToProps = dispatch => ({
  postMovie: movieId => dispatch(postMovie(movieId)),
  searchMovies: name => dispatch(searchMovies(name)),
});

Movies.propTypes = {
  moviesData: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
    message: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.shape({
      original_title: PropTypes.string,
    })).isRequired,
  }).isRequired,
  postMovie: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Movies);
