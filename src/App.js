import React, { Component } from "react";
// import Main from "./containers/Main";
import Main from "./containers";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Main />;
  }
}

export default App;
