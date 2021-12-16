import React from "react";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentMovie: [],
    };
  }

  fetchMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  handleMovieChange = (event) => {
    this.setState({
      currentMovie: event.target.value,
    });
  };

  render() {
    const allMovies = this.state.movies.map((movie, i) => {
      return <option key={i}>{movie.title}</option>;
    });

    const currentMovies = this.state.movies.map((current, i) => {
      if (this.state.currentMovie === current.title) {
        return (
          <h1 key={i}>
            {current.title}
            <br></br>

            {current.release_date}
            <br></br>

            {current.description}
            <br></br>
          </h1>
        );
      }
    });
    console.log(currentMovies);

    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.handleMovieChange}>
          <option></option>
          {allMovies}
        </select>
        {currentMovies}
      </div>
    );
  }
}

export default Movies;
