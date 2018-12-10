import React from 'react';
import ReactDOM from 'react-dom';
// import MarkerManager from '../../util/marker_manager';
import { withRouter } from "react-router-dom";


class Map extends React.Component {
  constructor(props) {
    super(props);

    // this.handleMarkerClick = this.handleMarkerClick.bind(this);
    // this.registerListeners = this.registerListeners.bind(this);
    // this.centerMapOnSearch = this.centerMapOnSearch.bind(this);
    this.geoCoder = new google.maps.Geocoder();
    // this.getCenter = this.getCenter.bind(this);
  }


  componentDidMount() {
    let geoLocation = this.props.geoLocation;
    let mapCenter = { lat: 37.865101, lng: -119.538329 };

    const mapOptions = {
      center: mapCenter,
      zoom: 6
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.registerListeners();
  }

  // registerListeners() {
  //   google.maps.event.addListener(this.map, 'idle', () => {
  //     const { north, south, east, west } = this.map.getBounds().toJSON();
  //     const bounds = {
  //       northEast: { lat: north, long: east },
  //       southWest: { lat: south, long: west }
  //     };
  //     this.props.updateFilter('location', bounds);
  //   });
  // }

  // getCenter(callBack) {
  //   const geolocation = this.props.geoLocation;
  //   let centerCoords;
  //   this.geoCoder.geocode({ 'address': geolocation }, function (results, status) {
  //     if (status === "OK") {
  //       if (results[0]) {
  //         let lat = results[0].geometry.location.lat();
  //         let lng = results[0].geometry.location.lng();
  //         centerCoords = { lat, lng }
  //         callBack(centerCoords);
  //       } else {
  //         centerCoords = { lat: 37.865101, lng: -119.538329 };
  //         callBack(centerCoords);
  //       }
  //     }
  //   });
  // }


  render() {
    return (
      <div className="map-wrapper">
        <div id='map-container' ref={map => this.mapNode = map} className='google-map'>
        </div>
      </div>
    )
  }
}

export default withRouter(Map);