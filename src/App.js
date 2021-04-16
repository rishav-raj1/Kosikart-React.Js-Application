import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Checkout from "./Checkout";
import Service from "./Service";
import Contact from "./Contact";
import { Redirect, Route, Switch } from "react-router";


const App = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Checkout" component={Checkout}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/" />

      
    </Switch>
    </>
  );
}

export default App;
