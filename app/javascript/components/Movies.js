import React, { useState }  from 'react'
import { connect } from 'react-redux';
import { postMovie, searchMovies} from '../redux/movies/actions';


const Movies = ({moviesData, postMovie, searchMovies}) => {
    const [form, setState] = useState({
        movieId: '',
        name: '',

      });

    const handleChange = (event) => {
        setState({
            ...form,
            [event.target.name]: event.target.value
          });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('before',event.target.id)
        if(event.target.id === 'form-movie-id'){
          postMovie(form.movieId);
        }else {
          searchMovies(form.name)
          console.log('search name')
        }
    }

    const handleClick = (event) => {
      setState({
        ...form,
        name: ''
      });
      postMovie(event.target.id)

    }

    console.log(moviesData)
    const jsxMovie = moviesData.movies.map(movie => (
      <div key={movie.id}>
        <div>title: {movie.original_title}</div>
        { form.name!=='' ? <button onClick={handleClick} type="button" className="btn btn-primary" id={movie.id}>Add Movie</button> : null }
      </div>
    ))


    return (
        <div>
        <form onSubmit={handleSubmit} id="form-movie-id">
        <div>Add a movie with Movie ID</div>
        <div className="form-group">
            <input type="number" name="movieId" placeholder="Enter Movie ID" onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Create a Movie</button>
        </form>

        <form onSubmit={handleSubmit} id="form-name-search">
        <div>Adding  by name search</div>
        <div className="form-group">
            <input type="text" name="name" placeholder="Enter name search" onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Search in Movie Database API</button>
        </form>

        {jsxMovie}
            
        </div>
    )
}

const mapStateToProps = state => ({
  moviesData: state.movies,
});
  
  const mapDispatchToProps = dispatch => ({
    postMovie: (movieId) => dispatch(postMovie(movieId)),
    searchMovies: (name) => dispatch(searchMovies(name)),
  });


export default connect(mapStateToProps, mapDispatchToProps)(Movies);