import React from 'react';
import { withRouter } from 'react-router-dom';

class DistanceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat1: "",
      lng1: "",
      lat2: "",
      lng2: "",
      distance: "",
      error: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDistance = this.getDistance.bind(this);
    this.degToRad = this.degToRad.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }
  
  degToRad(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
  }

  getDistance(lat1, lon1, lat2, lon2) {
    fetch(`http://localhost:3000/geo_distance?lat1=${lat1}&lon1=${lon1}&lat2=${lat2}&lon2=${lon2}`)
      .then(res => res.json())
      .then(result => {
        this.setState({ distance: `Distance: ${result.geo_distance.distance}` });
        return result.geo_distance.distance
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let lat1 = parseFloat(this.state.lat1);
    let lng1 = parseFloat(this.state.lng1);
    let lat2 = parseFloat(this.state.lat2);
    let lng2 = parseFloat(this.state.lng2);
    this.getDistance(lat1, lng1, lat2, lng2);
  }

  render() {
    const { lat1, lng1, lat2, lng2 } = this.state;
    const enabled = lat1.length > 0 && lng1.length > 0 && lat2.length > 0 && lng2.length > 0;

    return (
      <div className="distance-form-container">
        <form className="distance-form" onSubmit={this.handleSubmit}>
          <div className="distance-form">
            <label className="form-label">
              Latitude 1:
              <input
                type="text"
                value={this.state.lat1}
                placeholder="Latitude 1"
                onChange={this.update("lat1")}
                className="lat-input"
              />
            </label>
            <label className="form-label">
              Longitude 1:
              <input
                type="text"
                value={this.state.lng1}
                placeholder="Longitude 1"
                onChange={this.update("lng1")}
                className="lng-input"
              />
            </label>
            <hr></hr>
            <label className="form-label">
              Latitude 2:
              <input
                type="text"
                value={this.state.lat2}
                placeholder="Latitude 2"
                onChange={this.update("lat2")}
                className="lng-input"
              />
            </label>
            <label className="form-label">
              Longitude 2:
              <input
                type="text"
                value={this.state.lng2}
                placeholder="Longitude 2"
                onChange={this.update("lng2")}
                className="lng-input"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Get Distance"
            className="submit-button"
            disabled={!enabled}
          />
        </form>
        <div className="lat-lng">
          <span>{this.state.distance}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(DistanceForm);