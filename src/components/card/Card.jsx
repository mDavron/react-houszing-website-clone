import React, { Component } from "react";
import "./Card.css";
import { data } from "../../assets/data/data";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    cardData: data,
  };
  delete = (id) => {
    const newItem = this.state.cardData.filter((value) => value.id !== id);
    this.setState({ cardData: newItem });
  };
  render() {
    // console.log(this.state.cardData);
    return (
      <>
        {this.state.cardData.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card_imgbox">
                <div className="card_buttons">
                  <button className="card_buttons-btn blue-btn">
                    Featured
                  </button>
                  <button
                    className="card_buttons-btn dark-blue-btn"
                    onClick={() => this.delete(item.id)}
                  >
                    Delete
                  </button>
                </div>
                <img src={item.url} alt="card-img" loading="lazy" />
              </div>

              <div className="card_container">
                <img src={item.circleImg} alt="circle" className="circle" />

                <div className="row">
                  <div style={{ margin: "10px 0px" }}>
                    <h2 className="card_title">{item.title}</h2>
                    <p className="card_text">{item.adress}</p>
                  </div>
                </div>
                <div className="row flex-between">
                  <div className="flex-column">
                    <img src={item.icons.bed} alt="icons" />
                    <span className="card_text">{item.info.beds}</span>
                  </div>
                  <div className="flex-column">
                    <img src={item.icons.bath} alt="icons" />
                    <span className="card_text">{item.info.baths}</span>
                  </div>
                  <div className="flex-column">
                    <img src={item.icons.car} alt="icons" />
                    <span className="card_text">{item.info.garage}</span>
                  </div>
                  <div className="flex-column">
                    <img src={item.icons.ruler} alt="icons" />
                    <span className="card_text">{item.info.sq}</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="card_container">
                <div className="row flex-between">
                  <div>
                    <p className="old-price">{item.oldPrice}</p>
                    <p className="price">{item.price}</p>
                  </div>
                  <div className="flex-between" style={{ width: "70px" }}>
                    <img src={item.icons.resize} alt="icon" />
                    <img src={item.icons.heart} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Card;
