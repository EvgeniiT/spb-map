import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'
// import CompositeGoogleMap from './components/CompositeGoogleMap.js'

const allLocations = [
  { id: 'abc1', lat: 40.756795, lng: -73.954298, text: 'Hi', isOpen: false },
  { id: 'abc2', lat: 41.76, lng: -72.97, text: 'my', isOpen: true },
  { id: 'abc3', lat: 41.44, lng: -73.5, text: 'cool markers!', isOpen: false}
]

class App extends Component {
  state = {
    locations: []
  }

  componentDidMount() {
    this.setState({ locations: allLocations });
  }

  toggleIsOpen = (location) => {
    const locationsIDs = this.state.locations.map(l => l.id);
    if (locationsIDs.indexOf(location.id) !== -1) {
      this.setState((state) => ({locations: state.locations.map(l => {
        // let thisBook = b;
        (l.id === location.id) && (l.isOpen = !l.isOpen);
        return l;
      })}));
    } else {
      console.log('No such location id!');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Map locations={this.state.locations} onToggleIsOpen={this.toggleIsOpen}/>

      </div>
    );
  }
}

export default App;
