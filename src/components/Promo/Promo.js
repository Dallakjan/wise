import React from "react";
import "./promo.scss";
import Promo_banner from "../img/promo_banner.jpg";
import Promo_cola from "../img/promo_cola.jpg";
import Promo_5 from "../img/promo_5.jpg";
import Promo_10 from "../img/promo_10.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SimpleImageSlider from "react-simple-image-slider";
import Header from "../Header/Header";
import Footer from "./../footer/Footer";
import { Carousel, Spinners } from "react-bootstrap";
import benefits_3 from "../img/benefits_3.jpg";
import xa1 from "../img/xa1.jpg";
import xa2 from "../img/xa2.jpg";
import xa3 from "../img/xa3.jpg";

import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon className="eye" icon={faEye} />;

export default class App extends React.Component {
  state = {
    active: false,
    active1: false,
    active2: false,
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  handleClick1 = () => {
    this.setState({
      active1: !this.state.active1,
    });
  };

  handleClick2 = () => {
    this.setState({
      active2: !this.state.active2,
    });
  };

  render() {
    const promoCode = "12345";
    const promoCode1 = "wow";
    const promoCode2 = "nice";

    return (
      <>
        <Header />
        <div className="promo">
          <div className="banner_promo_container">
            <div className="banner_promo_bil"></div>
          </div>
          <div className="promo_offer">
            <img className="banner_promo" src={Promo_cola} alt="cola" />
            <img className="banner_promo" src={Promo_5} alt="5%" />
            <img className="banner_promo" src={Promo_10} alt="10%" />
          </div>
          <div className="offer_code">
            <div onClick={this.handleClick}>{eye}</div>
            <div onClick={this.handleClick1}>{eye}</div>
            <div onClick={this.handleClick2}>{eye}</div>
          </div>
          <div className="promo_code">
            <div>{this.state.active ? promoCode : null}</div>
            <div>{this.state.active1 ? promoCode1 : null}</div>
            <div>{this.state.active2 ? promoCode2 : null}</div>
          </div>
          <div className="promo_slider">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={xa3} alt="First slide" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100" src={xa1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={xa2} alt="First slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
