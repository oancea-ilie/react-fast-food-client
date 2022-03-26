import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainHome from "./components/home/MainHome";
import MainAbout from "./components/about-us/MainAbout"
import MainMenu from "./components/menu/MainMenu";
import MainContact from "./components/contact/MainContact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/login-register/Register";
import Login from "./components/login-register/Login";
export default ()=>{


  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path={"/"}><MainHome/></Route>
        <Route exact path={"/menu"}><MainMenu/></Route>
        <Route exact path={"/about-us"}><MainAbout/></Route>
        <Route exact path={"/contact"}><MainContact/></Route>
        <Route exact path={"/register"}><Register/></Route>
        <Route exact path={"/login"}><Login/></Route>

      </Switch>
      <Footer/>
    </Router>
  )

}