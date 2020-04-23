import React from 'react';
import "../../assets/stylesheets/map.scss";
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


    initMap(){
        // debugger
        const mapOptions = {
            center: { lat: 40.7831, lng: -73.9712 },
            zoom: 12,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a0d6d1"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f1f1f1"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]
        };
        this.map = new window.google.maps.Map(this.mapNode, mapOptions);
    }

    componentDidMount() {
        this.initMap();
        this.props.fetchStores().then(() => this.addMarker());   
        this.listenForClick();
    }

    
    addMarker(){
        if (this.props.stores) {
            this.props.stores.map(store => {
                const pos = {
                        lat: store.lat,
                        lng: store.lng
                    }
            
                const marker = new google.maps.Marker({
                    position: pos,
                    map: this.map
                })
                this.marker_arr.push(marker);
            })
        }
    }


    listenForClick() {
        // const infowindow = new google.maps.InfoWindow({
        //     content: '<a href="https://www.facebook.com/ShinyTea.NewYork/">Visit Website</a>'
        // });

        // this.marker_arr.map((marker) => {
        //         marker.addListener('click', (e) => {
        //     infowindow.open(this.map, marker);
        //     })
        // })


        // this.marker.addListener('click', (e) => {
        //     infowindow.open(this.map, this.marker);
        // })
        // this.marker.addListener('click', (e) => {
        //     infowindow.open(this.map, this.marker);
        // })
    }


    render() {
        debugger
        console.log(this.props.stores)
        console.log(this.pos_arr)
        return (
          <>
            <div id="map" ref={(map) => (this.mapNode = map)}></div>
          </>
        );
    }
}

export default Map;