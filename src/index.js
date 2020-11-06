import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import store from './store';
import { AppContainer, setConfig } from "react-hot-loader";
// import { Provider } from "react-redux";

// const eruda = require("eruda");
// const el = document.createElement("div");
// document.body.appendChild(el);
// eruda.init({
//   container: el,
//   useShadowDom: true,
//   autoScale: true,
// });

// import VConsole from "vconsole";
// let vConsole = new VConsole();

// 禁用警告
setConfig({
  showReactDomPatchNotification: false,
});
//热更新实现
const render = (Component) => {
  ReactDOM.render(
    //绑定redux、热加载
    // <Provider store={store}>
    <AppContainer>
      <Component />
    </AppContainer>,
    // </Provider>
    document.getElementById("root")
  );
};
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
// serviceWorker.register();
