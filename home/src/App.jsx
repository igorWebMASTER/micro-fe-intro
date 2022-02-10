import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

import "./index.scss";

const App = () => (
  <>
    <Header />
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
