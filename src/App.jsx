
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainHome from "./components/home/MainHome";
import MainAbout from "./components/about-us/MainAbout";
import MainMenu from "./components/menu/MainMenu";
import MainContact from "./components/contact/MainContact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/login-register/Register";
import Login from "./components/login-register/Login";
import MainCart from "./components/cart/MainCart";
import UserProvider from "./components/Context";
import { GlobalSyle } from "./GlobalStyle";
import UserDetails from "./components/user-details/UserDetails";


const App = () => {
  
  let [local, setLocal] = useState([]);

  let populateLocal= ()=>{
    let arr = localStorage.getItem("Products");

    if(arr){
      arr = JSON.parse(arr);
      setLocal(arr);
    }else{
      let empty = [];

      localStorage.setItem("Products",JSON.stringify(empty));
    }

  }

  useEffect(()=>{

    populateLocal();
  },[])

  
  return(
    <Router>
      <UserProvider>
        <Header local = {local}/>
        <Switch>
          <Route exact path={"/"}><MainHome populateLocal={populateLocal}/></Route>
          <Route exact path={"/menu"}><MainMenu /></Route>
          <Route exact path={"/about-us"}><MainAbout /></Route>
          <Route exact path={"/contact"}><MainContact /></Route>
          <Route exact path={"/register"}><Register /></Route>
          <Route exact path={"/login"}><Login /></Route>
          <Route exact path={"/cart"}><MainCart populateLocal={populateLocal} /></Route>
          <Route exact path={"/cart"}><MainCart populateLocal={populateLocal} /></Route>
          <Route exact path={"/user"}><UserDetails /></Route>
        </Switch>
        <Footer/>
    </UserProvider>
    <GlobalSyle/>
  </Router>
  )

}

export default App