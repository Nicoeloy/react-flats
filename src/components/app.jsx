import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state {
      selectedFlat: flats[0],
      flats
    };
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
        />
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;
