import React from 'react';

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        }
    }


    fetchMovies = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                movies: data,
            })
        })
    }


    componentDidMount = () => {
        this.fetchMovies();
    }




    render() {
    const allMovies = this.state.movies.map((movie, i) => {
        return <option key={i}>{movie.title}</option>
    })

        return (
            <div className='movies'>
                <h1>Select a Movie</h1>
                <select>
                    <option></option>
                    {allMovies}
                </select>
                </div>
        )
    }
}

export default Movies