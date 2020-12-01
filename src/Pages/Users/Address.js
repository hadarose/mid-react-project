import React, { Component } from "react";
import "../Proj.css";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newStreet: this.props.address.street,
      newCity: this.props.address.city,
      newZipcode: this.props.address.zipcode,
    };
  }

  getInputStreet = (e) => {
    this.setState({ newStreet: e.target.value });
    this.sendAddress();
  };

  getInputCity = (e) => {
    this.setState({ newCity: e.target.value });
    this.sendAddress();
  };

  getInputZipcode = (e) => {
    this.setState({ newZipcode: e.target.value });
    this.sendAddress();
  };

  sendAddress = () => {
    this.props.callbackGetAddress(
      this.state.newStreet,
      this.state.newCity,
      this.state.newZipcode
    );
  };

  render() {
    return (
      <div className="blackBorderComp">
        Street:{" "}
        <input
          className="inputText"
          type="text"
          defaultValue={this.props.address.street}
          onChange={this.getInputStreet}
        />
        <br />
        City:{" "}
        <input
          className="inputText"
          type="text"
          defaultValue={this.props.address.city}
          onChange={this.getInputCity}
        />
        <br />
        Zipcode:{" "}
        <input
          className="inputText"
          type="text"
          defaultValue={this.props.address.zipcode}
          onChange={this.getInputZipcode}
        />
        <br></br>
      </div>
    );
  }
}

export default Address;
