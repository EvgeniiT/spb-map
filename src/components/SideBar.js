import React, { Component } from 'react';

class SideBar extends Component {

  // Helper function for type check
  is = (item, type) =>
  	Object
  	.prototype
  	.toString.call(item)
  	.match(/\s(\w+)]/)[1]
  	.toLowerCase() === type

  state = {
    query: '',
    filteredLocations: []
  }

  updateQuery = (q) => {
    this.setState({ query: q });
    this.props.searchLocations(q);
  }

  render() {
    const {locations, onToggleIsOpen, sideBarClass} = this.props
    const {query} = this.state
    return (
      <div>
        <h2>Bar list</h2>
        <div className="search-books-input-wrapper" aria-label= "Bar filter">
          <input
            tabIndex={(sideBarClass === 'Side-Bar-Closed') ? ('-1') : ('2')}
            type="text"
            placeholder="Search by name"
            value={query}
            onChange={(evt) => {
              return this.updateQuery(evt.target.value);}}
          />
        </div>

        {(query.length !== 0 && locations.length === 0) ?
          <div className='Side-Bar-No-Result'>
            <h3>No bar with name "{query}"</h3>
            <p>Please change your reuest</p>
          </div> :
          null}
        <div className='Side-Bar-Scroll'>
          <ul>
          {
            (this.is(locations, 'array')) &&
            locations.map(l => (
            <li
            key={l.id}
            aria-label='View {l.text} details'
            tabIndex={(sideBarClass === 'Side-Bar-Closed') ? ('-1') : ('3')}

            onKeyDown={(evt)=>{(evt.key === "Enter") && (onToggleIsOpen(l))}}
            onClick={() => onToggleIsOpen(l)}
            >{l.text}</li>
          ))}
          </ul>
        </div>
        <div className='Side-Bar-Footer'>
          <p>This App is using Foursquare API data </p>
        </div>
      </div>
    )

  }

}
export default SideBar;
