import React, { Component } from "react";
import Header from "./components/header/Header";
import InputGroup from "./components/form/InputGroup";
import Card from "./components/card/Card";
import "./App.css";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer-bottom/footer-bottom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <InputGroup />
          <div className="center top_info">
            <h2 className="top_info-title">Properties</h2>
            <p className="top_info-text">
              Nulla quis curabitur velit volutpat auctor bibendum consectetur
              sit.
            </p>
          </div>
          <div className="card_wrapper">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Footer />
        <FooterBottom/>
      </div>
    );
  }
}

export default App;
