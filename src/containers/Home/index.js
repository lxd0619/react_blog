import React, { Component } from "react";
import { DatePicker, Badge } from "antd";
const { RangePicker } = DatePicker;

export class Home extends Component {
  state = {};

  render() {
    const {} = this.state;

    return (
      <>
        <div>Home</div>
        <RangePicker />
      </>
    );
  }
}

export default Home;
