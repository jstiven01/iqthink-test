import React, { useState } from 'react';
import { connect } from 'react-redux';
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
    console.log(event);
    event.preventDefault();
    postSearch(form.title, form.overview, form.votes, form.filterDate, form.startDate, form.finalDate);
  };

  console.log('search data', searchData);
  const jsxSearchData = searchData.search.map(sch => (
    <div key={sch.id}>
      <div>
        Title:
        {sch.title}
      </div>
      <div>
        Overview:
        {sch.overview}
      </div>
      <div>
        Votes:
        {sch.votes}
      </div>
      <div>
        Release Date:
        {sch.release_date}
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
  postSearch: (title, overview, votes, filter, startDate, finalDate) => dispatch(postSearch(title, overview, votes, filter, startDate, finalDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
