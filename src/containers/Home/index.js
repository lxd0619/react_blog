import React, { Component } from "react";
import Resizable from "Components/Resizable";

export class Home extends Component {
  state = {};
  componentDidMount() {}

  render() {
    const {} = this.state;

    return (
      <>
        <div>Home</div>
        <Resizable />
      </>
    );
  }
}

export default Home;
