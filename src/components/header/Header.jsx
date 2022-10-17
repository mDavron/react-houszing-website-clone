import React, { Component } from "react";
import logo from "../../assets/images/logo.png";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isActive: true,
  };
  render() {
    return (
      <header>
        <div className="container">
          <div className="flex_between">
            <a href="#" className="logo">
              <img style={{ height: "40px" }} src={logo} alt="logo" />
            </a>
            <ul className={this.state.isActive ? "menu" : "menu-active"}>
              <li onClick={() => this.setState({ isActive: true })}>
                <span className="mobile-icon">
                  <i className="fa-sharp fa-solid fa-house"></i>
                </span>
                <a href="#">Home</a>
              </li>
              <li onClick={() => this.setState({ isActive: true })}>
                <span className="mobile-icon">
                  <i class="fa-sharp fa-solid fa-gear"></i>
                </span>
                <a href="#">Properties</a>
              </li>
              <li onClick={() => this.setState({ isActive: true })}>
                <span className="mobile-icon">
                  <i class="fa-sharp fa-solid fa-square-phone-flip"></i>
                </span>

                <a href="#">Contacts</a>
              </li>
              <button className="btn_outline btn-mobile ">Login</button>
            </ul>
            <button className="btn_outline btn-desktop">Login</button>
            <div className="icon-active">
              {this.state.isActive ? (
                <i
                  className="fa-solid fa-bars"
                  onClick={() =>
                    this.setState({ isActive: !this.state.isActive })
                  }
                ></i>
              ) : (
                <i
                  className="fa-solid fa-xmark"
                  onClick={() =>
                    this.setState({ isActive: !this.state.isActive })
                  }
                ></i>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
