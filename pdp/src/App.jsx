import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import Footer from "home/Footer";
import Header from "home/Header";
import SafeComponent from "./SafeComponent"

import "./index.scss";

const App = () => {

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
      <Header/>
      </SafeComponent>
      <button className="text-3xl p-5"
        onClick={() => setShowHeader(!showHeader)}
      >

      </button>
      <div className="my-10">PDP page content</div>
      <Footer />
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
