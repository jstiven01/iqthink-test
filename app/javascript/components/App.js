import React from 'react'

const App = () => {

    return (
        <div>
        <form>
        <div className="form-group">
            <input type="number" name="movieId" placeholder="Enter Movie ID"/>
        </div>
        <div className="form-group">
            <input type="text" name="name" placeholder="Enter name search"/>
        </div>
        <button type="submit" className="btn btn-primary">Create a Movie</button>
        </form>
            
        </div>
    )
}

export default App