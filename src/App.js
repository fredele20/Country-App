import React from "react";
import Countries from "./components/Countries";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Details from './components/Details'
import Country from "./components/Country";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
  return (
    <div>
      < Country / >
      <Header />
      
      {/* <Country /> */}

      <div className="container">
        <div className="row">
          <Countries />
        </div>
      </div>
      <Footer />
    </div>
  );
}


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/details" component={Details} />
    </BrowserRouter>
  );
};

export default AppRoutes;
