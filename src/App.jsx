import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./card";
import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">Home page Content <Card /></div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
