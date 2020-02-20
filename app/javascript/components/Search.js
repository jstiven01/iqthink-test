import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postSearch } from '../redux/searches/actions';

const Search = ({ searchData, postSearch }) => {
  const [form, setState] = useState({
    title: '',
    overview: '',
    votes: '',
    filterDate: '',
    startDate: '',
    finalDate: '',

  });

  const handleChange = event => {
    setState({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    postSearch(form.title, form.overview,
      form.votes, form.filterDate,
      form.startDate, form.finalDate);
  };

  const jsxSearchData = searchData.search.map(sch => (
    <div key={sch.id} className="card">
      <div className="card-body">
        <div className="card-title">
          Title:
          {sch.title}
        </div>
        <div className="card-text">
          Overview:
          {sch.overview}
        </div>
        <div>
          Votes:
          {sch.votes}
        </div>
        <div>
          Release Date :
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
          }).format(new Date(sch.release_date)).replace(',', '')}
        </div>

      </div>


    </div>
  ));

  const jsxCustomRange = (
    <div>
      <div>
        Start Date
        <input type="date" id="start" name="startDate" onChange={handleChange} required />
      </div>
      <div>
        Final Date
        <input type="date" id="start" name="finalDate" onChange={handleChange} required />
      </div>
    </div>
  );

  return (
    <div>
      <div>Local Search</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="title" placeholder="Enter movie's title to search" onChange={handleChange} />
        </div>

        <div className="form-group">
          <input type="text" name="overview" placeholder="Enter movie's overview to search" onChange={handleChange} />
        </div>

        <div className="form-group">
          <input type="number" name="votes" placeholder="Enter votes to search" onChange={handleChange} />
        </div>
        <div>Release Date Filter</div>
        <div className="form-group">
          <div>Tomorrow</div>
          <input type="radio" value="tomorrow" name="filterDate" onChange={handleChange} />
        </div>
        <div className="form-group">
          <div>Next Week</div>
          <input type="radio" value="nextWeek" name="filterDate" onChange={handleChange} />
        </div>
        <div className="form-group">
          <div>Next Month</div>
          <input type="radio" value="nextMonth" name="filterDate" onChange={handleChange} />
        </div>
        <div className="form-group">
          <div>Custom Range</div>
          <input type="radio" value="customRange" name="filterDate" onChange={handleChange} />
          {form.filterDate === 'customRange' ? jsxCustomRange : null }
        </div>
        <button type="submit" className="btn btn-primary">Search in Rails Database</button>
      </form>
      {jsxSearchData}

    </div>
  );
};

const mapStateToProps = state => ({
  searchData: state.search,
});

const mapDispatchToProps = dispatch => ({
  postSearch: (title, overview,
    votes, filter, startDate, finalDate) => dispatch(postSearch(title, overview, votes,
    filter, startDate, finalDate)),
});

Search.propTypes = {
  searchData: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
    message: PropTypes.string,
    search: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
    })).isRequired,
  }).isRequired,
  postSearch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
