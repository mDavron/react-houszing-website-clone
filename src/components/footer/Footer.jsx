import React, { Component } from "react";
import icon1 from "../../assets/images/footer-icon1.svg";
import icon2 from "../../assets/images/footer-icon2.svg";
import icon3 from "../../assets/images/footer-icon3.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import linekiden from "../../assets/images/linekiden.svg";
import logo from "../../assets/images/logo.png";

import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <footer>
        <div className="container footer-flex">
          <ul className="footer_menu">
            <p className="footer_title">Contact Us</p>
            <li>
              <a href="#" className="footer_link">
              <img src={icon1} alt="icon1" />
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </a>
            </li>
            <li>
              <img src={icon2} alt="icon1" />
              <a href="#" className="footer_link">
                123 456 7890
              </a>
            </li>
            <li>
              <img src={icon3} alt="icon1" />
              <a href="#" className="footer_link">
                support@houzing.com
              </a>
            </li>
            <li className="social-icons">
              <a href="#">
                <img src={facebook} alt="icon1" />
              </a>
              <a href="#">
                <img src={twitter} alt="icon1" />
              </a>
              <a href="#">
                <img src={instagram} alt="icon1" />
              </a>
              <a href="#">
                <img src={linekiden} alt="icon1" />
              </a>
            </li>
          </ul>
          <ul className="footer_menu">
            <p className="footer_title">Discover</p>
            <li>
              <a href="#">Chicago</a>
            </li>
            <li>
              <a href="#">Los Angeles</a>
            </li>
            <li>
              <a href="#">Miami</a>
            </li>
            <li>
              <a href="#">New York</a>
            </li>
          </ul>
          <ul className="footer_menu">
            <p className="footer_title">Lists by Category</p>
            <li>
              <a href="#">Apartments</a>
            </li>
            <li>
              <a href="#">Condos</a>
            </li>
            <li>
              <a href="#">Houses</a>
            </li>
            <li>
              <a href="#">Offices</a>
            </li>
            <li>
              <a href="#">Retail</a>
            </li>
            <li>
              <a href="#">Villas</a>
            </li>
          </ul>
          <ul className="footer_menu">
            <p className="footer_title">Lists by Category</p>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Support Center</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
