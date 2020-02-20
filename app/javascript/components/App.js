import React from 'react';
import Movies from './Movies';
import Search from './Search';


const App = () => (
  <div className="container">
    <div className="bg-dark">
      <h1 className="text-center text-light">Movies Test</h1>
    </div>
    <div className="row">
      <div className="col-6">
        <h2>Adding Movies</h2>
        <Movies />
      </div>
      <div className="col-6">
        <h2>Searching Movies</h2>
        <Search />
      </div>
    </div>


  </div>
);


export default App;
