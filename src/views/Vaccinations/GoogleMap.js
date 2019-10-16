import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

const MapMarker = () => <FontAwesomeIcon  icon={faMapMarkerAlt} style={{fontSize:"24px", color:"red"}} />


  
  


export default class GoogleMap extends Component {
    constructor(){
        super()
        this.state ={
            zoom: 13
        }
    }

    // defaultCenter = {
    //     center: {
    //       lat: this.props.latitude,
    //       lng: this.props.longitude
    //     },
    //     zoom: 13
    //   };
    

    apiIsLoaded = (map, maps) => {
        if (map) {
          const bounds = new maps.LatLngBounds();
          map.fitBounds(bounds);
          this.bindResizeListener(map, maps, bounds);
        }
      };
    
    bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
        maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
        });
    });
    };

    //   renderMarkers = (map, maps) => {
    //     let marker = new maps.Marker({
    //       position: this.state.center,
    //       map,
    //       title: this.state.name,
    //     });
    //   }

    render() {
        
        const{ latitude, longitude } = this.props.item
        // console.log(latitude)
        // console.log(longitude)
        return (
            // <div></div>
            <div style={{ height: '50vh', width: '90%', margin:"auto", marginBottom:"24px"}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC73kt0rEvtd2U-QKDGrEYvbV1S-dlX0EI"}}
                // defaultCenter= {{
                //     lat : -37.8136,
                //     lng : 144.9631
                // }}
                center = {{lat:latitude, lng:longitude}}
                // defaultZoom=
                zoom = {this.state.zoom}

                yesIWantToUseGoogleMapApiInternals
                // onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
                // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
                >
                <MapMarker
                    lat={this.props.item.latitude}
                    // -37.877093, 145.044425
                    lng={this.props.item.longitude}
                />
                </GoogleMapReact>
            </div>
        )
    }
}
