import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const eruda = require("eruda");
const el = document.createElement("div");
document.body.appendChild(el);
eruda.init({
  container: el,
  useShadowDom: true,
  autoScale: true,
});

// import VConsole from "vconsole";
// let vConsole = new VConsole();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
