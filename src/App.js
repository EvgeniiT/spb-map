import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'
import SideBar from './components/SideBar.js'
import Header from './components/Header.js'
import * as LocationsAPI from './components/LocationsAPI'


class App extends Component {
  state = {
    locations: [],
    sideBarClass: 'Side-Bar-Closed'
  }

  is = (item, type) =>
  	Object
  	.prototype
  	.toString.call(item)
  	.match(/\s(\w+)]/)[1]
  	.toLowerCase() === type

  componentDidMount() {
    LocationsAPI.getDefaultLocations().then( l => {
      console.log(l);
      (this.is(l, 'array')) && this.setState({ locations: l });
    });
  }

  toggleSideBarClass = () => {
    (this.state.sideBarClass === 'Side-Bar-Closed') ? (this.setState({ sideBarClass: 'Side-Bar' })) :
    (this.setState({ sideBarClass: 'Side-Bar-Closed' }));
  }

  searchLocations = (query) => {
    LocationsAPI.searchLocations(query).then( l => {
      (this.is(l, 'array')) && this.setState({ locations: l })
    });
  }

  toggleIsOpen = (location) => {
    const locationsIDs = this.state.locations.map(l => l.id);
    if (locationsIDs.indexOf(location.id) !== -1) {
      this.setState((state) => ({locations: state.locations.map(l => {
        (l.id !== location.id) && (l.isOpen = false);
        (l.id === location.id) && (l.isOpen = !l.isOpen);
        l.isOpen ?
          l.icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' :
          l.icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
        return l;
      })}));
    } else {
      console.log('No such location id!');
    }
  }

  render() {
    return (
      <div className="App" role="application">
        <Header toggleSideBarClass={this.toggleSideBarClass}/>
        <div className = {this.state.sideBarClass}>
          <SideBar
            locations={this.state.locations}
            onToggleIsOpen={this.toggleIsOpen}
            searchLocations={this.searchLocations}
            sideBarClass={this.state.sideBarClass}
          />
        </div>
        <Map aria-label="Map" locations={this.state.locations} onToggleIsOpen={this.toggleIsOpen}/>


      </div>
    );
  }
}

export default App;
