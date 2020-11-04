import React, { Component } from "react";
import { DatePicker, Badge } from "antd";
import cat from "Image/cat.jpeg";
import Resizable from "Components/Resizable";

export class Home extends Component {
  state = {};

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
