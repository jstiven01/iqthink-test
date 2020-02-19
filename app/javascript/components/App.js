import React, { useState }  from 'react'
import { connect } from 'react-redux';
import { postMovie } from '../redux/movies/actions';


const App = ({movieData, postMovie}) => {
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
        console.log('before',form.movieId.toString())
        postMovie(form.movieId, form.name);
    }

    console.log(movieData)
    let jsxMovie = ''
    if (Object.keys(movieData.movie).length > 0){
      jsxMovie = ( 
        <div>
      <div> Title: {movieData.movie.original_title}</div>
      <div> Overview: {movieData.movie.overview}</div>
      <div> Relese date: {movieData.movie.release_date}</div>
      </div>  
      );
    }


    return (
        <div>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input type="number" name="movieId" placeholder="Enter Movie ID" onChange={handleChange}/>
        </div>
        <div className="form-group">
            <input type="text" name="name" placeholder="Enter name search" onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Create a Movie</button>
        </form>
        <div>{form.movieId}</div>
        <div>{form.name}</div>
        {jsxMovie}
            
        </div>
    )
}

const mapStateToProps = state => ({
  movieData: state.movie,
});
  
  const mapDispatchToProps = dispatch => ({
    postMovie: (movieId, name) => dispatch(postMovie(movieId, name)),
  });


export default connect(mapStateToProps, mapDispatchToProps)(App);