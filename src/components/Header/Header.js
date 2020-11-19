import "./header.scss";
import About from "../About/About";
import History from "../History/History";
import Promo from "../Promo/Promo";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <HashRouter>
      <header className="header">
        <div className="header__container container">
          <p>wise</p>
          <nav>
            <input type="checkbox" className="menu__btn" id="menu__btn" />
            <label htmlFor="menu__btn" className="menu__toggle">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <ul className="header__nav">
              <Link className="nav__link" to="/">
                Main
              </Link>
              <Link className="nav__link" to="/History">
                Shopping List
              </Link>
              <Link className="nav__link" to="/Promo">
                Promotions
              </Link>
              <Link className="nav__link" to="/About">
                About
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </HashRouter>
  );
}
