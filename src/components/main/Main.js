import React from "react";
import "./main.scss";
import benefits_1 from "../img/benefits_1.jpg";
import benefits_2 from "../img/benefits_2.jpg";
import benefits_3 from "../img/benefits_3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";

const plus = <FontAwesomeIcon icon={faPlus} />;

export default function Main() {
  return (
    <>
      <div className="main_logo_container">
        <p className="main_logo">wise</p>
        <span className="slogan">clever shopping</span>
      </div>
      <p className="benefits_ad">
        How can u change the world shopping <span>wise</span>
      </p>
      <div className="benefits_foto_container">
        <img src={benefits_1} alt="skarbonka" />
        <img src={benefits_2} alt="planowanie" />
        <img src={benefits_3} alt="marnowanie jedzenia" />
      </div>
      <div className="benefits_desc">
        <p>save money for better things like helping</p>
        <p>always plan your shopping list to controll yourselfe from snacks</p>
        <p>dont waste food by buying more than you need</p>
      </div>
      <div className="create">
        <p>Creat your shopping list now !</p>
        <HashRouter>
          <Link className="nav__link" to="/History">
            <span>{plus}</span>
          </Link>
        </HashRouter>
      </div>
      <Footer />
    </>
  );
}
