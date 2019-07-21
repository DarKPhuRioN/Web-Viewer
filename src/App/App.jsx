import React from 'react';
import * as Leaflet from 'leaflet';
import './App.css';

const server = 'localhost://8550';

class App extends React.Component {

  map;

  constructor(props){
    super(props);
    this.state={
      initCoordenate: {
        lat: 1.572495,
        lng: -75.119689
      },
      zoom: 10
    }
  }

  componentDidMount(){
    this.map = Leaflet.map('mapid').setView([this.state.initCoordenate.lat, this.state.initCoordenate.lng], this.state.zoom);
    this.initLayerMap();
  }

  render(){
    return (
      <div id="main">
        <div id="mapid"></div>
      </div>
    );
  }
  
  initLayerMap(){
    Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoieWVpc29uZ29tZXoyOCIsImEiOiJjanNxejdiZnQwZzZ4M3lwYW15Znh3ZHAwIn0.8Z-H69gSG56_IdqoTU4EJg', {
      
      maxZoom: 15,
      id: 'mapbox.dark',
      accessToken: 'pk.eyJ1IjoiZGFya3BodXJpb24iLCJhIjoiY2p1OWJ5dGg0MGN0ZTRkcXF2dmNqeTR6ZCJ9.EGiURzBhQ3YGAjqtMbUqZA'
    }).addTo(this.map);
  }

}

export default App;
