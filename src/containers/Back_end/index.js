import React, { Component } from "react";
import { Button } from "antd";
import Palette from "Components/Palette";

export class backend extends Component {
  render() {
    return (
      <>
        <div>后端</div>
        <Button
          type="primary"
          onClick={() => {
            this.props.history.push("/frontend");
          }}
        >
          go
        </Button>
        调色盘
        <Palette />
      </>
    );
  }
}

export default backend;
