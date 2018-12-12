import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import secrets from '../../util/api_key';
import GeoForm from '../geocode_form/geocode_form';
import RevGeoForm from '../geocode_form/reverse_geo_form';


class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "",
      lat: "",
      lng: "",
      error: false
    };

    this.geoCoder = new google.maps.Geocoder();
    this.codeAddress = this.codeAddress.bind(this);
    this.reverseGeoCode = this.reverseGeoCode.bind(this);
  }

  componentDidMount() {
    let mapCenter = { lat: 37.865101, lng: -119.538329 };

    const mapOptions = {
      center: mapCenter,
      zoom: 6
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  codeAddress(address) {
    return new Promise((resolve, reject) => {
      let map = this.map;
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, function (results, status) {
        if (status === "OK") {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
          });
          resolve({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          })
        } else {
          resolve({
            lat: "Sorry, No Results Found",
            lng: "Sorry, No results Found"
          });
        }
      });
    });
  }

  reverseGeoCode(latlng) {
    console.log(latlng)
    return new Promise((resolve, reject) => {
      let map = this.map;
      let geocoder = new google.maps.Geocoder();
      let latLng = {lat: parseInt(latlng.lat), lng: parseInt(latlng.lng)}
      geocoder.geocode({ "location": latLng }, function(results, status) {
        if (status === "OK") {
          console.log(results[0].formatted_address);
          if (results[0]) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
            resolve({
              address: results[0].formatted_address,
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            });
          } else {
            resolve("Sorry, No results Found!");
          }
        } else {
          console.log(status);
          resolve({
            lat: "Sorry, No Results Found",
            lng: "Sorry, No results Found"
          });
        }
      });
    });
  }

  render() {
    const { address } = this.state;
    const enabled = address.length > 0;

    return (
      <div className="map-wrapper">
        <div
          id="map-container"
          ref={map => (this.mapNode = map)}
          className="google-map"
        />

        {/* Ternary operator That determines which component to 
         render dependent on the path in the URL */}
        {
          this.props.match.path === "/geocode" ? 
          <GeoForm codeAddress={this.codeAddress} /> :
          (this.props.match.path === "/reverse-geocode" ? <RevGeoForm reverseGeoCode={this.reverseGeoCode} /> : null)
        }
      </div>
    );
  }
}

export default withRouter(Map);