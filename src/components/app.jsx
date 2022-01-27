import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Flat from './flat';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FlatList
        />
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;
