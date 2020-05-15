import React from 'react';
/*global google*/

class Map extends React.Component {
  constructor(props) {
    super(props);
  
    this.marker_arr = [];
    this.pos_arr = [];
    this.initMap = this.initMap.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.listenForClick = this.listenForClick.bind(this);
  }

  componentDidMount() {
    this.initMap();
  }

  initMap() {
    const mapOptions = {
      center: { lat: 40.732321, lng: -73.992837 },
      zoom: 14,
      styles: [
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {"color": "#a0d6d1"},
            {"lightness": 17}
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {"color": "#ffffff"},
            {"lightness": 20}
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {"color": "#dedede"},
            {"lightness": 17}
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {"color": "#dedede"},
            {"lightness": 29},
            {"weight": 0.2}
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {"color": "#dedede"},
            {"lightness": 18}
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {"color": "#ffffff"},
            {"lightness": 16}
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {"color": "#f1f1f1"},
            {"lightness": 21}
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {"visibility": "on"},
            {"color": "#ffffff"},
            {"lightness": 16}
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {"saturation": 36},
            {"color": "#333333"},
            {"lightness": 40}
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {"visibility": "off"}
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {"color": "#f2f2f2"},
            {"lightness": 19}
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            {"color": "#fefefe"},
            {"lightness": 20}
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {"color": "#fefefe"},
            {"lightness": 17},
            {"weight": 1.2}
          ]
        }
      ]
    };
    
    this.map = new window.google.maps.Map(this.mapNode, mapOptions);
  }

  addMarker() {
    if (this.props.storeLi) {
      this.props.storeLi.forEach(store => {
        const pos = {
          lat: store.lat,
          lng: store.lng
        }

        const marker = new google.maps.Marker({
          position: pos,
          map: this.map
        });

        this.marker_arr.push(marker);
      });
    }
  }


  listenForClick() {
    const popUp = [];

    this.props.storeLi.forEach(store => {
      let url = store.mapUrl;

      popUp.push(new google.maps.InfoWindow({
          content: `<div>
              <h1>${store.name}</h1>

              <a href=${url}>Get Directions!</a>
      </div> `
      }));
    });

    this.marker_arr.forEach((marker, i) => {
      marker.addListener('click', (e) => {
          popUp[i].open(this.map, marker)
      });
    });
  }


  render() {
    if (!window.google) return null;

    this.marker_arr.forEach(marker => {
      marker.setMap(null);
    });

    this.addMarker();
    this.listenForClick();

    return <div id="map" ref={(map) => (this.mapNode = map)}></div>;
  }
}

export default Map;