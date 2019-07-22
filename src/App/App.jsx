import React from 'react';
import * as Leaflet from 'leaflet';
import './App.css';
import Header from './../components/Header/header';
import Footer from './../components/Footer/footer';

//const server = 'localhost://4000/';

class App extends React.Component {

  map;

  constructor(props){
    super(props);
    this.state={
      coordenate: {
        lat: 1.571595,
        lng: -75.1233689
      },
      zoom: 15
    }
  }

  componentDidMount(){
    this.map = Leaflet.map('mapid').setView(
      [
        this.state.coordenate.lat,
        this.state.coordenate.lng
      ], 
      this.state.zoom
    );

    this.initLayerMap();
  }

  render(){
    return (
      
      <div id="main">
        <Header titleOne="Villa" titleTwo="Hermosa"></Header>
        <div id="mapid"></div>
        <Footer></Footer>
      </div>
      
    );
  }
  
  initLayerMap(){
    Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
    {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets-satellite',
      accessToken: 'pk.eyJ1IjoiZGFya3BodXJpb24iLCJhIjoiY2p1OWJ5dGg0MGN0ZTRkcXF2dmNqeTR6ZCJ9.EGiURzBhQ3YGAjqtMbUqZA'
    })
    .addTo(this.map);
    Leaflet.marker(
      [
        this.state.coordenate.lat,
        this.state.coordenate.lng
      ]
    ).addTo(this.map);

    Leaflet.popup()
    .setLatLng(
      [
        this.state.coordenate.lat,
        this.state.coordenate.lng
      ]
    )
    .setContent("Punto Central")
    .openOn(this.map);
  }

}

export default App;
