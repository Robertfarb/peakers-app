import React from 'react';
import { withRouter } from 'react-router-dom';
import secrets from '../../util/api_key';

class ReverseGeoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      lat: '',
      lng: '',
      error: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.reverseGeoCode(this.state).then(res => {
      this.setState({
        address: `Address: ${res.address}`, lat: `Latitude: ${res.lat}`, lng: `Latitude: ${res.lng}`
      });
      console.log(this.state);
    });
  };

  render() {
    const { lat, lng } = this.state;
    const enabled = lat.length > 0 && lng.length > 0;

    return <div >
      <form className="rev-geocode-form" onSubmit={this.handleSubmit}>
        <div className="geocode-form">
          <label className="form-label">
            Latitude:
              <input type="text" value={this.state.lat} placeholder="Latitude" onChange={this.update("lat")} className="lat-input" />
          </label>
          <label className="form-label">
            Longitude:
              <input type="text" value={this.state.lng} placeholder="Longitude" onChange={this.update("lng")} className="lat-input" />
          </label>
        </div>
        <input type="submit" value="Geocode Input" className="submit-button" disabled={!enabled} />
      </form>
      <div className="lat-lng">
        <span>{this.state.address}</span>
      </div>
    </div>;
  }
}

export default withRouter(ReverseGeoForm);