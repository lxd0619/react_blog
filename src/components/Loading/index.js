import React, { Component } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export class Loading extends Component {
  render() {
    const antIcon = (
      <LoadingOutlined
        style={{
          fontSize: 24,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        spin
      />
    );
    return <Spin indicator={antIcon} />;
  }
}

export default Loading;
