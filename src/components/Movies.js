import React from 'react';

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            currentMovie: [],
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


    handleMovieChange = (event) => {
        this.setState({
            currentMovie: event.target.value
        })
    }



    render() {
    const allMovies = this.state.movies.map((movie, i) => {
        return <option key={i}>{movie.title}</option>
    })

    const currentMovie = this.state.movies.find((current) => {
        if (this.state.currentMovie === current.title) {
        return <div>{current.title} 
                    {current.release_date}
                    {current.description}
                    </div>
          }
        
    })


        return (
            <div className='movies'>
                <h1>Select a Movie</h1>
                <select onChange={this.handleMovieChange}>
                    <option></option>
                    {allMovies}
                </select>
                <p>{this.state.currentMovie}</p>
                
                </div>
        )
    }
}

export default Movies