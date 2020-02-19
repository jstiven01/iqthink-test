import React, { useState }  from 'react'
import { connect } from 'react-redux';
import { postSearch} from '../redux/searches/actions';

const Search = ({searchData, postSearch}) => {

    const [form, setState] = useState({
        title: '',
        overview: '',
        votes: '',

      });

    const handleChange = (event) => {
        setState({
            ...form,
            [event.target.name]: event.target.value
          });
    }

    const handleSubmit = (event) => {
        console.log(event)
        event.preventDefault()
        postSearch(form.title, form.overview, form.votes)
        
    }

    console.log('search data',searchData)
    const jsxSearchData = searchData.search.map(sch => (
        <div key={sch.id}>
          <div>Title: {sch.title}</div>
          <div>Overview: {sch.overview}</div>
          <div>Votes: {sch.votes}</div>

        </div>
    ))
    return (
        <div>
            <div>Local Search</div>
            <form  onSubmit={handleSubmit}>   
                <div className="form-group">
                    <input type="text" name="title" placeholder="Enter movie's title to search" onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <input type="text" name="overview" placeholder="Enter movie's overview to search" onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <input type="number" name="votes" placeholder="Enter votes to search" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Search in Rails Database</button>
            </form>
            {jsxSearchData}
        </div>
    )
}

const mapStateToProps = state => ({
    searchData: state.search,
  });

const mapDispatchToProps = dispatch => ({
    postSearch: (title, overview, votes) => dispatch(postSearch(title,overview,votes)),
  })

export default connect(mapStateToProps, mapDispatchToProps)(Search)