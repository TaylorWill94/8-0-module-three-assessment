import React from "react";

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      showLocations: false,
      text: "Show Locations",
    };
  }

  fetchLocation = () => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          locations: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchLocation();
  };

  showAllLocations = () => {
    if (this.state.showLocations === false) {
      this.setState({
        showLocations: true,
      });
    } else {
      this.setState({
        showLocations: false,
      });
    }
  };

  changeText = (text) => {
      if (this.state.text === 'Show Locations') {
    this.setState({
      text: 'Hide Locations',
    })
    }
  };

  render() {
    const showAll = this.state.locations.map((location) => {
      return (
        <li>
          <ul>Name: {location.name}</ul>
          <ul>Climate: {location.climate}</ul>
          <ul>Terrain: {location.terrain}</ul>
        </li>
      );
    });
    return (
      <div className="locations">
        <h1>List of Locations</h1>

        <button
          onClick={() => {
            this.showAllLocations();
            this.changeText("Hide Locations");
          }}
        >
          {this.state.text}
        </button>
      </div>
    );
  }
}

export default Locations;
