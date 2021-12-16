import React from 'react';

class Locations extends React.Component {
    constructor() {
        super();
        this.state = {
            locations: [],
            showLocations: true,
        }
    }


 fetchLocation = () => {
     fetch('https://ghibliapi.herokuapp.com/locations')
     .then((res) => res.json())
     .then((data) => {
         this.setState({
             locations: data,
         })
     })
 }

componentDidMount = () => {
    this.fetchLocation();
}

showAllLocations = () => {
    if (this.state.showLocations === true) {
        this.setState({
            showLocations: false
        })
    } else {
        this.setState({
            showLocations: false
        })
    }
}



    render() {
        const showAll = this.state.locations.map((location) => {
            return <li>
                <ul>Name: {location.name}</ul>
                <ul>Climate: {location.climate}</ul>
                <ul>Terrain: {location.terrain}</ul>
                </li>
        })
        return (
            <div className='locations'>
                <h1>List of Locations</h1>
                <button onClick={this.showAllLocations}>Show Locations</button>
                {showAll}
                </div>
        )
    }
}

export default Locations