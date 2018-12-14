import React from 'react';
import { withRouter } from 'react-router-dom';


class GeoForm extends React.Component {
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
    this.props.codeAddress(this.state.address).then(res => {
      this.setState({
        lat: `Latitude: ${res.lat}`, lng: `Latitude: ${res.lng}`
      });
      console.log(this.state);
    });
  };

  render() {
    const { address } = this.state;
    const enabled = address.length > 0;

    return <div className="geocode-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="geocode-form">
            <label className="form-label">
              Address:
              <input type="text" value={this.state.address} placeholder="Address" onChange={this.update("address")} className="lat-input" />
            </label>
          </div>
          <input type="submit" value="Geocode Input" className="submit-button" disabled={!enabled} />
        </form>
        <div className="lat-lng">
          <span>{this.state.lat}</span>
          <span>{this.state.lng}</span>
        </div>
      </div>;
  }
}

export default withRouter(GeoForm);