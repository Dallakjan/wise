import "./App.scss";
import Header from "./Header/Header";
import Main from "./main/Main";
import Promo from "../components/Promo/Promo";
import About from "../components/About/About";
import History from "../components/History/History";

import { db } from "./../firebase";
import { useEffect, useState } from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={Main} />
        <Route exact path="/promo" component={Promo} />
        <Route exact path="/about" component={About} />
        <Route exact path="/history" component={History} />
        {/* <Promo /> */}
        {/* <History /> */}
        {/* <About /> */}
      </div>
    </HashRouter>
  );
}

export default App;
