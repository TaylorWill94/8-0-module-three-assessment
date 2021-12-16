import React from 'react';

class People extends React.Component {
    constructor() {
        super();
        this.state = {
            characters: [],
            currentCharacter: '',
        }
    }


    fetchCharacters = () => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                characters: data
            })
        })
    }

    componentDidMount = () => {
        this.fetchCharacters();
    }

    handleInput = (event) => {
        this.setState({
            currentCharacter: event.target.value
        })
    }


    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     let displayCharacter = this.state.characters.map((character) => {
    //         if (this.state.currentCharacter === character.name) {
    //             return <div>{character.name}</div>
    //         }
           
    //     })
    //     this.setState({
    //         currentCharacter: {displayCharacter}
    //     })
    // }

    render() {
        return (
            <div className='people'>
                <h1>Search for a Person</h1>
                <form onChange={this.handleInput}>
                    <input type='text' placeholder='Find Your Person' />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                {this.state.currentCharacter ? true : 'Not Found'}
                </div>
        )
    }
}

export default People