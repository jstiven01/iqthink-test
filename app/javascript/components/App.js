import React from 'react'
import Movies from './Movies'
import Search from './Search'



const App = () => {


    return (
        <div className="container">
        <h1 className="text-center">Movies Test</h1>
          <div className="row">
            <div className="col-6">
              <Movies />
            </div>
            <div className="col-6">
              <Search />
            </div>
        </div>

            
        </div>
    )
}




export default App;