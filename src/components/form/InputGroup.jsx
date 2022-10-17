import React, { Component } from "react";
import "./InputGroup.css";

class InputGroup extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="input_box">
        <input
          className="input_box-input"
          type="text"
          placeholder=" Enter an address, neighborhood, city, or ZIP code"
        />
        <button className="input_box-button">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i><span className="span-search">Search</span>

        </button>
      </div>
    );
  }
}

export default InputGroup;
